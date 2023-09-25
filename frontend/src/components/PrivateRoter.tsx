import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AppDispatch } from 'src/store';
import { checkAuthUser } from 'src/store/auth/authSlice';
import { selectIsAuth, selectLoading } from 'src/store/auth/selectors';

interface PrivateRouteProps {
  component?: JSX.Element;
  isAuth?: boolean
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ component }) => {
  const dispatch = useDispatch<AppDispatch>();
  const isAuth = useSelector(selectIsAuth);
  const isLoading = useSelector(selectLoading);
  const location = useLocation();  

  console.log(isAuth, 'В начале роута');

  if(!localStorage.getItem('token')) {
    return <Navigate to="/login" state={{from: location}} replace/>;  
  }

  if (!isAuth) {
    console.log(isAuth, 'В функции');
    return <Navigate to="/login" state={{from: location}} replace/>;  
  }

  return component ? component : <Outlet />;
};

