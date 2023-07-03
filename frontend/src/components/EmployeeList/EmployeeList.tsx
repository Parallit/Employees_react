import { FC, useEffect } from 'react';
import style from './EmployeeList.module.scss';
import { Employees } from 'src/store/types.common';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'src/store/auth/selectors';

interface EmployeesProps {
  employees: Employees;
}

export const EmployeeList: FC<EmployeesProps> = ({ employees }) => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <>
      <div className={style.users_container}>
        <ul className={style.users_titles}>
          <li>First Name</li>
          <li>Last Name</li>
          <li>Position</li>
          <li>Department</li>
          <li>Room</li>
          <li>Telephone</li>
          <li>Chief</li>
          <li>Actions</li>
        </ul>
      </div>
      <div className={style.user_container}>
        {employees.map((employee) => (
          <ul key={employee._id} className={style.user_box}>
            <li>{employee.firstName}</li>
            <li>{employee.lastName}</li>
            <li>{employee.position}</li>
            <li>{employee.department}</li>
            <li>{employee.room}</li>
            <li>{employee.telephone}</li>
            <li>{employee.userId.name}</li>
            {
              currentUser._id === employee.userId._id &&
              <li>
                <button>Edit</button>
                <button>Remove</button>
              </li>
            }
          </ul>
        ))}
      </div>
    </>
  );
};
