// https://github.com/diegohaz/arc/wiki/Example-app
import 'react-hot-loader/patch'
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { basename } from 'config'
import configureStore from 'store/configure'
import api from 'services/api'
import App from 'components/App'

const store = configureStore({
    playlist: [
      {
        id: 'QAOMIH7cgh0',
        owner: 'Groot',
        title: 'Mr blue sty song'
      }, {
        id: 'leC5WE7P2To',
        owner: 'The father',
        title: 'cat steven Father and son'
      }
    ],
    currentVideo: [],
    played: []
  }, { api: api.create() })

const renderApp = () => (
  <Provider store={store}>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </Provider>
)

const root = document.getElementById('app')
render(renderApp(), root)

if (module.hot) {
  module.hot.accept('components/App', () => {
    require('components/App')
    render(renderApp(), root)
  })
}
