import React, {Component} from 'react';
import {Route} from 'react-router'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {HomePage, ContactPage} from 'components/'

import theme from './themes/default'

const App = () => {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme({userAgent: navigator.userAgent})}>
      <div>
        <Route exact path="/home" component={HomePage}/>
        <Route exact path="/contact" component={ContactPage}/>
      </div>
    </MuiThemeProvider>
  )
}

export default App;
