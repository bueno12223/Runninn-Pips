import React, { useState, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import hello from '../assets/icons/layout/login.svg'
import Loader from '../components/global/loader'
import { connect } from 'react-redux'
import { loginStudent } from '../actions'
import useReaptcha from '../hooks/useReaptcha'
import Reaptcha from 'reaptcha'
import DisplayMesage from '../components/global/displayMessage'
import useForm from '../hooks/useForm'
import './styles/login.scss'
function login ({ loginStudent }) {
  const [form, setForm] = useForm({
    userID: '',
    password: ''
  })
  const capchat = useRef(null)
  const { verify, onFail, setLoad, onVerify, messageHandler } = useReaptcha(capchat)
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const handleSubmit = async (e) => {
    if (!verify) {
      return messageHandler({ message: 'recaptcha inválido, intentalo denuevo', success: false })
    }
    setLoading(true)
    e.preventDefault()
    await loginStudent(form, history, onFail)
    setLoading(false)
  }
  return (
    <section className='login-container'>
      <article className='login'>
        <h2 className='login-title'>Bienvenido de vuelta!!, por favor inicia sesión</h2>
        <DisplayMesage />
        <form className='login-form mb'>
          <input onChange={setForm} className='login-form__input' type='text' name='userID' placeholder='Usuario o email' autoComplete='userName' required />
          <input onChange={setForm} className='login-form__input' suggested='current-password' type='password' autoComplete='current-password' name='password' placeholder='Contraseña' required />
          <Link className='login-form__text' to='/recuperar'>¿Olvidaste tu contraseña?</Link>
          <Link className='login-form__text login-form__text-left' to='/login'>Recuerdame</Link>
          <button className='login-form__button' type='button' onClick={handleSubmit}>{loading ? (<Loader color='#FFF' width={40} height={40} />) : 'Entrar'}</button>
          <Link to='/registro' className='login-form__button-white'>Registrarme</Link>
        </form>
        <Reaptcha explicit ref={capchat} sitekey='6Ld-Z9EbAAAAAB4vB5ocoJRFCQC-3JyYHKxOm21X' onVerify={onVerify} onLoad={() => setLoad(true)} />
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
