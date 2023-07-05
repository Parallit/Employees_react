import { ButtonModal } from 'src/components/ButtonModal';
import { EmployeeList } from 'src/components/EmployeeList';
import style from './EmployeesPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
import { selectEmployees } from 'src/store/employees/selectors';
import { fetchEmployees } from 'src/store/employees/employeesSlice';
import { ReactNode, useEffect, useState } from 'react';
import { Modal } from 'src/components/Modal';
import { EmployeeAddForm } from 'src/components/EmployeeAddForm';

export const EmployeesPage = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalChildren, setModalChildren] = useState<ReactNode | null>(null);

  const handleClickModal = (children: ReactNode) => {
    setModalChildren(children)
    setOpenModal(true)
  }

  const employees = useSelector(selectEmployees);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  return (
    <>
      <h1 className={style.heading}>Employees</h1>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        children={modalChildren}
      />
      <div className={style.interface}>
        <ButtonModal handleClickModal={handleClickModal} children={<EmployeeAddForm/>} content={'Add +'}/>
      </div>
      <EmployeeList employees={employees} handleClickModal={handleClickModal} onClose={() => setOpenModal(false)}/>
    </>
  );
};
