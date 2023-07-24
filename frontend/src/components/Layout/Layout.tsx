import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
import { userLogout } from 'src/store/auth/authSlice';
import { selectIsAuth, selectLoading } from 'src/store/auth/selectors';
import { Footer } from 'src/components/Footer';
import { NavigateLink } from 'src/styles/NavigateLink';
import { ContainerLink } from 'src/styles/Containers/ContainerLink';
import { FooterContainer } from 'src/styles/Containers/FooterContainer';
import { LayoutContainer } from 'src/styles/Containers/LayoutContainer';
import { HeaderContainer } from 'src/styles/Containers/HeaderContainer';
import { ContentContainer } from 'src/styles/Containers/MainContainer';
import { Spinner } from 'src/components/Spinner'
import { AuthLinks } from 'src/components/AuthLinks';
import { styled } from 'styled-components';

const Navigation = [
  {
    name: 'Homepage',
    path: '/',
  },
  {
    name: 'Employees',
    path: '/employees',
  },
  {
    name: 'Users',
    path: '/users',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Profile',
    path: '/profile',
  },
];

export const Layout: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector(selectLoading);
  const isAuth = useSelector(selectIsAuth);

  return (

    <>
      <LayoutContainer>
        <HeaderContainer>
          <ul>
            <ContainerLink>
              <NavigateLink $activeColor='none' to={'/'}>
                <TextProject>Handbook</TextProject>
              </NavigateLink>
            </ContainerLink>
          </ul>
          <GlassBox>
            {Navigation.map((item) => (
              <ContainerLink key={item.name}>
                <NavigateLink to={item.path}>{item.name}</NavigateLink>
              </ContainerLink>
            ))}
          </GlassBox>
          <ul>
            <AuthLinks isAuth={isAuth} onClick={() => dispatch(userLogout())} />
          </ul>
        </HeaderContainer>
        <ContentContainer>
          <section>{isLoading ? <Spinner /> : <Outlet />}</section>
        </ContentContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </LayoutContainer>
    </>
  );
};

const GlassBox = styled.ul`
  padding: 10px 20px;
  background: rgba( 255, 255, 255, 0.1 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 3px );
  -webkit-backdrop-filter: blur( 3px );
  border-radius: 20px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
`

const TextProject = styled.span`
  background: rgb(249,123,30);
  background: linear-gradient(166deg, rgba(249,123,30,1) 25%, rgba(205,40,149,1) 81%);
  padding: 5px 10px;
  border-radius: 5px;
`