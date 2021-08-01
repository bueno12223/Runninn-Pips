import React, { useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import hello from '../assets/icons/layout/login.svg'
import Loader from '../components/global/loader'
import { resetPassword, validatePassword } from '../actions'
import { connect } from 'react-redux'
import DisplayMesage from '../components/global/displayMessage'
import useForm from '../hooks/useForm'
import useReaptcha from '../hooks/useReaptcha'
import Reaptcha from 'reaptcha'
import './styles/login.scss'

function login ({ resetPassword, validatePassword }) {
  const search = useLocation().search
  const token = new URLSearchParams(search).get('token')
  const [form, setForm] = useForm({
    email: '',
    password: '',
    password2: '',
    token
  })
  const capchat = useRef(null)
  const { verify, onFail, setLoad, onVerify, messageHandler } = useReaptcha(capchat)
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e) => {
    if (!verify) {
      return messageHandler({ message: 'recaptcha inválido, intentalo denuevo', success: false })
    }
    setLoading(true)
    e.preventDefault()
    if (token) {
      if (form.password !== form.password2) {
        return messageHandler({ message: 'las contraseñas no son iguales', success: false })
      }
      await validatePassword(form)
    } else {
      await resetPassword(form, onFail)
    }
    setLoading(false)
  }
  return (
    <section className='login-container'>
      <article className='login'>
        <h2 className='login-title'>{token ? 'Cambiar contraseña' : 'Recuperar contraseña'}</h2>
        <DisplayMesage />
        <form className='login-form'>
          {
                token
                  ? (
                    <>
                      <input onChange={setForm} className='login-form__input' type='password' name='password' placeholder='Contraseña' required />
                      <input onChange={setForm} className='login-form__input' type='password' name='password2' placeholder='repite la contraseña' required />
                    </>
                    )

                  : (<input onChange={setForm} className='login-form__input' type='text' name='email' placeholder='Email' autoComplete='userName' required />)
            }
          <button className='login-form__button' type='button' onClick={handleSubmit}>{loading ? (<Loader color='#FFF' width={40} height={40} />) : 'Enviar'}</button>
          <Link to='/login' className='login-form__button-white'>Regresar</Link>
        </form>
        <Reaptcha explicit ref={capchat} sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI' onVerify={onVerify} onLoad={() => setLoad(true)} />
      </article>
      <article className='login__left'>
        <img src={hello} className='login__left-img' alt='imagen de saludo' />
      </article>
    </section>
  )
}
const mapDistpachToProps = {
  resetPassword,
  validatePassword
}
export default connect(null, mapDistpachToProps)(login)
