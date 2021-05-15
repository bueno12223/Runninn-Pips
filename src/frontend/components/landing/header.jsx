import React, { useState } from 'react'
import logo from '../../assets/images/logo-s.jpg'
import { HiMenu } from 'react-icons/hi'
import './styles/header.scss'
function header () {
  const [display, setDisplay] = useState(false)
  console.log(display ? '0%' : '100%')
  return (
    <header className='lheader'>
      <img src={logo} alt='logo' className='lheader-logo' />
      <HiMenu onClick={() => setDisplay(!display)} />
      <div className='lheader-links' style={{ left: display ? '0%' : '100%' }}>
        <a href='#'>Acerca de</a>
        <a href='#'>Precios</a>
        <a href='#'>Testimonios</a>
        <a href='#'>Ayuda</a>
        <span />
        <a href='#'>Iniciar Sesión</a>
        <a href='#'>Registrate</a>
      </div>
    </header>
  )
}

export default header
