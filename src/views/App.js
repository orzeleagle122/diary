import React from 'react';
import UsersList from '../components/organisms/UsersList/UsersList';
import { Wrapper } from './App.elements';
import { GlobalStyles } from '../assets/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';

const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <UsersList />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
