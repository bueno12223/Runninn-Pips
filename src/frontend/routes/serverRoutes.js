import Landing from '../pages/landing'

const serverRoutes = (isLogged) => {
  return [
    {
      exact: true,
      path: '/',
      component: Landing
    }
  ]
}

export default serverRoutes
