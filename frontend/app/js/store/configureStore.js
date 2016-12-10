import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'

export default function configureStore(initialState,history = null) {
  const sagaMiddleware = createSagaMiddleware()
  const middleware = [ sagaMiddleware, routerMiddleware(history) ]

  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware),typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f)
  )

  return { ...store, runSaga: sagaMiddleware.run }
}
