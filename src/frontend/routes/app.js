import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from '../pages/landing'
import Home from '../pages/home'
import Header from '../components/general/header'
import '../assets/styles/app.scss'
const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/home' component={Home} />
    </Switch>
  </BrowserRouter>
)

export default App
