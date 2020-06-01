import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import Router from '@utils/Router';
import { connect } from 'react-redux';
import { createTheme } from '@utils/ThemeGenerator';

function App({themeColor}) {
  const theme = createTheme(themeColor);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
};

const mapStateToProps = theme => theme;

export default connect(mapStateToProps)(App);
