import React from 'react'
import useForm from '../../hooks/useForm'
import DisplayMessage from '../global/displayMessage'
import { useHistory } from 'react-router-dom'
import { messageHandler } from '../../actions'
import { connect, useSelector } from 'react-redux'
import './styles/setAccount.scss'
function setAccount ({ setStudentAccont, messageHandler }) {
  const { email, userID, userName, telegram } = useSelector(state => state.user)
  const telegramToken = telegram ? telegram.telegramToken : '0000'
  const history = useHistory()
  const [value, onChange] = useForm({
    email: '',
    userName: '',
    userID,
    password1: '',
    password2: ''
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
    return setStudentAccont(value, history)
  }
  return (
    <section className='setAccount'>
      <h2 className='title'>Modifica los datos de tu cuenta</h2>
      <p className='text'>si dejas un campo vacío, este no se modificará</p>
      <form className='setAccount-form' onSubmit={(e) => handleSubmit(e)}>
        <p className='text'>Tu correo actual es {email}</p>
        <input className='setAccount-formInput' type='email' name='email' onChange={(e) => onChange(e)} placeholder='nuevo correo' />
        <p className='text'>Tu nombre actual es {userName}</p>
        <input className='setAccount-formInput' type='text' name='userName' onChange={(e) => onChange(e)} placeholder='nuevo nombre' />
        <p className='text'>Actualiza tu contraseña</p>
        <input className='setAccount-formInput' type='password' name='password1' onChange={(e) => onChange(e)} placeholder='nueva contraseña' />
        <input className='setAccount-formInput' type='password' name='password2' onChange={(e) => onChange(e)} placeholder='repite la nueva contraseña' />

        <input className='setAccount-formInput__submit' type='submit' value='Enviar' />
        <DisplayMessage />
      </form>
    </section>
  )
}
const mapStateToProps = state => ({
  message: state.message
})
const mapDispatchToProps = {
  messageHandler
}
export default connect(mapStateToProps, mapDispatchToProps)(setAccount)
