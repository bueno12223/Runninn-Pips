import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from '../pages/landing'
import '../assets/styles/app.scss'
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Landing} />
    </Switch>
  </BrowserRouter>
)

export default App
