import Landing from '../pages/landing'
import Home from '../pages/home'
import Login from '../pages/login'
import Registro from '../pages/registro'
import Reproductor from '../pages/reproductor'
import Pagos from '../pages/pagos'
import Teacher from '../pages/teacher'
import Cuenta from '../pages/cuenta'
import Policy from '../pages/policy'
import Referidos from '../pages/referidos'
import Transacciones from '../pages/transacciones'
const serverRoutes = (isLogged, isActive) => {
  return [
    {
      exact: true,
      path: '/',
      component: Landing
    },
    {
      exact: true,
      path: '/home',
      component: isLogged && isActive ? Home : Login
    },
    {
      exact: true,
      path: '/login',
      component: Login
    },
    {
      exact: true,
      path: '/registro',
      component: Registro
    },
    {
      exact: true,
      path: '/referidos',
      component: isLogged ? Referidos : Login
    },
    {
      exact: true,
      path: '/:teacher/:id',
      component: isLogged && isActive ? Reproductor : Pagos
    },
    {
      exact: true,
      path: '/home/educador/:teacher',
      component: isLogged && isActive ? Teacher : Pagos
    },
    {
      exact: true,
      path: '/pagos',
      component: Pagos
    },
    {
      exact: true,
      path: '/cuenta',
      component: isLogged ? Cuenta : Login
    },
    {
      exact: true,
      path: '/politicas',
      component: Policy
    },
    {
      exact: true,
      path: '/transacciones',
      component: isLogged ? Transacciones : Login
    }
  ]
}

export default serverRoutes
