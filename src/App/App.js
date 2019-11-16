 import React from 'react';
import theme from '@app/App.styles';
import '@utils/FontAwesomeWrapper';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import Router from '@utils/Router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}

export default App;
