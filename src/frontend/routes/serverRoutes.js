import Landing from '../pages/landing'
import Home from '../pages/home'
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
    }
  ]
}

export default serverRoutes
