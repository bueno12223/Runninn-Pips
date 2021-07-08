import React, { useState } from 'react'
import logo from '../../assets/images/logo-s.jpg'
import { Link } from 'react-router-dom'
import menuIcon from '../../assets/icons/menu.svg'
import './styles/header.scss'
import { logOutUser } from '../../actions'
import { connect } from 'react-redux'
function header ({ userID, logOutUser }) {
  const [display, setDisplay] = useState(false)
  const handleOnClick = () => {
    setDisplay(!display)
    logOutUser()
  }
  return (
    <header className='lheader'>
      <Link to={userID ? '/home' : '/'}>
        <img src={logo} alt='logo' className='lheader-logo' />
      </Link>
      <img src={menuIcon} className='lheader-menu' alt='menu icon' onClick={() => setDisplay(!display)} />
      <div className='lheader-links' style={{ left: display ? '0%' : '100%' }}>
        <Link to={userID ? '/cuenta' : '/'} onClick={() => setDisplay(!display)}>{userID ? 'Cuenta' : 'Acerca de'}</Link>
        <Link to='/pagos' onClick={() => setDisplay(!display)}>Pagos</Link>
        <Link to='/' onClick={() => setDisplay(!display)}>Testimonios</Link>
        <Link to='/' onClick={() => setDisplay(!display)}>Ayuda</Link>
        <span />
        <Link to={userID ? '/home' : '/login'} className='lheader-links__button' onClick={() => setDisplay(!display)}>{userID ? 'Home' : 'Iniciar Sesión'}</Link>
        <Link to={userID ? '/login' : '/registro'} className='lheader-links__button' onClick={() => handleOnClick()}>{userID ? 'Cerrar Sesión' : 'Registrarme'}</Link>
      </div>
    </header>
  )
}
const mapStateToProps = state => {
  return {
    userID: state.userID
  }
}
const mapDispachToProps = {
  logOutUser
}
export default connect(mapStateToProps, mapDispachToProps)(header)
