import Landing from '../pages/landing'
import Home from '../pages/home'
import Login from '../pages/login'
import registro from '../pages/registro'
import Reproductor from '../pages/reproductor'
const serverRoutes = (isLogged) => {
  return [
    {
      exact: true,
      path: '/',
      component: Landing
    },
    {
      exact: true,
      path: '/home',
      component: Home
    },
    {
      exact: true,
      path: '/home/:id',
      component: Reproductor
    },
    {
      exact: true,
      path: '/login',
      component: Login
    },
    {
      exact: true,
      path: '/registro',
      component: registro
    }
  ]
}

export default serverRoutes
