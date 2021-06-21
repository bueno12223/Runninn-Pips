import axios from 'axios'
import { registerRequest, messageHandler } from './states'
// inicar sesion
export const loginStudent = (payload, redirectUrl) => async (dispatch) => {
  try {
    const data = await axios.post('/student/login', payload)
    if (data.status === 200) {
      const date = new Date(Date.now() + 86400e3)
      document.cookie = `id=${data.data.data._id};expires=${date}; secure`
      dispatch(registerRequest(data.data))
      window.location.href = redirectUrl
    }
  } catch (e) {
    if (e.response.status === 500) {
      window.localStorage.setItem('userID', JSON.stringify(payload.userID))
      window.location.href = '/pagos'
    }
    dispatch(messageHandler({ message: 'Usuario o contraseña incorrecta', success: false }))
  }
}

// registrarse
export const singup = (payload, redirectUrl) => async (dispatch) => {
  try {
    const result = await axios.post('/student/register', payload)
    if (result.status === 201) {
      dispatch(messageHandler({ message: 'Usuario creado correctamente', success: true }))
      setTimeout(() => {
        window.location.href = redirectUrl
      }
      , 2000)
    }
  } catch (e) {
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
    const { email, userID, userName, password1, newUserID, bankAccount, bankData } = payload
    const result = await axios({
      method: 'PUT',
      data: { email, userID: newUserID, userName, password: password1, bankData, bankAccount },
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
export const logOutUser = (payload, redirectUrl) => async (dispatch) => {
  document.cookie = 'id='
  document.cookie = 'connect.sid='
  window.location.href = '/login'
}
