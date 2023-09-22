import { FC } from 'react';
import style from './Modal.module.scss';
import { EmployeeAddForm } from '../EmployeeAddForm';
import { EmployeeEditForm } from '../EmployeeEditForm';
import { EmployeeRemoveWarn } from '../EmployeeRemoveWarn';
import { Employee, User } from 'src/store/types.common';
import { SubordinatesLinkBox } from '../SubordinatesLinkBox';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  modalContentType: string;
  employee?: Employee;
  user?: User
}

export const Modal: FC<ModalProps> = ({ open, onClose, modalContentType, employee, user }) => {
  if (!open) return null;

    const getModalContent = (modalContentType: string) => {
      switch (modalContentType) {
          case "add": {
            return <EmployeeAddForm onClose={onClose} />;
          }
          case "edit": {
            if(employee)
              return <EmployeeEditForm employee={employee} onClose={onClose}/>;
          }
          case 'remove': {
            if(employee)
              return <EmployeeRemoveWarn employee={employee} onClose={onClose}/>
          }
          case 'subordinates': {
            if(user)
              return <SubordinatesLinkBox subordinates={user.employeesId}/>
          }
      }
    };

  return (
    <>
      <div className={style.overlay}>
        <div className={style.modalContainer}>
          <div>
            <p onClick={onClose} className={style.closeBtn}>
              X
            </p>
            <div className="content">
              {getModalContent(modalContentType)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
