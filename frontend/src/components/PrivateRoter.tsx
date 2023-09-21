import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AppDispatch } from 'src/store';
import { checkAuthUser } from 'src/store/auth/authSlice';
import { selectIsAuth, selectLoading } from 'src/store/auth/selectors';

interface PrivateRouteProps {
  component?: JSX.Element;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ component }) => {
  const dispatch = useDispatch<AppDispatch>();
  const isAuth = useSelector(selectIsAuth);
  // const isLoading = useSelector(selectLoading);
  const location = useLocation();


  if(!localStorage.getItem('token')) {
    return <Navigate to="/login" state={{from: location}} replace/>;  
  }

  if (!isAuth) {
    return <Navigate to="/login" state={{from: location}} replace/>;  
  }

  return component ? component : <Outlet />;
};

