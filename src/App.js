import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import Router from '@utils/Router';
import { useSelector } from 'react-redux';
import { createTheme } from '@utils/ThemeGenerator';

function App() {
  const themeColor = useSelector(state => state.themeColor);
  const theme = createTheme(themeColor);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
};

export default App
