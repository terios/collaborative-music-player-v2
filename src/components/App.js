import React, { Component } from "react";
import { Route } from "react-router";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { GamePage } from "components/";

import theme from "./themes/default";

const App = () => {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
      <div>
        <Route exact path="/" component={GamePage} />
      </div>
    </MuiThemeProvider>
  );
};

export default App;
