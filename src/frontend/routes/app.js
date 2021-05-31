import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from '../pages/landing'
import Home from '../pages/home'
import Layout from '../components/general/layout'
import '../assets/styles/app.scss'
const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={Home} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App
