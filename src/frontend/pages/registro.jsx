/* eslint-disable eqeqeq */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Hello from '../assets/icons/hello'
import { singup, messageHandler } from '../actions'
import DisplayMesage from '../components/global/displayMessage'
import { connect } from 'react-redux'
import './styles/login.scss'
function registro ({ singup, messageHandler, location }) {
  // obtenemos el query con el upline
  const query = new URLSearchParams(location.search)
  const upline = query.get('upline')

  const [form, setForm] = useState({
    email: '',
    userName: '',
    userID: '',
    password: '',
    password2: '',
    upline: upline || ''
  })
  const handleChangue = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const haveAUpercase = (texto) => {
    const letrasMayusculas = 'ABCDEFGHYJKLMNÑOPQRSTUVWXYZ'
    for (let i = 0; i < texto.length; i++) {
      if (letrasMayusculas.indexOf(texto.charAt(i), 0) != -1) {
        return true
      }
    }
    return false
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.password !== form.password2) {
      return messageHandler({ message: 'las contraseñas no son iguales', success: false })
    }
    if (form.password.length < 8) {
      return messageHandler({ message: 'la contraseña debe tener minimo 8 carácteres', success: false })
    }
    if (haveAUpercase(form.userID)) {
      return messageHandler({ message: 'el nombre de usuario no puede tener mayúsculas', success: false })
    }
    return singup(form, '/login')
  }
  return (
    <section className='login-container'>
      <article className='login'>
        <h2 className='login-title'>Bienvenido!!, por favor llena los siguientes datos</h2>
        <DisplayMesage />
        <form className='login-form login-form__register' onSubmit={e => handleSubmit(e)}>
          <input onChange={(e) => handleChangue(e)} className='login-form__input' type='email' name='email' placeholder='Email' required />
          <input onChange={(e) => handleChangue(e)} className='login-form__input' type='text' name='userID' placeholder='Nombre de usuario' required />
          <input onChange={(e) => handleChangue(e)} className='login-form__input' type='text' name='userName' placeholder='Nombre y apellido' required />
          <input onChange={(e) => handleChangue(e)} className='login-form__input' type='password' name='password' placeholder='Contraseña' required />
          <input onChange={(e) => handleChangue(e)} className='login-form__input' type='password' name='password2' placeholder='repite la contraseña' required />
          <div className='login-form__check'>
            <input type='checkbox' name='checkbox' className='login-form__check' id='checkbox' required />
            <p className='text'>Aceto los términos y condiciones</p>
          </div>
          <input className='login-form__button' type='Submit' />
          <Link className='login-form__button-white'>Iniciar Sesión</Link>
        </form>
      </article>
      <article className='login__left'>
        <Hello className='login__left-img' />
      </article>
      <Link to='/registro/17' />
    </section>
  )
}
const mapStateToProps = {
  singup,
  messageHandler
}
export default connect(null, mapStateToProps)(registro)
