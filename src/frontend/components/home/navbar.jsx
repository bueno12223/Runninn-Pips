import React from 'react'
import Runningtrade from '../../assets/icons/runningtrade'
import { Link } from 'react-router-dom'
function navbar () {
  return (
    <navbar>
      <Runningtrade />
      <Link to='/home'>Home</Link>
      <Link to='/favorites'>Favoritos</Link>
      <Link to='/vistos'>Vistos</Link>
      <Link to='/configuracion'>Configuración</Link>
    </navbar>
  )
}

export default navbar
