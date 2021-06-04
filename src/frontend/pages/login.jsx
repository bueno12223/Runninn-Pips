import React from 'react'
import Header from '../components/landing/header'
import { Link } from 'react-router-dom'
function login () {
  return (
    <>
      <Header />
      <h2 className='login-title'>Bienvenido de vuelta!!, por favor inicia sesión</h2>
      <form className='login-form'>
        <input className='login-form__text' type='email' name='email' placeholder='Usuario' required />
        <input className='login-form__text' type='password' name='email' placeholder='Contraseña' required />
        <Link to='/'>¿Olvidaste tu contraseña?</Link>
        <input className='login-form__button' type='Submit' />
        <Link className='login-form__button-white'>Registrarme</Link>
        <button className='login-form__button-facebook'>Iniciar Sesión con Facebook</button>
      </form>
    </>
  )
}

export default login
