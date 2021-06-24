import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Hello from '../assets/icons/hello'
import { singup, messageHandler } from '../actions'
import facebook from '../assets/icons/facebook.svg'
import DisplayMesage from '../components/general/displayMessage'
import { connect } from 'react-redux'
import './styles/login.scss'
function registro ({ singup, messageHandler }) {
  const [form, setForm] = useState({
    email: '',
    userName: '',
    userID: '',
    password: '',
    password2: '',
    upline: ''
  })
  const handleChangue = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.password === form.password2) {
      return singup(form, '/login')
    }
    return messageHandler({ message: 'las contraseñas no son iguales', success: false })
  }
  return (
    <section className='login-container'>
      <article className='login'>
        <h2 className='login-title'>Bienvenido!!, por favor llena los siguientes datos</h2>
        <DisplayMesage />
        <form className='login-form login-form__register' onSubmit={e => handleSubmit(e)}>
          <input onChange={(e) => handleChangue(e)} className='login-form__input' type='email' name='email' placeholder='Email' required />
          <input onChange={(e) => handleChangue(e)} className='login-form__input' type='text' name='userName' placeholder='Nombre completo' required />
          <input onChange={(e) => handleChangue(e)} className='login-form__input' type='text' name='userID' placeholder='Nombre de usuario' />
          <input onChange={(e) => handleChangue(e)} className='login-form__input' type='password' name='password' placeholder='Contraseña' required />
          <input onChange={(e) => handleChangue(e)} className='login-form__input' type='password' name='password2' placeholder='repite la contraseña' required />
          <input onChange={(e) => handleChangue(e)} className='login-form__input' type='text' name='upline' placeholder='usuario de quien te refirió' />
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
const mapStateToProps = {
  singup,
  messageHandler
}
export default connect(null, mapStateToProps)(registro)
