import React from 'react';
import '@utils/FontAwesomeWrapper';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import Router from '@utils/Router';
import { connect } from 'react-redux';
import { createTheme } from '@utils/ThemeGenerator';

function App(props) {
  const theme = createTheme(props.themeColor);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
};

const mapStateToProps = theme => theme;

export default connect(mapStateToProps)(App);
