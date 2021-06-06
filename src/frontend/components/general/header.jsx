<<<<<<< HEAD
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
=======
import React from 'react'
import logo from '../../assets/images/logo-s.jpg'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
function header () {
  return (
    <Navbar className='bg-light justify-content-between'>
      <Navbar.Brand>
        <img
          width={133}
          height={80}
          className='mr-3'
          src={logo}
          alt='Generic placeholder'
        />
      </Navbar.Brand>
      <Nav className='mr-2'>
        <Nav.Link href='#home'>Iniciar Sesión</Nav.Link>
        <Nav.Link href='#home'>Registrarme</Nav.Link>
      </Nav>
    </Navbar>
>>>>>>> ea0a54b5b6ebb5990601a5360fbaaa0306d2af36
  )
}

export default header
