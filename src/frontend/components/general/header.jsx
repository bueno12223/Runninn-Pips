import React, { useState } from 'react'
import logo from '../../assets/images/logo-s.jpg'
import { Link } from 'react-router-dom'
import menuIcon from '../../assets/icons/menu.svg'
import './styles/header.scss'
function header () {
  const [display, setDisplay] = useState(false)
  return (
    <header className='lheader'>
      <Link to='/'>
        <img src={logo} alt='logo' className='lheader-logo' />
      </Link>
      <img src={menuIcon} className='lheader-menu' alt='menu icon' onClick={() => setDisplay(!display)} />
      <div className='lheader-links' style={{ left: display ? '0%' : '100%' }}>
        <Link to='/' onClick={() => setDisplay(!display)}>Acerca de</Link>
        <Link to='/' onClick={() => setDisplay(!display)}>Precios</Link>
        <Link to='/' onClick={() => setDisplay(!display)}>Testimonios</Link>
        <Link to='/' onClick={() => setDisplay(!display)}>Ayuda</Link>
        <span />
        <Link to='/login' className='lheader-links__button' onClick={() => setDisplay(!display)}>Iniciar Sesión</Link>
        <Link to='/registro' className='lheader-links__button' onClick={() => setDisplay(!display)}>Registrate</Link>
      </div>
    </header>
  )
}

export default header
