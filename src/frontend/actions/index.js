import axios from 'axios'

export const registerRequest = (payload) => ({
  type: 'REGISTER_REQUEST',
  payload
})

export const messageHandler = (payload) => ({
  type: 'MESSAGE_HANDLER',
  payload
})

export const loginStudent = (payload, redirectUrl) => async (dispatch) => {
  try {
    const data = await axios.post('/login', payload)
    if (data.status === 200) {
      const date = new Date(Date.now() + 86400e3)
      document.cookie = `id=${data.data.data._id};expires=${date}; secure`
      dispatch(registerRequest(data.data))
      window.location.href = redirectUrl
    }
  } catch (e) {
    if (e.response.status === 401) {
      return dispatch(messageHandler({ message: e.response.data.message, success: false }))
    }
    dispatch(messageHandler({ message: 'Usuario o contraseña incorrecta', success: false }))
  }
}

export const singup = (payload, redirectUrl) => async (dispatch) => {
  try {
    const result = await axios.post('/register', payload)
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

export const logOutUser = (payload, redirectUrl) => async (dispatch) => {
  document.cookie = 'id='
  document.cookie = 'connect.sid='
  window.location.href = '/login'
}
