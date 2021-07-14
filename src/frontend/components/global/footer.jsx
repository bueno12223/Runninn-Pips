import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo-s.jpg'
import './styles/footer.scss'
function footer () {
  return (
    <footer className='lfooter'>
      <img className='lheader-logo' src={logo} alt='logo de la empresa' />
      <p className='text'>Somos una empresa de educación en estrategias de inversión para los mercados financiero</p>
      <p className='text'>© 2021 Running Trader</p>
      <Link to='/politicas'>Sobre nosotros</Link>
      <Link to='/politicas#privacidad'>Políticas de Privacidad</Link>
      <Link to='/politicas#intelectual'>Derechos de Propiedad Intelectual</Link>
      <Link to='/politicas#derechos'>Derechos de autor</Link>
      <Link to='/politicas#terminos'>Terminos de uso</Link>
      <Link to='/politicas#legal'>Legal</Link>
    </footer>
  )
}

export default footer
