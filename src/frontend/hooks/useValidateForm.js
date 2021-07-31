import { useDispatch } from 'react-redux'

const useValidateForm = () => {
  const dispatch = useDispatch()
  const messageHandler = (payload) => {
    dispatch({ type: 'MESSAGE_HANDLER', payload })
  }
  const validate = (form) => {
    if (form.password.length < 8 && form.password) {
      return messageHandler({ message: 'la contraseña debe tener minimo 8 carácteres', success: false })
    }
    if (/\s/.test(form.userID)) {
      return messageHandler({ message: 'el nombre de usuario no puede espacios', success: false })
    }
    return messageHandler({ message: false })
  }
  return validate
}
export default useValidateForm
