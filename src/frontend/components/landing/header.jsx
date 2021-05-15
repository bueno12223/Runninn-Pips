import React from 'react'
import logo from '../../assets/images/logo.jpeg'
import './styles/header.scss'
function header () {
  return (
    <header className='lheader'>
      <img src={logo} alt='logo' className='lheader-logo' />
      <div className='lheader-links'>
        <a href='#'>Acerca de</a>
        <a href='#'>Precios</a>
        <a href='#'>Testimonios</a>
        <a href='#'>Ayuda</a>
      </div>
    </header>
  )
}

export default header
