import React from 'react'
import { Provider } from 'react-redux'
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import {
  AppRegistry
} from 'react-native'

import reducer from './src/reducers'
import AppContainer from './src/containers/AppContainer'

const configureStore = (initialState) => {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      logger
    )
  )
  return createStore(reducer, initialState, enhancer)
}

const store = configureStore({})

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

AppRegistry.registerComponent('Peckish', () => App)
