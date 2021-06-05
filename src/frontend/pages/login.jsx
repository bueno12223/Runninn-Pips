import React from 'react'
import { Link } from 'react-router-dom'
import Hello from '../assets/icons/hello'
import facebook from '../assets/icons/facebook.svg'
import './styles/login.scss'
function login () {
  return (
    <section className='login-container'>
      <article className='login'>
        <h2 className='login-title'>Bienvenido de vuelta!!, por favor inicia sesión</h2>
        <form className='login-form'>
          <input className='login-form__input' type='email' name='email' placeholder='Usuario' required />
          <input className='login-form__input' type='password' name='email' placeholder='Contraseña' required />
          <Link className='login-form__text' to='/'>¿Olvidaste tu contraseña?</Link>
          <Link className='login-form__text login-form__text-left' to='/'>Recuerdame</Link>
          <input className='login-form__button' type='Submit' />
          <Link className='login-form__button-white'>Registrarme</Link>
          <button className='login-form__button-facebook'>
            <img src={facebook} alt='' />
            {'   '}
            Iniciar Sesión con <br /> Facebook
          </button>
        </form>
      </article>
      <article className='login__left'>
        <Hello className='login__left-img' />
      </article>
    </section>
  )
}

export default login
