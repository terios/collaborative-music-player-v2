import React, { Component } from "react";
import { Route } from "react-router";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { HomePage, ContactPage, AuthPage } from "components/";

import theme from "./themes/default";

const App = () => {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/auth" component={AuthPage} />
        <Route exact path="/contact" component={ContactPage} />
      </div>
    </MuiThemeProvider>
  );
};

export default App;
