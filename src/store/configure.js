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

const configureStore = (initialState, history) => {
  //const sagaMiddleware = createSagaMiddleware()

  // Build the middleware for intercepting and dispatching navigation actions
  const historyMiddleware = routerMiddleware(history)

  const enhancers = [
        applyMiddleware(
          //...middlewares,
          historyMiddleware
          //sagaMiddleware
        ),
    devtools(),
  ]

  const store = createStore(reducer, initialState, compose(...enhancers))
  //let sagaTask = sagaMiddleware.run(sagas, services)

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer').default
      store.replaceReducer(nextReducer)
    })
    /*module.hot.accept('./sagas', () => {
      const nextSagas = require('./sagas').default
      sagaTask.cancel()
      sagaTask.done.then(() => {
        sagaTask = sagaMiddleware.run(nextSagas, services)
      })
    })*/
  }

  return store
}

export default configureStore;
