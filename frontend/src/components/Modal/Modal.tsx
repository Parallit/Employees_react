import { FC } from 'react';
import style from './Modal.module.scss';
import { EmployeeRemoveWarn } from '../EmployeeRemoveWarn';
import { Employee, User } from 'src/store/types.common';
import { SubordinatesLinkBox } from '../SubordinatesLinkBox';
import { EmployeeAddBox } from '../EmployeeAddBox';
import { EmployeeEditBox } from '../EmployeeEditBox';

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
            return <EmployeeAddBox onClose={onClose} />;
          }
          case "edit": {
            if(employee)
              return <EmployeeEditBox employee={employee} onClose={onClose}/>;
          }
          case 'remove': {
            if(employee)
              return <EmployeeRemoveWarn employee={employee} onClose={onClose}/>
          }
          case 'subordinates': {
            if(user)
              return <SubordinatesLinkBox subordinates={user.employeesId} $width='450px'/>
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
