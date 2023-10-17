import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectIsAuth } from 'src/store/auth/selectors';

interface PrivateRouteProps {
  component?: JSX.Element;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ component }) => {
  const isAuth = useSelector(selectIsAuth)

  const location = useLocation();  

  if(!localStorage.getItem('token')) {
    return <Navigate to="/login" state={{from: location}} replace/>;  
  }
  if (!isAuth) {
    return <Navigate to="/login" state={{from: location}} replace/>;  
  }
  return component ? component : <Outlet />;
};