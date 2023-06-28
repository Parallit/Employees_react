import { FC } from 'react';
import style from './EmployeeList.module.scss'
import { Employees, User } from 'src/store/types.common';

interface EmployeesProps {
  employees: Employees
}

export const EmployeeList: FC<EmployeesProps> = ({employees}) => {

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
            <li>
              <button>Edit</button>
              <button>Remove</button>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};
