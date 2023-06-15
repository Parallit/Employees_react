import { UserList } from 'src/components/UserList';
import { ButtonModal } from 'src/components/ButtonModal';
import style from './Users.module.scss'

export const Users = () => {
  return (
    <>
      <h1 className={style.heading}>Users</h1>
      <ButtonModal />
      <UserList />
    </>
  );
};
