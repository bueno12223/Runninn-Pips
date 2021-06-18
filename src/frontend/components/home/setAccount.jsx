import React from 'react'
import useForm from '../../hooks/useForm'
import DisplayMessage from '../general/displayMessage'
import useHandleSubmit from '../../hooks/useHandleSubmit'
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
    <section>
      <h2>Modifica los datos de tu cuenta, si dejas un campo vacío, este no se modificará</h2>
      <form onSubmit={(e) => useHandleSubmit(e, value, setStudentAccont)}>
        <p>Tu correo actual es {email}</p>
        <input type='email' name='email' onChange={(e) => onChange(e)} placeholder='nuevo correo' />
        <p>Tu usuario actual es {userID}</p>
        <input type='text' name='userID' onChange={(e) => onChange(e)} placeholder='nuevo nombre de usuario' />
        <p>Tu nombre actual es {userName}</p>
        <input type='text' name='userName' onChange={(e) => onChange(e)} placeholder='nuevo nombre' />
        <p>Actualiza tu contraseña</p>
        <input type='password' name='password1' onChange={(e) => onChange(e)} placeholder='nueva contraseña' />
        <input type='password' name='password2' onChange={(e) => onChange(e)} placeholder='repite la nueva contraseña' />
        <p>Escribe tu contraseña actual para hacer los cambios validos</p>
        <input type='password' name='' onChange={(e) => onChange(e)} />
        <DisplayMessage className='' message={message} />
        <input type='submit' name='' onChange={(e) => onChange(e)} />
      </form>
    </section>
  )
}
export default setAccount
