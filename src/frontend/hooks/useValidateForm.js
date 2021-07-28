import { useDispatch } from 'react-redux'

const useValidateForm = () => {
  const dispatch = useDispatch()
  const messageHandler = (payload) => {
    dispatch({ type: 'MESSAGE_HANDLER', payload })
  }
  const haveAUpercase = (texto) => {
    const letrasMayusculas = 'ABCDEFGHYJKLMNÑOPQRSTUVWXYZ'
    for (let i = 0; i < texto.length; i++) {
      // eslint-disable-next-line eqeqeq
      if (letrasMayusculas.indexOf(texto.charAt(i), 0) != -1) {
        return true
      }
    }
    return false
  }
  const validate = (form) => {
    if (form.password.length < 8 && form.password) {
      return messageHandler({ message: 'la contraseña debe tener minimo 8 carácteres', success: false })
    }
    if (haveAUpercase(form.userID) && form.userID !== '') {
      return messageHandler({ message: 'el nombre de usuario no puede tener mayúsculas', success: false })
    }
    return messageHandler({ message: false })
  }
  return validate
}
export default useValidateForm
