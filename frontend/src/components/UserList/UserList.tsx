import { FC, useEffect } from 'react';
import style from './UserList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
import { fetchUsers } from 'src/store/users/usersSlice';
import { selectUsers } from 'src/store/users/selectors';
import { SubordinateList } from 'src/components/SubordinateList';

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
      <div>
        <div className={style.user_container}>
          {users.map((user) => (
            <ul className={style.user_box} key={user.email}>
              <li>{user.firstName}</li>
              <li>{user.lastName}</li>
              <li>{user.department}</li>
              <li>{user.telephone}</li>
              <li>{user.room}</li>
              <li>
                <SubordinateList employees={user.employeesId} />
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};
