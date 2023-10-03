import { TitlePage } from 'src/styles/Titles/TitlePage';
import { HandbookTitleBox } from 'src/styles/HandbookTitleBox';
import { HandbookUsersBox } from 'src/components/HandbookUsersBox';
import { ITitles } from 'src/store/types.common';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store';
import { Button } from 'src/styles/Buttons/Button';
import { fetchUsers } from 'src/store/users/usersSlice';
import { IconComponent } from 'src/components/Icon';
import { WrapperEnd } from 'src/styles/Containers/WrapperEnd';
import { SearchContextProvider } from 'src/components/Context/SearchContext';

export const Users = () => {
  const dispatch = useDispatch<AppDispatch>();
  const titles: ITitles = [
    'First Name',
    'Last Name',
    'Position',
    'Department',
    'Room',
    'Telephone',
    'Subordinates',
  ]

  return (
    <>
      <TitlePage>Users</TitlePage>
      <WrapperEnd>
        <Button 
          onClick={() => dispatch(fetchUsers())}
          children={<IconComponent type={'reload'} />} 
          $primaryButton 
          $padding='20px 30px' 
        />
      </WrapperEnd>
      <HandbookTitleBox titles={titles} />
      <SearchContextProvider>
        <HandbookUsersBox titles={titles} />
      </SearchContextProvider>
    </>
  );
};
