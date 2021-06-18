import { connect } from 'react-redux'
import { messageHandler } from '../actions'

function useHandleMessage (e, form, successCallback) {
  e.preventDefault()
  if (form.password === form.password2) {
    return successCallback(form, '/login')
  }
  return messageHandler({ message: 'las contraseñas no son iguales', success: false })
}
const mapDispatchToProps = {
  messageHandler
}
export default connect(null, mapDispatchToProps)(useHandleMessage)
