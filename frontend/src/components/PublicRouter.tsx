import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectIsAuth } from 'src/store/auth/selectors';

interface PublicRouteProps {
  component?: JSX.Element;
}

export const PublicRoute: FC<PublicRouteProps> = ({ component }) => {
  const location = useLocation();
  const isAuth = useSelector(selectIsAuth);

  if (!isAuth) {
    return <Navigate to="/login" state={{from: location}} replace/>;
  }

  return component ? component : <Outlet />;
};
