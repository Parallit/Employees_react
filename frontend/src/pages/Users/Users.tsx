import { UserList } from 'src/components/UserList';
import style from './Users.module.scss';
import { FilterSearch } from 'src/components/FilterSearch';

export const Users = () => {
  return (
    <>
      <h1 className={style.heading}>Users</h1>
      {/* <FilterSearch /> */}
      <UserList />
    </>
  );
};
