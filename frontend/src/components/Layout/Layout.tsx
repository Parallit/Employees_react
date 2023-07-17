import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
import { userLogout } from 'src/store/auth/authSlice';
import { selectIsAuth, selectLoading } from 'src/store/auth/selectors';
import { Footer } from 'src/components/Footer';
import { NavigateLink } from 'src/styles/NavigateLink';
import { ContainerLink } from 'src/styles/Containers/ContainerLink';
import { IconComponent } from 'src/components/Icon';
import { FooterContainer } from 'src/styles/Containers/FooterContainer';
import { LayoutContainer } from 'src/styles/Containers/LayoutContainer';
import { HeaderContainer } from 'src/styles/Containers/HeaderContainer';
import { ContentContainer } from 'src/styles/Containers/MainContainer';
import { Spinner } from 'src/components/Spinner'

const authNavigation = [
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
            {authNavigation.map((item) => (
              <ContainerLink key={item.name}>
                <NavigateLink to={item.path}>{item.name}</NavigateLink>
              </ContainerLink>
            ))}
            {isAuth ?
              <ContainerLink >
                <NavigateLink to={'/login'} onClick={() => dispatch(userLogout())}>
                  <IconComponent type={'logout'} />
                </NavigateLink>
              </ContainerLink>
              :
              <ContainerLink >
                <NavigateLink to={'/login'}>
                  <IconComponent type={'login'} />
                </NavigateLink>
              </ContainerLink>
            }
          </ul>
        </HeaderContainer>
        <ContentContainer>
          <section>{isLoading ? <Spinner/> : <Outlet />}</section>
        </ContentContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </LayoutContainer>
    </>
  );
};
