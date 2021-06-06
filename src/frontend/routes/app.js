import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from '../pages/landing'
import Home from '../pages/home'
<<<<<<< HEAD
import Login from '../pages/login'
import registro from '../pages/registro'
import Reproductor from '../pages/reproductor'
import Layout from '../components/general/layout'
import '../assets/styles/app.scss'
const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/home/:id' render={(props) => <Reproductor {...props} />} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/registro' component={registro} />

      </Switch>
    </Layout>
=======
import Header from '../components/general/header'
import '../assets/styles/app.scss'
const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/home' component={Home} />
    </Switch>
>>>>>>> ea0a54b5b6ebb5990601a5360fbaaa0306d2af36
  </BrowserRouter>
)

export default App
