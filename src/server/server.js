/* eslint-disable eqeqeq */
/* eslint-disable global-require */
import express from 'express'
import dotenv from 'dotenv'
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { renderRoutes } from 'react-router-config'
import { StaticRouter } from 'react-router-dom'
import reducer from '../frontend/reducers/index'
import serverRoutes from '../frontend/routes/serverRoutes'

import cors from 'cors'
import getManifest from './getManifest'
import resetPassword from './routes/resetPassword'
import studentRoutes from './routes/student'
import paymemts from './routes/payments'
import utils from './routes/utils'
import yappyRoutes from "./routes/yappy"
import cookieParser from 'cookie-parser'
import axios from 'axios'

dotenv.config()
const { ENV, PORT } = process.env
const app = express()
app.use(express.json())
app.use(cookieParser())

if (ENV === 'development') {
  console.log('Development config')
  const webpack = require('webpack')
  const webpackConfig = require('../../webpack.config')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const figlet = require('figlet')
  const compiler = webpack(webpackConfig)
  const { publicPath } = webpackConfig.output
  const serverConfig = { serverSideRender: true, publicPath }

  app.use(webpackDevMiddleware(compiler, serverConfig))
  app.use(webpackHotMiddleware(compiler))
  figlet(`Server on port ${PORT}`, {
    font: 'Poison',
    horizontalLayout: 'full',
    verticalLayout: 'full',
    width: 100,
    whitespaceBreak: true
  }, function (err, data) {
    if (err) {
      console.log('Something went wrong...')
      console.dir(err)
      return
    }
    console.log(data)
  })
} else {
  app.use(cors({
    origin: 'http://localhost:8000'
  }))
  app.use((req, res, next) => {
    if (!req.hashManifest) req.hashManifest = getManifest()
    next()
  })
  // eslint-disable-next-line node/no-path-concat
  app.use(express.static(`${__dirname}/public`))
}

const setResponse = (html, preloadedState, manifest) => {
  const mainStyles = manifest ? manifest['vendors.css'] : 'assets/app.css'
  const mainBuild = manifest ? manifest['main.js'] : 'assets/app.js'
  const vendorBuild = manifest ? manifest['vendors.js'] : 'assets/vendor.js'
  const logo = manifest ? manifest['runningtrade.svg'] : 'assets/runningtrade.svg'
  return (`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Running trader</title>
      <link rel="stylesheet" href='${mainStyles}' type="text/css">
      <link rel="icon" href="${logo}">
    </head>
    <body>
      <div id="app">${html}</div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script src='${mainBuild}' type="text/javascript"></script>
      <script src="${vendorBuild}" type="text/javascript"></script>
      <script src="//code.jivosite.com/widget/xQW3PTMGmK" async></script>
    </body>
  </html>
  `)
}

const renderApp = async (req, res) => {
  let InitalState = {
    user: null,
    message: { message: '' },
    videos: {}
  }
  let isLogged = false
  const { 'connect.sid': sesionID = null } = req.cookies
  if (sesionID != null) {
    try {
      const { data: { user, videos, isActive, planPrices } } = await axios({
        method: 'POST',
        url: `${process.env.API_URL}/student`,
        // eslint-disable-next-line quote-props
        headers: { 'Cookie': `connect.sid=${sesionID}` },
        withCredentials: true
      })
      isLogged = true
      InitalState = { user, videos, message: { message: '' }, isActive, planPrices }
    } catch (e) {
      console.log(e)
      const { data } = await axios({
        method: 'GET',
        url: `${process.env.API_URL}/student/settings`
      })
      InitalState = { ...InitalState, ...data }
    }
  }
  if (!InitalState.planPrices) {
    const { data } = await axios({
      method: 'GET',
      url: `${process.env.API_URL}/student/settings`
    })
    InitalState = { ...InitalState, ...data }
  }
  const store = createStore(reducer, InitalState)
  const preloadedState = store.getState()
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(serverRoutes(isLogged, InitalState.isActive))}
      </StaticRouter>
    </Provider>
  )

  res.send(setResponse(html, preloadedState, req.hashManifest))
}
app.set('x-powered-by', false)
utils(app)
studentRoutes(app)
resetPassword(app)
paymemts(app)
yappyRoutes(app)
app.get('*', renderApp)

app.listen(PORT, (err) => {
  if (err) {
    console.log(err)
  }
})
