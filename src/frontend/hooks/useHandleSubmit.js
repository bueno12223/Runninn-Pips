import { connect } from 'react-redux'
import { messageHandler } from '../actions'
import useValidateEmail from './useValidateEmail'
function useHandleMessage (e, form, successCallback) {
  e.preventDefault()
  if (form.password !== form.password2) {
    return messageHandler({ message: 'las contraseñas no son iguales', success: false })
  }
  // validamos si el correo es un correo
  useValidateEmail(form.email) && messageHandler({ message: 'este correo no es válido', success: false })
  // validamos si la contraseña es valida
  form.password1.length >= 8 && messageHandler({ message: 'La contraseña debe tener minimo 8 carácteres, sin espacios', success: false })
  return successCallback(form, '/login')
}
const mapDispatchToProps = {
  messageHandler
}
export default connect(null, mapDispatchToProps)(useHandleMessage)
