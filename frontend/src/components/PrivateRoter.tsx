import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectIsAuth, selectIsAuthChecking } from 'src/store/auth/selectors';
import { Spinner } from './Spinner';

interface PrivateRouteProps {
  component?: JSX.Element;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ component }) => {
  const isAuth = useSelector(selectIsAuth);
  const isAuthChecking = useSelector(selectIsAuthChecking);
  
  const location = useLocation();  

  if(!localStorage.getItem('token') && !isAuthChecking) {
    return <Navigate to="/login" state={{from: location}} replace/>;  
  }

  if(isAuth) {
    return component ? component : <Outlet />;
  }

  if(!isAuthChecking) {
    if (isAuthChecking && !isAuth) {
      return <Navigate to="/login" state={{from: location}} replace/>;  
    }
  }

  return null
};