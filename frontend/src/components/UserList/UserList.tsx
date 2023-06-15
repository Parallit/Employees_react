import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
import { fetchUsers } from 'src/store/users/usersSlice';
import { selectUsers } from 'src/store/users/selectors';
import style from './UserList.module.scss';

export const UserList: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector(selectUsers);

  const handleUserList = () => {
    dispatch(fetchUsers());
  };

  useEffect(() => {
    handleUserList();
  }, []);

  return (
    <>
      <div className={style.users_container}>
        <ul className={style.users_titles}>
          <li>Name</li>
          <li>Department</li>
          <li>Telephone</li>
          <li>Address</li>
          <li>Subordinates</li>
        </ul>
      </div>
      <div>
        <div className={style.user_container}>
          {users.map((user) => (
            <ul className={style.user_box} key={user.email}>
              <li>{user.name}</li>
              <li>{user.department}</li>
              <li>{user.telephone}</li>
              <li>{user.address}</li>
              <li>{user.employees}</li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};
