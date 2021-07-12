import React from 'react'
import { Link } from 'react-router-dom'
import './styles/footer.scss'
function footer () {
  return (
    <footer className='lfooter'>
      <p>Siguenos en nustras redes sociales</p>
      <p>Acerca de nosotros</p>
      <Link to='/politicas'>Sobre nosotros</Link>
      <Link to='/politicas'>Políticas de Privacidad</Link>
      <Link to='/politicas'>Derechos de Propiedad Intelectual</Link>
      <Link to='/politicas'>Derechos de autor</Link>
      <Link to='/politicas'>Licencia</Link>
      <Link to='/politicas'>Terminos de uso</Link>
      <Link to='/politicas'>Legal</Link>
    </footer>
  )
}

export default footer
