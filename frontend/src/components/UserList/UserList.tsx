import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store';
import { fetchUsers } from '../../store/users/usersSlice';
import { selectUsers } from '../../store/users/selectors';
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
      <ul className={style.users_box}>
        {users.map((user) => (
          <li className={style.user_box} key={user.email}>
            {' '}
            Пользователь: {user.name}
          </li>
        ))}
      </ul>
    </>
  );
};
