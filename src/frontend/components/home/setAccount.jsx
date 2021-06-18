import React from 'react'
import useForm from '../../hooks/useForm'
import DisplayMessage from '../general/displayMessage'
import useHandleSubmit from '../../hooks/useHandleSubmit'
import './styles/setAccount.scss'
function setAccount ({ email, userID, userName, setStudentAccont, message }) {
  const [value, onChange] = useForm({
    email: '',
    userID: '',
    userName: '',
    password: '',
    password1: '',
    password2: ''
  })
  return (
    <section className='setAccount'>
      <h2 className='setAccount-title'>Modifica los datos de tu cuenta, si dejas un campo vacío, este no se modificará</h2>
      <form className='setAccount-form' onSubmit={(e) => useHandleSubmit(e, value, setStudentAccont)}>
        <p className='setAccount-formText'>Tu correo actual es {email}</p>
        <input className='setAccount-formInput' type='email' name='email' onChange={(e) => onChange(e)} placeholder='nuevo correo' />
        <p className='setAccount-formText'>Tu usuario actual es {userID}</p>
        <input className='setAccount-formInput' type='text' name='userID' onChange={(e) => onChange(e)} placeholder='nuevo nombre de usuario' />
        <p className='setAccount-formText'>Tu nombre actual es {userName}</p>
        <input className='setAccount-formInput' type='text' name='userName' onChange={(e) => onChange(e)} placeholder='nuevo nombre' />
        <p className='setAccount-formText'>Actualiza tu contraseña</p>
        <input className='setAccount-formInput' type='password' name='password1' onChange={(e) => onChange(e)} placeholder='nueva contraseña' />
        <input className='setAccount-formInput' type='password' name='password2' onChange={(e) => onChange(e)} placeholder='repite la nueva contraseña' />
        <p className='setAccount-formText'>Escribe tu contraseña actual para hacer los cambios validos</p>
        <input className='setAccount-formInput' type='password' name='' onChange={(e) => onChange(e)} />
        <DisplayMessage className='' message={message} />
        <input className='setAccount-formInput_submit' type='submit' name='' onChange={(e) => onChange(e)} />
      </form>
    </section>
  )
}
export default setAccount
