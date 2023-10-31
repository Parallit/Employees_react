import { FC, useEffect } from 'react';
import style from './Profile.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
import { fetchCurrentUser } from 'src/store/user/userSlice';
import { TitlePage } from 'src/styles/Titles/TitlePage';
import { ChiefInfo } from 'src/components/ChiefInfo';
import { selectIsLoadingUser, selectUser } from 'src/store/user/selectors';
import { Spinner } from 'src/components/Spinner';
import { styled } from 'styled-components';
import { SubordinatesLinkBox } from 'src/components/SubordinatesLinkBox';
import { baseTheme } from 'src/styles/theme';
import { ProfileUpdateBox } from 'src/components/ProfileUpdateBox';

export const ProfilePage: FC = () => {
  const currentUser = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoadingUser);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, []);

  return (
    <>
      <TitlePage>Profile</TitlePage>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ContainerInfo>
            <ChiefInfo user={currentUser} $width="100%" />
            <SubordinatesLinkBox
              subordinates={currentUser.employeesId}
              $width="100%"
            />
          </ContainerInfo>
          <ProfileUpdateBox user={currentUser} $width="100%" $margin="40px 0" />
        </>
      )}
    </>
  );
};

const ContainerInfo = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  width: 100%;
  gap: 20px;

  @media ${baseTheme.media.laptopL} {
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
`;
