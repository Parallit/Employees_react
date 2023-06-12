import { FC, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import style from './Layout.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
import { checkAuthUser, userLogout } from 'src/store/auth/authSlice';
import { selectLoading } from 'src/store/auth/selectors';

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
    name: 'Login',
    path: '/login',
  },
];

export const Layout: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector(selectLoading);
  const LayoutLoading = 'Loading...';

  // useEffect(() => {
  //     if (localStorage.getItem('token')) {
  //         dispatch(checkAuthUser())
  //     }
  // }, [])

  return (
    <>
      <header className={style.header}>
        <ul className={style.links}>
          {navigate.map((item, idx) => (
            <li className={style.link} key={idx}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? `${style.active_link}` : `${style.link}`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <li className={style.link}>
            <NavLink
              to={'/'}
              onClick={() => dispatch(userLogout())}
              className={style.link}
            >
              Logout
            </NavLink>
          </li>{' '}
          :
        </ul>
      </header>
      <main className={style.container}>
        <div>{isLoading ? LayoutLoading : <Outlet />}</div>
      </main>
      <footer className={style.container}>2023</footer>
    </>
  );
};
