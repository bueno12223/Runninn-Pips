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
  )
}

export default header
