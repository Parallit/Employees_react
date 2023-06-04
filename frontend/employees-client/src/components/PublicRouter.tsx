import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '../store';

interface PublicRouteProps {
    component?: JSX.Element;
}

export const PublicRoute: FC<PublicRouteProps> = ({ component }) => {
    const isAuth = useSelector((state: RootState) => state.auth.isAuth);

    if (isAuth) {
        return <Navigate to="/" />;
    }

    return component ? component : <Outlet />;
};