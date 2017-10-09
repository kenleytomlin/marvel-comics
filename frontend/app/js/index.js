import React from 'react'
import { hydrate, render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app';

const rootEl = document.getElementById('root')

hydrate(<AppContainer><App /></AppContainer>, rootEl)

if(module.hot) {
  module.hot.accept('./app',() => {
    const NextApp = require('./app').default

    render(<AppContainer><NextApp /></AppContainer>,rootEl)
  })
}

