import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Landing from '../pages/landing'
import Home from '../pages/home'
import Login from '../pages/login'
import Registro from '../pages/registro'
import Reproductor from '../pages/reproductor'
import Pagos from '../pages/pagos'
import Teacher from '../pages/teacher'
import Cuenta from '../pages/cuenta'
import Policy from '../pages/policy'
import Layout from '../components/global/layout'
import Referidos from '../pages/referidos'
import Transacciones from '../pages/transacciones'
import NotFound from '../pages/404'
import '../assets/styles/app.scss'
const App = () => {
  const isLogged = !!(useSelector(state => state.user))
  const isActive = !!(useSelector(state => state.videos))
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/registro' component={Registro} />
          <Route exact path='/referidos' component={isLogged ? Referidos : Login} />
          <Route exact path='/home' component={isLogged && isActive ? Home : Pagos} />
          <Route exact path='/:teacher/:id' render={(props) => isLogged && isActive ? <Reproductor {...props} /> : <Login />} />
          <Route exact path='/educador/:teacher' component={(props) => isLogged && isActive ? <Teacher {...props} /> : <Login />} />
          <Route exact path='/pagos' component={() => <Pagos />} />
          <Route exact path='/cuenta' component={isLogged ? Cuenta : Login} />
          <Route exact path='/politicas' component={Policy} />
          <Route exact path='/transacciones' component={Transacciones} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
