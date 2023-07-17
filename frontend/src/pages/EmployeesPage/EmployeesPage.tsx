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
import { TitlePage } from 'src/styles/TitlePage';
import { HandbookTitleBox } from 'src/styles/HandbookTitleBox';
import { HandbookContentBox } from 'src/styles/HandbookContentBox';

export const EmployeesPage = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalChildren, setModalChildren] = useState<ReactNode | null>(null);
  const employees = useSelector(selectEmployees);
  const dispatch = useDispatch<AppDispatch>();
  
  const titles = [
    'First Name',
    'Last Name',
    'Position',
    'Department',
    'Room',
    'Telephone',
    'Chief',
    'Actions'
  ]

  const handleClickModal = (children: ReactNode) => {
    setModalChildren(children)
    setOpenModal(true)
  }

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  return (
    <>
      <TitlePage>Employees</TitlePage>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        children={modalChildren}
      />
      <div className={style.interface}>
        <ButtonModal handleClickModal={handleClickModal} children={<EmployeeAddForm/>} content={'Add +'}/>
      </div>
      <HandbookTitleBox titles={titles} />
      {/* <HandbookContentBox people={employees}/> */}
      {/* <EmployeeList employees={employees} handleClickModal={handleClickModal} onClose={() => setOpenModal(false)}/> */}
    </>
  );
};
