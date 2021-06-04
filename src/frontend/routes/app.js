import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from '../pages/landing'
import Home from '../pages/home'
import Login from '../pages/login'
import Footer from '../components/general/footer'
import '../assets/styles/app.scss'
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/home' component={Login} />
    </Switch>
    <Footer />
  </BrowserRouter>
)

export default App
