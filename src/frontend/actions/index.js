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
    return dispatch(errorHandler('los datos no son correctos'))
  } catch (e) {
    dispatch(errorHandler('error del servidor, intenta mas tarde'))
    console.log(e)
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
