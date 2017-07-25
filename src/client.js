// Dependencies
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import createHistory from 'history/createBrowserHistory'
import {ConnectedRouter} from 'react-router-redux'
import { ServerStateProvider } from 'react-router-server'

import {basename} from 'config'
import configureStore from 'store/configure'
import reducer from 'store/reducer'
import injectTapEventPlugin from 'react-tap-event-plugin';
// Components
import App from 'components/App'

injectTapEventPlugin();

//const history = createHistory()

const serverState = window.__SERVER_STATE__
const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState, history)

const renderApp = () => (
  <ServerStateProvider state={serverState}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
    </Provider>
  </ServerStateProvider>
)

const root = document.getElementById('app')
render(renderApp(), root)

if (module.hot) {
  module.hot.accept('components/App', () => {
    require('components/App')
    render(renderApp(), root)
  })
}
