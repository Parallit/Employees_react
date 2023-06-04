import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '../store';

interface PrivateRouteProps {
    component?: JSX.Element;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ component }) => {
    const isAuth = useSelector((state: RootState) => state.auth.isAuth);

    if (!isAuth) {
        return <Navigate to="/login" />;
    }

    return component ? component : <Outlet />;
};