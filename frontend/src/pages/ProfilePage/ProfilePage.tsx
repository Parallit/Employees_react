import { FC, useEffect } from 'react';
import style from './Profile.module.scss';
import { ProfileUserForm } from 'src/components/ProfileUserForm';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
import { fetchCurrentUser } from 'src/store/user/userSlice';
import { TitlePage } from 'src/styles/Titles/TitlePage';
import { ChiefInfo } from 'src/components/ChiefInfo';
import { selectIsLoadingUser, selectUser } from 'src/store/user/selectors';
import { Spinner } from 'src/components/Spinner';
import { styled } from 'styled-components';
import { SubordinatesLinkBox } from 'src/components/SubordinatesLinkBox';

export const ProfilePage: FC = () => {
  const currentUser = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoadingUser)
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, []);
  console.log('Parent', currentUser.employeesId);
  
  return (
    <>
      <TitlePage>
        Profile
      </TitlePage>
      <div className={style.profile_container}>
        {
          isLoading ? <Spinner /> :
          <MainContainer>
            <ContainerInfo>
              <ChiefInfo user={currentUser} $width='60%'/>
              <SubordinatesLinkBox subordinates={currentUser.employeesId} $width='40%'/>
            </ContainerInfo>
            <ProfileUserForm user={currentUser} />
          </MainContainer>
        }
      </div>
    </>
  );
};


const ContainerInfo = styled.div`
    border-radius: 15px;
    display: flex;
    justify-content: center;
    background: rgba(0, 0, 0, 0.9);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.9);
    margin-bottom: 30px;
`

const MainContainer = styled.div`
  width: 100%;
`