import camelCase from "lodash/camelCase";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import { routerReducer } from "react-router-redux";

const reducers = { router: routerReducer, form: formReducer };

const req = require.context(".", true, /\.\/.+\/reducer\.js$/);
req.keys().forEach(key => {
  const storeName = camelCase(key.replace(/\.\/(.+)\/.+$/, "$1"));
  reducers[storeName] = req(key).default;
});

export default combineReducers(reducers);
