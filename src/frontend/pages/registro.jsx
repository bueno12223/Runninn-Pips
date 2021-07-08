/* eslint-disable eqeqeq */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Hello from '../assets/icons/hello'
import { singup, messageHandler } from '../actions'
import facebook from '../assets/icons/facebook.svg'
import DisplayMesage from '../components/general/displayMessage'
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
  const haveAnumber = texto => {
    const numeros = '0123456789'
    for (let i = 0; i < texto.length; i++) {
      if (numeros.indexOf(texto.charAt(i), 0) != -1) {
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
    if (form.password.userID < 6) {
      return messageHandler({ message: 'el nombre de usuario debe tener minimo 6 carácteres', success: false })
    }
    if (!haveAnumber(form.password)) {
      return messageHandler({ message: 'la contraseñas debe tener minimo una número', success: false })
    }
    if (!haveAUpercase(form.password)) {
      return messageHandler({ message: 'la contraseñas debe tener minimo una lentra en mayúscula', success: false })
    }
    if (haveAUpercase(form.userID)) {
      return messageHandler({ message: 'el nombre de usuario no puede tener mayúsculas', success: false })
    }
    if (!haveAnumber(form.userID)) {
      return messageHandler({ message: 'el nombre de usuario debe tener commo minimo 1 número', success: false })
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
          <input onChange={(e) => handleChangue(e)} className='login-form__input' type='text' name='userName' placeholder='Nombre completo' required />
          <input onChange={(e) => handleChangue(e)} className='login-form__input' type='text' name='userID' placeholder='Nombre de usuario' />
          <input onChange={(e) => handleChangue(e)} className='login-form__input' type='password' name='password' placeholder='Contraseña' required />
          <input onChange={(e) => handleChangue(e)} className='login-form__input' type='password' name='password2' placeholder='repite la contraseña' required />
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
      <Link to='/registro/17' />
    </section>
  )
}
const mapStateToProps = {
  singup,
  messageHandler
}
export default connect(null, mapStateToProps)(registro)
