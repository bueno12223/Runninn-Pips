import React, { useState } from 'react'
import logo from '../../assets/images/runningtrade.svg'
import { Link } from 'react-router-dom'
import menuIcon from '../../assets/icons/menu.svg'
import './styles/header.scss'
import { useHistory } from 'react-router'
import { logOutUser } from '../../actions'
import { connect } from 'react-redux'
function header ({ user, logOutUser, isActive }) {
  const [display, setDisplay] = useState(false)
  const history = useHistory()
  const isLogged = user && user._id
  const handleOnClick = () => {
    setDisplay(!display)
    logOutUser(history)
  }
  return (
    <div>
      <header className='lheader'>
        <Link to='/'>
          <img src={logo} alt='logo' className='lheader-logo' />
        </Link>
        <img src={menuIcon} className='lheader-menu' alt='menu icon' onClick={() => setDisplay(!display)} />
        <div className='lheader-links' style={{ left: display ? '0%' : '100%' }}>
          <Link className='lheader-links__item' to={(isActive && isLogged) ? '/transacciones' : '/pagos'} onClick={() => setDisplay(!display)}>{(isActive && isLogged) ? 'transacciones' : 'Pagos'}</Link>
          <Link className='lheader-links__item' to={isLogged ? '/cuenta' : '/preguntas'} onClick={() => setDisplay(!display)}>{isLogged ? 'Cuenta' : 'Preguntas'}</Link>
          <Link className='lheader-links__item' to={isLogged ? '/referidos' : '/'} onClick={() => setDisplay(!display)}>{isLogged ? 'Referidos' : 'Acerca de'}</Link>
          <Link className='lheader-links__item' to='/politicas' onClick={() => setDisplay(!display)}>Políticas</Link>
          <span className='lheader-links__span' />
          <Link to={isLogged ? '/login' : '/registro'} className='lheader-links__item' onClick={handleOnClick}><b>{isLogged ? 'Cerrar Sesión' : 'Registrarme'}</b></Link>
          <Link to={isLogged ? '/home' : '/login'} className='lheader-links__button lheader-links__button-main' onClick={() => setDisplay(!display)}>{isLogged ? 'Home' : 'Iniciar Sesión'}</Link>
        </div>
      </header>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    user: state.user,
    isActive: state.isActive
  }
}
const mapDispachToProps = {
  logOutUser
}
export default connect(mapStateToProps, mapDispachToProps)(header)
