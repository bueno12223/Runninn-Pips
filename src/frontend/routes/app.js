import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from '../pages/landing'
import Home from '../pages/home'
import Login from '../pages/login'
import registro from '../pages/registro'
import Reproductor from '../pages/reproductor'
import Layout from '../components/general/layout'
import notFound from '../pages/404'
import '../assets/styles/app.scss'
const App = ({ isLogged }) => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={isLogged ? Home : Login} />
        <Route
          exact path='/home/:id' render={(props) => {
            if (isLogged) {
              return (<Reproductor {...props} />)
            }
            return (<Login />)
          }}
        />
        <Route exact path='/login' component={Login} />
        <Route exact path='/registro' component={registro} />
        <Route component={notFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App
