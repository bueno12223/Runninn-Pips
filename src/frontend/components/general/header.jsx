import React, { useState } from 'react'
import logo from '../../assets/images/logo-s.jpg'
import { Link } from 'react-router-dom'
import menuIcon from '../../assets/icons/menu.svg'
import './styles/header.scss'
function header () {
  const [display, setDisplay] = useState(false)
  return (
    <header className='lheader'>
      <img src={logo} alt='logo' className='lheader-logo' />
      <img src={menuIcon} className='lheader-menu' alt='menu icon' onClick={() => setDisplay(!display)} />
      <div className='lheader-links' style={{ left: display ? '0%' : '100%' }}>
        <Link to='/'>Acerca de</Link>
        <Link to='/'>Precios</Link>
        <Link to='/'>Testimonios</Link>
        <Link to='/'>Ayuda</Link>
        <span />
        <Link to='/login' className='lheader-links__button'>Iniciar Sesión</Link>
        <Link to='/registro' className='lheader-links__button'>Registrate</Link>
      </div>
    </header>
  )
}

export default header
