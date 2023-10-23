import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectIsAuth, selectIsAuthChecking, selectIsUserChecked } from 'src/store/auth/selectors';

interface PrivateRouteProps {
  component?: JSX.Element;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ component }) => {
  const isAuth = useSelector(selectIsAuth);
  const isAuthChecking = useSelector(selectIsAuthChecking);
  const isUserChecked = useSelector(selectIsUserChecked);

  const location = useLocation();

  if (isAuth) {
    return component ? component : <Outlet />;
  }

  if (!isAuthChecking) {
    if (!localStorage.getItem('token')) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!isAuth && isUserChecked) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (isAuthChecking && !isAuth) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  }

  // if(!localStorage.getItem('token') && !isAuthChecking) {
  //   return <Navigate to="/login" state={{from: location}} replace/>;  
  // }

  // if(!isAuth && isUserChecked && !isAuthChecking) {
  //   return <Navigate to="/login" state={{from: location}} replace/>;  
  // }

  // if(!isAuthChecking) {
  //   if (isAuthChecking && !isAuth) {
  //     return <Navigate to="/login" state={{from: location}} replace/>;  
  //   }
  // }

  return null
};