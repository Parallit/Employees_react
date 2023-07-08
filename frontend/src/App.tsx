import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from 'src/components/AppRouter';
import GlobalStyles from 'src/styles/global'
import { ThemeProvider } from 'styled-components'
import { baseTheme } from 'src/styles/theme';

const App: FC = () => {
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

export default App;
