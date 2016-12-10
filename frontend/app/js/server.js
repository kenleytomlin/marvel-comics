import 'babel-polyfill'
import http from 'http'
import Express from 'express'
import React from 'react'
import ReactDom, { renderToString } from 'react-dom/server'
import { match, RouterContext, createMemoryHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import getRoutes from './routes'
import httpProxy from 'http-proxy'
import { ReduxAsyncConnect, loadOnServer } from 'redux-connect'

const app = new Express()
const server = new http.Server(app)

const handleRender = (req,res,next) => {
  const memoryHistory = createMemoryHistory(req.originalUrl)
  const store = configureStore({},history)
  const history = syncHistoryWithStore(memoryHistory,store)
  const { getState, dispatch } = store
  const routes = getRoutes()

  match({ history, routes }, (err,redirectLocation, renderProps) => {
    if(err) {
      console.log(err)
    }
    if(renderProps) {
      loadOnServer({ ...renderProps, store }).then(() => {
        const html = renderToString(<Provider store={store} key='provider'><ReduxAsyncConnect {...renderProps }/></Provider>)
        const state = store.getState()

        res.status(200).send(`
          <!doctype html>
          <html >
            <head>
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.en,Intl.~locale.ko,Intl.~locale.ja,Intl.~locale.zh"></script>
            </head>
            <body>
              <script>
                window.__INITIAL_STATE__ = ${JSON.stringify(state)}
              </script>
              <div id="root">${html}</div>
              <script src="public/js/vendor.js" ></script>
              <script src="public/js/app.js" async></script>
            </body>
          </html>`)
      }).catch((err) => { console.log(err); res.send(500) })
    }
  })
}

app.use(/\/$/,handleRender)

if(process.env.NODE_ENV === 'development') {
  const webpack = require('webpack')
  const webpackConfig = require('./webpack.config.js')
  const compiler = webpack(webpackConfig)
  app.use(require('webpack-dev-middleware')(compiler,{ hot: true, publicPath: webpackConfig.output.publicPath }))
  app.use(require('webpack-hot-middleware')(compiler))

  const proxy = httpProxy.createProxyServer({
    target: `http://${process.env.API_HOST}:${process.env.API_PORT}/v1/`
  }).on('error',(err,req,res) => {
    console.log(error)
  })

  app.use('/v1/',(req,res) => {
    proxy.web(req,res)
  })
}

server.listen(3000,(err) => {
  if(err) {
    console.log(err)
  } else {
    console.log('---\n=> %s is running, talking to api %s on %s.','Front end', process.env.API_HOST, process.env.API_PORT)
  }
})
