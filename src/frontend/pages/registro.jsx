/* eslint-disable eqeqeq */
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import hello from '../assets/icons/layout/login.svg'
import Loader from '../components/global/loader'
import { singup, messageHandler } from '../actions'
import DisplayMesage from '../components/global/displayMessage'
import useForm from '../hooks/useForm'
import useValidateForm from '../hooks/useValidateForm'
import { connect } from 'react-redux'
import './styles/login.scss'
function registro ({ singup, messageHandler, location }) {
  // obtenemos el query con el upline
  const query = new URLSearchParams(location.search)
  const upline = query.get('upline')
  const [loading, setLoading] = useState(false)
  const validate = useValidateForm()
  const [form, setForm] = useForm({
    email: '',
    userName: '',
    userID: '',
    password: '',
    password2: '',
    upline
  })
  const history = useHistory()
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.password !== form.password2) {
      return messageHandler({ message: 'las contraseñas no son iguales', success: false })
    }
    setLoading(true)
    validate(form)
    await singup(form, history)
    setLoading(false)
  }
  return (
    <section className='login-container'>
      <article className='login'>
        <h2 className='login-title'>Bienvenido!!, por favor llena los siguientes datos</h2>
        <p className='text' style={{ fontSize: 11 + 'px', lineHeight: 16 + 'px' }}>El mismo correo con el que se registra recibirá los pagos de referidos y hará los pagos con Paypal</p>
        <DisplayMesage />
        <form className='login-form login-form__register'>
          <input onChange={setForm} className='login-form__input' type='email' name='email' placeholder='Email' required />
          <input onChange={setForm} className='login-form__input' type='text' name='userID' placeholder='ID de usuario' required />
          <input onChange={setForm} className='login-form__input' type='text' name='userName' placeholder='Nombre y apellido' required />
          <input onChange={setForm} className='login-form__input' type='password' name='password' placeholder='Contraseña' required />
          <input onChange={setForm} className='login-form__input' type='password' name='password2' placeholder='repite la contraseña' required />
          <div className='login-form__check'>
            <input type='checkbox' name='checkbox' className='login-form__check' id='checkbox' required />
            <p className='text' style={{ textAlign: 'left' }}>Aceto los términos y condiciones</p>
          </div>
          <button className='login-form__button' type='button' onClick={e => handleSubmit(e)}>{loading ? (<Loader color='#FFF' width={40} height={40} />) : 'Registrarse'}</button>
          <Link to='/login' className='login-form__button-white'>Iniciar Sesión</Link>
        </form>
      </article>
      <article className='login__left'>
        <img src={hello} className='login__left-img' alt='imagen de saludo' />
      </article>
    </section>
  )
}
const mapStateToProps = {
  singup,
  messageHandler
}
export default connect(null, mapStateToProps)(registro)
