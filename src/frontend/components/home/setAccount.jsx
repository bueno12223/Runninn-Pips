import React from 'react'
import useForm from '../../hooks/useForm'
import DisplayMessage from '../global/displayMessage'
import { connect, useSelector } from 'react-redux'
import './styles/setAccount.scss'
function setAccount ({ setStudentAccont, messageHandler }) {
  const { email, userID, userName } = useSelector(state => state.user)
  const [value, onChange] = useForm({
    email: '',
    userID,
    userName: '',
    password1: '',
    password2: '',
    telegramID: ''
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    // validamos si la contraseña es valida
    if (value.password1 !== value.password2 && value.password1) {
      return messageHandler({ message: 'las contraseñas no son iguales', success: false })
    }
    // eslint-disable-next-line eqeqeq
    if (value.password1.length < 8 && value.password1) {
      return messageHandler({ message: 'La contraseña debe tener minimo 8 carácteres, sin espacios', success: false })
    }
    return setStudentAccont(value, '/login')
  }
  return (
    <section className='setAccount'>
      <h2 className='setAccount-title'>Modifica los datos de tu cuenta, si dejas un campo vacío, este no se modificará</h2>
      <form className='setAccount-form' onSubmit={(e) => handleSubmit(e)}>
        <p className='setAccount-formText'>Tu correo actual es {email}</p>
        <input className='setAccount-formInput' type='email' name='email' onChange={(e) => onChange(e)} placeholder='nuevo correo' />
        <p className='setAccount-formText'>Tu nombre actual es {userName}</p>
        <input className='setAccount-formInput' type='text' name='userName' onChange={(e) => onChange(e)} placeholder='nuevo nombre' />
        <p className='setAccount-formText'>Actualiza tu contraseña</p>
        <input className='setAccount-formInput' type='password' name='password1' onChange={(e) => onChange(e)} placeholder='nueva contraseña' />
        <input className='setAccount-formInput' type='password' name='password2' onChange={(e) => onChange(e)} placeholder='repite la nueva contraseña' />
        <p className='setAccount-formText'>Para poder entrar al canal de telegram escribe tu id de telegram, si no sabes cual es dale click <a href='https://msng.link/o/?userinfobot=tg'>aquí</a> y escribe /start, escribe tu id tal cual como te la dieron</p>
        <input className='setAccount-formInput' type='text' name='telegramID' onChange={(e) => onChange(e)} placeholder='id de telegram' />
        <DisplayMessage />
        <input className='setAccount-formInput__submit' type='submit' name='' />
      </form>
    </section>
  )
}
const mapStateToProps = state => ({
  message: state.message
})
export default connect(mapStateToProps, null)(setAccount)
