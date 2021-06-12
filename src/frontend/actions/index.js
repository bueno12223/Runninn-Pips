import axios from 'axios'

export const registerRequest = (payload) => ({
  type: 'REGISTER_REQUEST',
  payload
})

export const errorHandler = (payload) => ({
  type: 'ERROR_REGISTER',
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
    console.log(e.response)
    if (e.response.status === 401) {
      console.log(e.response.data.message)
      return dispatch(errorHandler(e.response.data.message))
    }
    dispatch(errorHandler('Usuario o contraseña incorrecta'))
  }
}

export const singup = (payload, redirectUrl) => async (dispatch) => {
  try {
    const result = await axios.post('/register', payload)
    console.log(result.status)
    if (result.status === 201) {
      window.location.href = redirectUrl
    }
  } catch (e) {
    dispatch(errorHandler('error del servidor, intenta mas tarde'))
    console.log(e)
  }
}

export const logOutUser = (payload, redirectUrl) => async (dispatch) => {
  document.cookie = 'id='
  document.cookie = 'connect.sid='
  window.location.href = '/login'
}
