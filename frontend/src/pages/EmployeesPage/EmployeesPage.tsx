import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
import { selectEmployees } from 'src/store/employees/selectors';
import { fetchEmployees } from 'src/store/employees/employeesSlice';
import { useEffect } from 'react';
import { TitlePage } from 'src/styles/TitlePage';
import { HandbookTitleBox } from 'src/styles/HandbookTitleBox';
import { HandbookEmployeesBox } from 'src/styles/HandbookEmployeesBox';
import { ModalButtonBox } from 'src/components/ModalButtonBox';

export const EmployeesPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const employees = useSelector(selectEmployees);

  const titles = [
    'First Name',
    'Last Name',
    'Position',
    'Department',
    'Room',
    'Telephone',
    'Chief',
  ]

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  return (
    <>
      <TitlePage>Employees</TitlePage>
      <ModalButtonBox $primaryButton marginButton='0 0 20px 0' paddingButton='20px 30px' modalContentType={'add'} buttonContent={'Add +'} />
      <HandbookTitleBox titles={titles} />
      <HandbookEmployeesBox employees={employees} />
    </>
  );
};
