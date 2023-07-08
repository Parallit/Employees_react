import { FC, ReactNode } from 'react';
import style from './EmployeeList.module.scss';
import { Employees } from 'src/store/types.common';
import { useSelector } from 'react-redux';
import { selectAuthUser } from 'src/store/auth/selectors';
import { EmployeeEditForm } from 'src/components/EmployeeEditForm';
import { EmployeeRemoveWarn } from 'src/components/EmployeeRemoveWarn';
import { IconComponent } from 'src/components/Icon';
import { NavigateLink } from 'src/styles/NavigateLink';


interface EmployeeListProps {
  employees: Employees;
  handleClickModal: (children: ReactNode) => void;
  onClose: () => void
}

export const EmployeeList: FC<EmployeeListProps> = ({ employees, handleClickModal, onClose }) => {
  const currentUser = useSelector(selectAuthUser);

  if (employees.length === 0) {
    return (
      <div className={style.user_container}>
        <p className={style.user_box}>employees not added yet</p>
      </div>
    )
  }

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
            <NavigateLink to={`user/${employee.userId._id}`} $fontSize='15px' $textTransform='capitalize'>
              {employee.userId.name}
            </NavigateLink>
            {
              currentUser._id === employee.userId._id &&
              <li className={style.actions_container}>
                <div>
                  <button onClick={() => handleClickModal(<EmployeeEditForm employee={employee}/>)}>
                    <IconComponent type={'edit'}/>
                  </button>
                  <button onClick={() => handleClickModal(<EmployeeRemoveWarn onClose={onClose} employee={employee} />)}>
                    <IconComponent type={'remove'}/>
                  </button>
                </div>
              </li>
            }
          </ul>
        ))}
      </div>
    </>
  );
};
