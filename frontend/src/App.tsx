import { FC, useEffect } from 'react';
import { BrowserRouter, useLocation, useNavigate } from 'react-router-dom';
import { AppRouter } from 'src/components/AppRouter';
import GlobalStyles from 'src/styles/global'
import { ThemeProvider } from 'styled-components'
import { baseTheme } from 'src/styles/theme';
import { checkAuthUser } from './store/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './store';
import { selectIsAuth } from './store/auth/selectors';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isAuth = useSelector(selectIsAuth);

  useEffect( () => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuthUser());
    }
  }, []);

  return (
    <>
    
      <ThemeProvider theme={baseTheme}>
        <BrowserRouter>
          <AppRouter />
          <GlobalStyles />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App

