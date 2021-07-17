import React, { useState } from 'react'
import logo from '../../assets/images/logo-s.jpg'
import { Link } from 'react-router-dom'
import menuIcon from '../../assets/icons/menu.svg'
import './styles/header.scss'
import { useHistory } from 'react-router'
import { logOutUser } from '../../actions'
import { connect } from 'react-redux'
function header ({ user, logOutUser }) {
  const [display, setDisplay] = useState(false)
  const handleOnClick = () => {
    setDisplay(!display)
    logOutUser(history)
  }
  const history = useHistory()
  return (
    <header className='lheader'>
      <Link to={user ? '/home' : '/'}>
        <img src={logo} alt='logo' className='lheader-logo' />
      </Link>
      <img src={menuIcon} className='lheader-menu' alt='menu icon' onClick={() => setDisplay(!display)} />
      <div className='lheader-links' style={{ left: display ? '0%' : '100%' }}>
        <Link to={user ? '/cuenta' : '/'} onClick={() => setDisplay(!display)}>{user ? 'Cuenta' : 'Acerca de'}</Link>
        <Link to='/pagos' onClick={() => setDisplay(!display)}>Pagos</Link>
        <Link to={user ? '/referidos' : '/'} onClick={() => setDisplay(!display)}>{user ? 'Referidos' : 'Ayuda'}</Link>
        <Link to='/politicas' onClick={() => setDisplay(!display)}>Políticas</Link>
        <span />
        <Link to={user ? '/home' : '/login'} className='lheader-links__button' onClick={() => setDisplay(!display)}>{user ? 'Home' : 'Iniciar Sesión'}</Link>
        <Link to={user ? '/login' : '/registro'} className='lheader-links__button' onClick={handleOnClick}>{user ? 'Cerrar Sesión' : 'Registrarme'}</Link>
      </div>
    </header>
  )
}
const mapStateToProps = state => {
  return {
    user: state.user
  }
}
const mapDispachToProps = {
  logOutUser
}
export default connect(mapStateToProps, mapDispachToProps)(header)
