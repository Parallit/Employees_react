import GlobalStyles from 'src/styles/global'
import { baseTheme } from 'src/styles/theme';
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from 'src/components/AppRouter';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store';
import { useEffect } from 'react';
import { checkAuthUser } from './store/auth/authSlice';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(checkAuthUser());
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
