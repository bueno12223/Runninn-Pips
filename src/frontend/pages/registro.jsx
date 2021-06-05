import React from 'react'
import { Link } from 'react-router-dom'
import Hello from '../assets/icons/hello'
import facebook from '../assets/icons/facebook.svg'
import './styles/login.scss'
function registro () {
  return (
    <section className='login-container'>
      <article className='login'>
        <h2 className='login-title'>Bienvenido!!, por favor llena los siguientes datos</h2>
        <form className='login-form login-form__register'>
          <input className='login-form__input' type='email' name='email' placeholder='Email' required />
          <input className='login-form__input' type='text' name='fullName' placeholder='Nombre completo' required />
          <input className='login-form__input' type='text' name='userID' placeholder='Nombre de usuario' />
          <input className='login-form__input' type='password' name='email' placeholder='Contraseña' required />
          <input className='login-form__input' type='password' name='email' placeholder='repite la contraseña' required />
          <input className='login-form__button' type='Submit' />
          <Link className='login-form__button-white'>Iniciar Sesión</Link>
          <button className='login-form__button-facebook'>
            <img src={facebook} alt='' />
            {'   '}
            Registrate con <br /> Facebook
          </button>
        </form>
      </article>
      <article className='login__left'>
        <Hello className='login__left-img' />
      </article>
    </section>
  )
}

export default registro
