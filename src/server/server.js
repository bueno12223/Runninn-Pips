/* eslint-disable global-require */
import express from 'express'
import dotenv from 'dotenv'
// eslint-disable-next-line import/no-extraneous-dependencies
import webpack from 'webpack'
import React from 'react'
import { renderToString } from 'react-dom/server'
import helmet from 'helmet'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { renderRoutes } from 'react-router-config'
import { StaticRouter } from 'react-router-dom'
import reducer from '../frontend/reducers/index'
import serverRoutes from '../frontend/routes/serverRoutes'
import getManifest from './getManifest'
import studentRoutes from './routes/student'
import cookieParser from 'cookie-parser'
import axios from 'axios'

dotenv.config()
const { ENV, PORT } = process.env
const app = express()
app.use(express.json())
app.use(cookieParser())

if (ENV === 'development') {
  console.log('Development config')
  const webpackConfig = require('../../webpack.config')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const compiler = webpack(webpackConfig)
  const { publicPath } = webpackConfig.output
  const serverConfig = { serverSideRender: true, publicPath }

  app.use(webpackDevMiddleware(compiler, serverConfig))
  app.use(webpackHotMiddleware(compiler))
} else {
  app.use((req, res, next) => {
    if (!req.hashManifest) req.hashManifest = getManifest()
    next()
  })
  // eslint-disable-next-line node/no-path-concat
  app.use(express.static(`${__dirname}/public`))
  app.use(helmet())
}

const setResponse = (html, preloadedState, manifest) => {
  const mainStyles = manifest ? manifest['vendors.css'] : 'assets/app.css'
  const mainBuild = manifest ? manifest['main.js'] : 'assets/app.js'
  const vendorBuild = manifest ? manifest['vendors.js'] : 'assets/vendor.js'
  return (`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="Content-Security-Policy" content="default-src *;img-src * 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' *;style-src  'self' 'unsafe-inline' *">
      <title>Runnig pips</title>
      <link rel="stylesheet" href='${mainStyles}' type="text/css">
    </head>
    <body>
      <div id="app">${html}</div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script src='${mainBuild}' type="text/javascript"></script>
      <script src="${vendorBuild}" type="text/javascript"></script>
    </body>
  </html>
  `)
}

const renderApp = async (req, res) => {
  let InitalState = {
    userID: '',
    error: '',
    videos: []
  }
  let isLogged = false
  const cookieValues = Object.values(req.cookies)
  try {
    if (cookieValues[0]) {
      const result = await axios({
        method: 'POST',
        url: `${process.env.API_URL}/student`,
        data: { id: cookieValues[0] },
        // eslint-disable-next-line quote-props
        headers: { 'Cookie': `connect.sid=${cookieValues[1]}` },
        withCredentials: true
      })
      const videos = await axios({
        method: 'GET',
        url: `${process.env.API_URL}/video`,
        // eslint-disable-next-line quote-props
        headers: { 'Cookie': `connect.sid=${cookieValues[1]}` },
        withCredentials: true
      })
      InitalState = { ...result.data.data, videos: videos.data.message, error: [] }
      isLogged = true
    }
  } catch (error) {
    console.log(error)
  }
  const store = createStore(reducer, InitalState)
  const preloadedState = store.getState()
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(serverRoutes(isLogged))}
      </StaticRouter>
    </Provider>
  )

  res.send(setResponse(html, preloadedState, req.hashManifest))
}
app.set('x-powered-by', false)
studentRoutes(app)
app.get('*', renderApp)

app.listen(PORT, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`Server running on port ${PORT}`)
  }
})
