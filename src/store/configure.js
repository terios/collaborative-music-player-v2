import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'

import {
  routerMiddleware
} from 'react-router-redux'

//import createSagaMiddleware from 'redux-saga'
import {
  isDev,
  isBrowser
} from 'config'
//import middlewares from './middlewares'
import reducer from './reducer'
//import sagas from './sagas'

const devtools = isDev && isBrowser && window.devToolsExtension ?
  window.devToolsExtension :
  () => fn => fn

const configureStore = (initialState) => {
  //const sagaMiddleware = createSagaMiddleware()

  const enhancers = [
        applyMiddleware(
          //...middlewares,
          //sagaMiddleware
        ),
    devtools(),
  ]

  const store = createStore(reducer, initialState, compose(...enhancers))
  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

export default configureStore;
