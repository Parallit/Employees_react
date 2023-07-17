import { FC, useEffect } from 'react';
import style from './Profile.module.scss';
import { ProfileUserInfo } from 'src/components/ProfileUserInfo/ProfileUserInfo';
import { ProfileUserForm } from 'src/components/ProfileUserForm';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
import { fetchCurrentUser } from 'src/store/user/userSlice';
import { selectAuthUser } from 'src/store/auth/selectors';
import { TitlePage } from 'src/styles/TitlePage';

export const Profile: FC = () => {
  const currentUser = useSelector(selectAuthUser);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, []);

  return (
    <>
      <TitlePage $textTransform='none'>This is your profile page.</TitlePage>
      <div className={style.heading_container}>
        <h3>Hello {currentUser.firstName} {currentUser.lastName}!</h3>
      </div>
      <div className={style.profile_container}>
        <ProfileUserForm user={currentUser} />
        <ProfileUserInfo user={currentUser} />
      </div>
    </>
  );
};
