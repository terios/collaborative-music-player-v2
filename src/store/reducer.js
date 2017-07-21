import camelCase from 'lodash/camelCase'
import { combineReducers } from 'redux'

import {
  routerReducer,
} from 'react-router-redux'

const req = require.context('.', true, /\.\/.+\/reducer\.js$/)

const reducers = {router: routerReducer}

req.keys().forEach((key) => {
  const storeName = camelCase(key.replace(/\.\/(.+)\/.+$/, '$1'))
  reducers[storeName] = req(key).default
})

export default combineReducers(reducers)
