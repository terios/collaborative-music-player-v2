import { createStore, applyMiddleware, compose } from "redux";
import io from "socket.io-client";
import { routerMiddleware } from "react-router-redux";
import { isDev, isBrowser, location } from "config";
import reducer from "./reducer";

import { setState, setConnectionState } from "./actions";
import socketMiddlware from "./socketMiddlware";
import uuid from "uuid";

function getClientId() {
  let id = localStorage.getItem("clientId");
  if (!id) {
    id = uuid.v4();
    localStorage.setItem("clientId", id);
  }
  return id;
}

const devtools =
  isDev && isBrowser && window.devToolsExtension
    ? window.devToolsExtension
    : () => fn => fn;
const socket = io("localhost:8090");

const configureStore = (initialState, history) => {
  const historyMiddleware = routerMiddleware(history);

  const enhancers = [
    applyMiddleware(socketMiddlware(socket), historyMiddleware),
    devtools()
  ];

  const store = createStore(reducer, initialState, compose(...enhancers));

  socket.on("state", state => store.dispatch(setState(state)));
  ["connect"].forEach(ev =>
    socket.on(ev, () =>
      store.dispatch(setConnectionState(ev, socket.connected, getClientId()))
    )
  );

  if (module.hot) {
    module.hot.accept("./reducer", () => {
      const nextReducer = require("./reducer").default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

export default configureStore;
