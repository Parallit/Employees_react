import React, { FC, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './components/AppRouter';
import { AppDispatch, RootState } from './store';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuthUser } from './store/auth/authSlice';

const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const selectLoading = useSelector((state: RootState) => state.auth.isLoading)

  useEffect(() => {
    if (localStorage.getItem('token')) {     
      dispatch(checkAuthUser())
    }
  }, [])

  // Добавить в нужное место отрисовку Loading
  // if(selectLoading) {
  //   return <>
  //     <h1>Loading...</h1>
  //   </>
  // }

  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
