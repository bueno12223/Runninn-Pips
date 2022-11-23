import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
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
import Recuperar from '../pages/recuperar'
import preguntas from '../pages/preguntas'
import Transacciones from '../pages/transacciones'
import NotFound from '../pages/404'
import '../assets/styles/app.scss'
const App = () => {
  const isLogged = !!(useSelector(state => state.user))
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/registro' component={Registro} />
          <Route exact path='/referidos' component={isLogged ? Referidos : Login} />
          <Route exact path='/home' component={isLogged ? Home : <Redirect to='/login' />} />
          <Route exact path='/:teacher/:id' render={(props) => isLogged ? <Reproductor {...props} /> : <Redirect to='/login' />} />
          <Route exact path='/home/educador/:teacher' component={(props) => isLogged ? <Teacher {...props} /> : <Redirect to='/login' />} />
          <Route exact path='/pagos' component={() => <Pagos />} />
          <Route exact path='/cuenta' component={isLogged ? Cuenta : Login} />
          <Route exact path='/politicas' component={Policy} />
          <Route exact path='/transacciones' component={Transacciones} />
          <Route exact path='/preguntas' component={preguntas} />
          <Route exact path='/recuperar' render={(props) => <Recuperar {...props} />} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
