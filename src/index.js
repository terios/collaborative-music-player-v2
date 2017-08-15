// Dependencies
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import createHistory from "history/createBrowserHistory";
import { ConnectedRouter } from "react-router-redux";

import { basename } from "config";
import configureStore from "store/configure";
import reducer from "store/reducer";
import injectTapEventPlugin from "react-tap-event-plugin";

// Components
import App from "components/App";

injectTapEventPlugin();

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

const store = configureStore({}, history);

const renderApp = () =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>;

const root = document.getElementById("app");
render(renderApp(), root);

if (module.hot) {
  module.hot.accept("components/App", () => {
    require("components/App");
    render(renderApp(), root);
  });
}
