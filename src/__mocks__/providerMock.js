import React from 'react'
import { createStore } from 'redux'
import { Router, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'

import reducer from '../frontend/reducers'

const InitalState = {
  user: null,
  message: { message: '' },
  videos: {
    OmarSosa: [],
    NormaQuintero: [],
    IsmaelOrtega: [],
    JairPowell: [],
    OmarSosaFx: [],
    CoraliaPinzon: [],
    RuthYessenia: []
  }
}
const store = createStore(reducer, InitalState)
const history = createBrowserHistory()

const ProviderMock = props => (
  <Provider store={store}>
    <BrowserRouter>
      <Router history={history}>{props.children}</Router>
    </BrowserRouter>
  </Provider>
)

export default ProviderMock
