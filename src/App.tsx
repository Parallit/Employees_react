import GlobalStyles from 'src/styles/global';
import { baseTheme } from 'src/styles/theme';
import { ThemeProvider } from 'styled-components';
import { AppRouter } from 'src/components/AppRouter';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store';
import { useEffect } from 'react';
import { checkAuthUser } from 'src/store/auth/authSlice';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuthUser());
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={baseTheme}>
        <AppRouter />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};

export default App;
