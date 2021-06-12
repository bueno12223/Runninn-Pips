import React, { useState } from 'react'
import facebook from '../assets/icons/facebook.svg'
import { Link } from 'react-router-dom'
import Hello from '../assets/icons/hello'
import { connect } from 'react-redux'
import { loginStudent, errorHandler } from '../actions'
import './styles/login.scss'
function login ({ loginStudent, error }) {
  const [form, setForm] = useState({
    userID: '',
    password: ''
  })
  const handleChangue = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    loginStudent(form, '/home')
  }
  console.log(error === true)
  return (
    <section className='login-container'>
      <article className='login'>
        <h2 className='login-title'>Bienvenido de vuelta!!, por favor inicia sesión</h2>
        <span className={error ? 'login-alert' : 'login-alert__disable'}>{error}</span>
        <form className='login-form' onSubmit={(e) => handleSubmit(e)}>
          <input onChange={e => handleChangue(e)} className='login-form__input' type='text' name='userID' placeholder='Usuario' required />
          <input onChange={e => handleChangue(e)} className='login-form__input' type='password' name='password' placeholder='Contraseña' required />
          <Link className='login-form__text' to='/login'>¿Olvidaste tu contraseña?</Link>
          <Link className='login-form__text login-form__text-left' to='/login'>Recuerdame</Link>
          <input className='login-form__button' type='Submit' />
          <Link to='/registro' className='login-form__button-white'>Registrarme</Link>
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
const mapStateToProps = {
  loginStudent,
  errorHandler
}
const mapDispachToProps = state => {
  return {
    error: state.error
  }
}
export default connect(mapDispachToProps, mapStateToProps)(login)
