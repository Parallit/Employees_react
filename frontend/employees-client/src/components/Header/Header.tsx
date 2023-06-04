import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";
import style from './Header.module.scss'
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { userLogout } from "../../store/auth/authSlice";

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
        path: '/login'
    }
];


export const Header: FC = () => {
    const dispatch = useDispatch<AppDispatch>()

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
                            <button onClick={() => dispatch(userLogout())} className={style.link}>Logout</button>
                        </li> :
                </ul>
            </header>
            <main>
                <div>
                    <Outlet />
                </div>
            </main>
            <footer>

            </footer>
        </>
    );
}
