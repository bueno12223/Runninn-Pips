import React, { useState } from 'react'
import logo from '../../assets/images/runningtrade.svg'
import { Link } from 'react-router-dom'
import menuIcon from '../../assets/icons/menu.svg'
import './styles/header.scss'
import { useHistory } from 'react-router'
import { logOutUser } from '../../actions'
import { connect } from 'react-redux'
function header ({ user, logOutUser }) {
  const [display, setDisplay] = useState(false)
  const history = useHistory()
  const handleOnClick = () => {
    setDisplay(!display)
    logOutUser(history)
  }
  return (
    <header className='lheader'>
      <Link to='/'>
        <img src={logo} alt='logo' className='lheader-logo' />
      </Link>
      <img src={menuIcon} className='lheader-menu' alt='menu icon' onClick={() => setDisplay(!display)} />
      <div className='lheader-links' style={{ left: display ? '0%' : '100%' }}>
        <Link className='lheader-links__item' to={user ? '/transacciones' : '/pagos'} onClick={() => setDisplay(!display)}>{user ? 'transacciones' : 'Pagos'}</Link>
        <Link className='lheader-links__item' to={user ? '/cuenta' : '/preguntas'} onClick={() => setDisplay(!display)}>{user ? 'Cuenta' : 'Preguntas'}</Link>
        <Link className='lheader-links__item' to={user ? '/referidos' : '/'} onClick={() => setDisplay(!display)}>{user ? 'Referidos' : 'Acerca de'}</Link>
        <Link className='lheader-links__item' to='/politicas' onClick={() => setDisplay(!display)}>Políticas</Link>
        <span className='lheader-links__span' />
        <Link to={user ? '/login' : '/registro'} className='lheader-links__button' onClick={handleOnClick}>{user ? 'Cerrar Sesión' : 'Registrarme'}</Link>
        <Link to={user ? '/home' : '/login'} className='lheader-links__button' onClick={() => setDisplay(!display)}>{user ? 'Home' : 'Iniciar Sesión'}</Link>
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
