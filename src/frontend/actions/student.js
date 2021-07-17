import axios from 'axios'
import { messageHandler, registerData } from './states'
// inicar sesion
export const loginStudent = (payload, redirectFunc) => async (dispatch) => {
  try {
    const { data: { user, videos } } = await axios.post('/student/login', payload)
    const date = new Date(Date.now() + 86400e3)
    document.cookie = `id=${user._id};expires=${date}; secure`
    dispatch(registerData({ data: user, name: 'user' }))
    dispatch(registerData({ data: videos, name: 'videos' }))
    redirectFunc.push('/home')
  } catch (e) {
    console.log(e)
    return dispatch(messageHandler(e.response.data))
  }
}

// registrarse
export const singup = (payload, redirectFunc) => async (dispatch) => {
  try {
    const result = await axios.post('/student/register', payload)
    if (result.status === 201) {
      dispatch(messageHandler(result.data))
    }
  } catch (e) {
    console.log(e)
    if (e.response.status === 400) {
      const keys = Object.keys(e.response.data.key)
      if (keys[0] === 'userID') {
        return dispatch(messageHandler({ message: 'Ya existe una cuenta con este usuario', success: false }))
      }
      return dispatch(messageHandler({ message: 'Ya existe una cuenta con este correo', success: false }))
    }
    dispatch(messageHandler({ message: 'error del servidor, intenta mas tarde', success: false }))
  }
}
// configurar los datos de la cuenta
export const setStudentAccont = (payload, redirectUrl) => async (dispatch) => {
  try {
    // mandamos los datos al server
    const { email, userID, userName, password1, newUserID, bankAccount, bankData, telegramID } = payload
    const result = await axios({
      method: 'PUT',
      data: { email, userID: newUserID, userName, password: password1, bankData, bankAccount, telegramID },
      url: `/student/${userID}`
    })
    // enviamos un mensaje de success con la respuesta del servidor
    dispatch(messageHandler({ message: result.data.message, success: true }))
    // despues de 5s con el mensaje de success hacemos que inice sesión nuevamente
    setTimeout(() =>
      dispatch(logOutUser()),
    5000
    )
  } catch (e) {
    // si es 400 es porque un dato esta repetido
    if (e.response.status === 400) {
      const keys = Object.keys(e.response.data.key)
      // si no es UserID por logica es el correo, son los unicos 2 datos unicos
      if (keys[0] === 'userID') {
        return dispatch(messageHandler({ message: 'Ya existe una cuenta con este usuario', success: false }))
      }
      return dispatch(messageHandler({ message: 'Ya existe una cuenta con este correo', success: false }))
    }
    // si no es 400 es porque la contraseña es incorrecta
    if (e.response.status === 401) {
      return dispatch(messageHandler({ message: 'error del servidor, intenta mas tarde', success: false }))
    }
  }
}

// cerrar sesión eleiminando las cookies
export const logOutUser = (redirectFunc) => async (dispatch) => {
  document.cookie = 'id='
  document.cookie = 'connect.sid='
  dispatch(registerData({ data: null, name: 'videos' }))
  dispatch(registerData({ data: null, name: 'user' }))
  redirectFunc('/login')
}
