import { TitlePage } from 'src/styles/Titles/TitlePage';
import { HandbookEmployeesBox } from 'src/components/HandbookEmployeesBox';
import { ModalButtonBox } from 'src/components/ModalButtonBox';
import { HandbookTitleBox } from 'src/styles/HandbookTitleBox';
import { ITitles } from 'src/store/types.common';
import { Button } from 'src/styles/Buttons/Button';
import { IconComponent } from 'src/components/Icon';
import { WrapperCenter } from 'src/styles/Containers/WrapperCenter';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store';
import { fetchEmployees } from 'src/store/employees/employeesSlice';
import { SearchContextProvider } from 'src/components/Context/SearchContext';

export const EmployeesPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const titles: ITitles = [
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
      <WrapperCenter>
        <ModalButtonBox
          modalContentType={'add'}
          buttonContent={'Add +'}
          $primaryButton
          $paddingButton='20px 30px' 
        />
        <Button 
          onClick={() => dispatch(fetchEmployees())}
          children={<IconComponent type={'reload'} />} 
          $primaryButton 
          $padding='20px 30px' 
        />
      </WrapperCenter>
      <HandbookTitleBox titles={titles} />
      <SearchContextProvider>
        <HandbookEmployeesBox titles={titles}/>
      </SearchContextProvider>
    </>
  );
};