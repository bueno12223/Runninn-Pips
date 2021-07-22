import React from 'react'
import { Link } from 'react-router-dom'
import './styles/footer.scss'
function footer () {
  return (
    <footer className='lfooter'>
      <p className='text lfooter-text'>Somos una empresa de educación en estrategias de inversión para los mercados financiero</p>
      <p className=' lfooter-text text'>© 2021 Running Trader, todos los derechos reservados</p>
      <p className='text lfooter-text'>AL navegar en esta página estas de acuerdo con nuestros términos y condiciones.</p>
      <Link to='/politicas'>Sobre nosotros</Link>
      <Link to='/politicas#privacidad'>Políticas de Privacidad</Link>
      <Link to='/politicas#intelectual'>Derechos de Propiedad Intelectual</Link>
      <Link to='/politicas#derechos'>Derechos de autor</Link>
      <Link to='/politicas#terminos'>Terminos de uso</Link>
      <Link to='/politicas#legal'>Legal</Link>
      <div className='lfooter-thanks'>
        <p className='text'>Iconos diseñados e ilustraciones diseñados por</p>
        <br />
        <a href='https://storyset.com/people'>Storyset</a>
        <a href='https://storyset.com/data'>Data illustrations by Storyset</a>
        <a href='https://www.freepik.com' title='Freepik'>Freepik</a>
        <a href='https://www.flaticon.es/' title='Flaticon'>flaticon</a>
        <p className='text'>Foto default de Burak Kebapci en Pexels</p>
      </div>
    </footer>
  )
}

export default footer
