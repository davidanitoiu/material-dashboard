import React, { Component } from 'react';
import '@utils/FontAwesomeWrapper';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import Router from '@utils/Router';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    );
  }
}

const mapStateToProps = theme => theme;

export default connect(mapStateToProps)(App);
