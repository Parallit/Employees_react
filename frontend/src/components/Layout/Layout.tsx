import { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import style from './Layout.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
import { checkAuthUser, userLogout } from 'src/store/auth/authSlice';
import { selectAuth, selectLoading } from 'src/store/auth/selectors';
import { Footer } from 'src/components/Footer';
import { StyledLink } from 'src/components/styles/StyledLink';
import { ContainerLink } from 'src/components/styles/Containers/ContainerLink';

const navigate = [
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
  const isAuth = useSelector(selectAuth);
  const LayoutLoading = 'Loading...';

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuthUser());
    }
  }, []);

  return (
    <>
      <div className={style.wrp}>
        <header className={style.header_container}>
          <ul className={style.links}>
            {navigate.map((item, idx) => (
              <ContainerLink key={idx}>
                <StyledLink to={item.path}>{item.name}</StyledLink>
              </ContainerLink>
            ))}
            {isAuth ?
              <ContainerLink>
                <StyledLink to={'/'} onClick={() => dispatch(userLogout())}>Logout</StyledLink>
              </ContainerLink>
              :
              <ContainerLink>
                <StyledLink to={'/login'}>Login</StyledLink>
              </ContainerLink>
            }
          </ul>
        </header>
        <main className={style.content_container}>
          <div>{isLoading ? LayoutLoading : <Outlet />}</div>
        </main>
        <footer className={style.footer_container}>
          <Footer />
        </footer>
      </div>
    </>
  );
};
