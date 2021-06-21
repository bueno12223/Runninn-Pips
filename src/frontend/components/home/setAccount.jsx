import React from 'react'
import useForm from '../../hooks/useForm'
import DisplayMessage from '../general/displayMessage'
import { connect } from 'react-redux'
import './styles/setAccount.scss'
function setAccount ({ email, userID, userName, setStudentAccont, messageHandler, message }) {
  const [value, onChange] = useForm({
    email: '',
    newuserID: '',
    userID,
    userName: '',
    password: '',
    password1: '',
    password2: ''
  })
  console.log(message)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (value.password1 !== value.password2 && value.password1) {
      return messageHandler({ message: 'las contraseñas no son iguales', success: false })
    }
    if (value.password1.length >= 8) {
      return messageHandler({ message: 'La contraseña debe tener minimo 8 carácteres, sin espacios', success: false })
    }
    return setStudentAccont(value, '/login')
    // validamos si la contraseña es valida
  }
  return (
    <section className='setAccount'>
      <h2 className='setAccount-title'>Modifica los datos de tu cuenta, si dejas un campo vacío, este no se modificará</h2>
      <form className='setAccount-form' onSubmit={(e) => handleSubmit(e)}>
        <p className='setAccount-formText'>Tu correo actual es {email}</p>
        <input className='setAccount-formInput' type='email' name='email' onChange={(e) => onChange(e)} placeholder='nuevo correo' />
        <p className='setAccount-formText'>Tu usuario actual es {userID}</p>
        <input className='setAccount-formInput' type='text' name='userID' onChange={(e) => onChange(e)} placeholder='nuevo nombre de usuario' />
        <p className='setAccount-formText'>Tu nombre actual es {userName}</p>
        <input className='setAccount-formInput' type='text' name='userName' onChange={(e) => onChange(e)} placeholder='nuevo nombre' />
        <p className='setAccount-formText'>Actualiza tu contraseña</p>
        <input className='setAccount-formInput' type='password' name='password1' onChange={(e) => onChange(e)} placeholder='nueva contraseña' />
        <input className='setAccount-formInput' type='password' name='password2' onChange={(e) => onChange(e)} placeholder='repite la nueva contraseña' />
        <p className='setAccount-formText'><b>Escribe tu contraseña actual para hacer los cambios validos</b></p>
        <input className='setAccount-formInput' type='password' name='password' onChange={(e) => onChange(e)} />
        <DisplayMessage className='' message={{ ...message }} />
        <input className='setAccount-formInput__submit' type='submit' name='' />
      </form>
    </section>
  )
}
const mapStateToProps = state => ({
  message: state.message
})
export default connect(mapStateToProps, null)(setAccount)