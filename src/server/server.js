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
import videos from './routes/videos'
import getManifest from './getManifest'
import studentRoutes from './routes/student'
import transacctions from './routes/transacctions'
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
      <script src="https://www.paypal.com/sdk/js?client-id=AWpd67_eTpd4yX6q6pTkF8kgtHH9TsPcT5V-WQluelA5zB0vePMJ5zfLKxezItLBrQXpdO37i3Fa9S8P&currency=USD"></script>
    </body>
  </html>
  `)
}

const renderApp = async (req, res) => {
  let InitalState = {
    user: null,
    message: { message: '' },
    videos: {
      OmarSosa: [],
      NormaQuintero: [],
      IsmaelOrtega: [],
      JulioOrtiz: [],
      JairPowell: [],
      OmarSosaFx: [],
      CoraliaPinzon: []
    }

  }
  let isLogged = false
  let isActive = false
  const ranked = []
  const { 'connect.sid': sesionID = undefined, id = undefined } = req.cookies
  if (sesionID != undefined && id != '') {
    try {
      const { data: { user, videos: preVideos } } = await axios({
        method: 'POST',
        url: `${process.env.API_URL}/student`,
        data: { id },
        // eslint-disable-next-line quote-props
        headers: { 'Cookie': `connect.sid=${sesionID}` },
        withCredentials: true
      })
      isLogged = true
      if (preVideos) {
        isActive = true
        // eslint-disable-next-line prefer-const
        const profesorNames = ['OmarSosa', 'NormaQuintero', 'IsmaelOrtega', 'JulioOrtiz', 'JairPowell', 'OmarSosaFx', 'CoraliaPinzon']
        profesorNames.forEach((name) => {
          // eslint-disable-next-line camelcase
          const result = preVideos.filter(({ profesor_id }) => profesor_id === name)
          ranked.push(result[0])
          InitalState.videos[name] = result.sort((a, b) => {
            return a.order - b.order
          })
        })
      }
      InitalState = { ranked, user, videos: preVideos ? InitalState.videos : preVideos, message: { message: '' } }
    } catch (e) {
      console.log(e)
    }
  }
  const store = createStore(reducer, InitalState)
  const preloadedState = store.getState()
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(serverRoutes(isLogged, isActive))}
      </StaticRouter>
    </Provider>
  )

  res.send(setResponse(html, preloadedState, req.hashManifest))
}
app.set('x-powered-by', false)
studentRoutes(app)
transacctions(app)
videos(app)
app.get('*', renderApp)

app.listen(PORT, (err) => {
  if (err) {
    console.log(err)
  }
})
