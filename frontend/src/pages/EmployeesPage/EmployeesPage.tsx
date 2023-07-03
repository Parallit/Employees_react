import { ButtonModal } from 'src/components/ButtonModal';
import { EmployeeList } from 'src/components/EmployeeList';
import style from './EmployeesPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
import { selectEmployees } from 'src/store/employees/selectors';
import { fetchEmployees } from 'src/store/employees/employeesSlice';
import { useEffect, useState } from 'react';
import { Modal } from 'src/components/Modal';
import { EmployeeAddForm } from 'src/components/EmployeeAddForm';

export const EmployeesPage = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
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
        children={<EmployeeAddForm />}
      />
      <div className={style.interface}>
        <ButtonModal openModal={() => setOpenModal(true)}>Add +</ButtonModal>
      </div>
      <EmployeeList employees={employees} />
    </>
  );
};
