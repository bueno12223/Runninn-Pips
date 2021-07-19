import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import hello from '../assets/icons/layout/login.svg'
import { connect } from 'react-redux'
import { loginStudent } from '../actions'
import DisplayMesage from '../components/global/displayMessage'
import useForm from '../hooks/useForm'
import './styles/login.scss'
function login ({ loginStudent }) {
  const [form, setForm] = useForm({
    userID: '',
    password: ''
  })
  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault()
    loginStudent(form, history)
  }
  return (
    <section className='login-container'>
      <article className='login'>
        <h2 className='login-title'>Bienvenido de vuelta!!, por favor inicia sesión</h2>
        <DisplayMesage />
        <form className='login-form'>
          <input onChange={setForm} className='login-form__input' type='text' name='userID' placeholder='Usuario' required />
          <input onChange={setForm} className='login-form__input' type='password' name='password' placeholder='Contraseña' required />
          <Link className='login-form__text' to='/login'>¿Olvidaste tu contraseña?</Link>
          <Link className='login-form__text login-form__text-left' to='/login'>Recuerdame</Link>
          <button className='login-form__button' type='button' onClick={handleSubmit}>Entrar</button>
          <Link to='/registro' className='login-form__button-white'>Registrarme</Link>
        </form>
      </article>
      <article className='login__left'>
        <img src={hello} className='login__left-img' alt='imagen de saludo' />
      </article>
    </section>
  )
}
const mapDistpachToProps = {
  loginStudent
}
export default connect(null, mapDistpachToProps)(login)
