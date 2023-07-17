import { UserList } from 'src/components/UserList';
import { TitlePage } from 'src/styles/TitlePage';
import { HandbookTitleBox } from 'src/styles/HandbookTitleBox';
import { HandbookContentBox } from 'src/styles/HandbookContentBox';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
import { selectUsers } from 'src/store/users/selectors';
import { fetchUsers } from 'src/store/users/usersSlice';
import { useEffect } from 'react';


export const Users = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector(selectUsers);
  const titles = [
    'First Name',
    'Last Name',
    'Position',
    'Department',
    'Room',
    'Telephone',
    'Subordinates',
  ]


  const handleUserList = () => {
    dispatch(fetchUsers());
  };

  useEffect(() => {
    handleUserList();
  }, []);

  return (
    <>
      <TitlePage>Users</TitlePage>
      <HandbookTitleBox titles={titles}/>
      <HandbookContentBox people={users}/>
    </>
  );
};
