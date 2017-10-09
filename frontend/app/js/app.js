import React from 'react'
import { Provider } from 'react-redux'
import {
  browserHistory,
  Router
} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { isEmpty } from 'lodash'
import configureStore from './store/configureStore'
import getRoutes from './routes'
import rootSagas from './sagas'
import { ReduxAsyncConnect } from 'redux-connect'

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState,browserHistory)
const history = syncHistoryWithStore(browserHistory,store)

store.runSaga(rootSagas)

const routes = getRoutes()
if(!isEmpty(window.__INITIAL_STATE__))
  delete window.__INITIAL_STATE__

const App = () => (
  <Provider store={store}>
    <Router render={(props) => <ReduxAsyncConnect {...props } /> } routes={routes} history={history} />
  </Provider>
)

export default App

