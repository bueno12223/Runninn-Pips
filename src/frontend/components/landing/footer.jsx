import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import './styles/footer.scss'
function footer () {
  return (
    <footer className='lfooter'>
      <p>Siguenos en nustras redes sociales</p>
      <FaFacebookF />
      <FaInstagram />
      <FaTwitter />
      <p>Acerca de nosotros</p>
      <a href='/'>Sobre nosotros</a>
      <a href='/'>Terminos de uso</a>
      <a href='/'>Privacidad</a>
    </footer>
  )
}

export default footer
