import { FC } from 'react';
import style from './Modal.module.scss';
import { EmployeeAddForm } from '../EmployeeAddForm';
import { EmployeeEditForm } from '../EmployeeEditForm';
import { EmployeeRemoveWarn } from '../EmployeeRemoveWarn';
import { Employee } from 'src/store/types.common';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  modalContentType: string;
  employee?: Employee
}

export const Modal: FC<ModalProps> = ({ open, onClose, modalContentType, employee }) => {
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
