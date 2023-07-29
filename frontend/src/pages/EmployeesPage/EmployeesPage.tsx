import { TitlePage } from 'src/styles/TitlePage';
import { HandbookEmployeesBox } from 'src/components/HandbookEmployeesBox';
import { ModalButtonBox } from 'src/components/ModalButtonBox';
import { HandbookTitleBox } from 'src/styles/HandbookTitleBox';

export const EmployeesPage = () => {
  const titles = [
    'First Name',
    'Last Name',
    'Position',
    'Department',
    'Room',
    'Telephone',
    'Chief',
  ]

  return (
    <>
      <TitlePage>Employees</TitlePage>
      <ModalButtonBox
        modalContentType={'add'}
        buttonContent={'Add +'}
        $primaryButton
        $paddingButton='20px 30px' />
      <HandbookTitleBox titles={titles} />
      <HandbookEmployeesBox titles={titles}/>
    </>
  );
};
