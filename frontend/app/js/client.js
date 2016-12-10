import '../styles/main.scss'
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory, match, Router } from 'react-router'
import { syncHistoryWithStore, push } from 'react-router-redux'
import { isEmpty } from 'lodash'
import configureStore from './store/configureStore'
import getRoutes from './routes'
import rootSagas from './sagas'
import { ReduxAsyncConnect } from 'redux-connect'
import { AppContainer } from 'react-hot-loader'

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState,browserHistory)
const history = syncHistoryWithStore(browserHistory,store)

store.runSaga(rootSagas)

const renderApp = () => {
  const routes = getRoutes()
  if(!isEmpty(window.__INITIAL_STATE__))
    delete window.__INITIAL_STATE__

  return render((
    <Provider store={store}>
      <Router render={(props) => <ReduxAsyncConnect {...props } /> } routes={routes} history={history} />
    </Provider>
  ),document.getElementById('root'))
}

if(module.hot) {
  module.hot.accept('./reducers/index',() => {
    store.replaceReducer(require('./reducers/index').default)
    renderApp()
  })

  module.hot.accept('./routes',() => {
    setImmediate(() => {
      unmountComponentAtNode(document.getElementById('root'))
      renderApp()
    })
  })
}

window.onload = renderApp()
