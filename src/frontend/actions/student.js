import axios from 'axios'
import { messageHandler, registerData } from './states'
// inicar sesion
export const loginStudent = (payload, redirectFunc, onFail) => async (dispatch) => {
  try {
    const { data: { user, videos } } = await axios.post('/student/login', payload)
    const ranked = []
    const teacherVideos = {
      OmarSosa: [],
      NormaQuintero: [],
      IsmaelOrtega: [],
      JairPowell: [],
      OmarSosaFx: [],
      CoraliaPinzon: [],
      EsterMoonetti: [],
      RuthYessenia: [],
      OmarSosaCursos: []
    }
    if (videos) {
      for (const name in teacherVideos) {
        // eslint-disable-next-line camelcase
        const result = videos.filter(({ profesor_id }) => profesor_id === name)
        ranked.push(result[0])
        teacherVideos[name] = result.sort((a, b) => {
          return a.order - b.order
        })
      }
    }
    console.log(teacherVideos)
    dispatch(registerData({ data: user, name: 'user' }))
    dispatch(registerData({ data: videos ? teacherVideos : videos, name: 'videos' }))
    dispatch(registerData({ data: ranked, name: 'ranked' }))
    window.localStorage.removeItem('recaptcha')
    redirectFunc.push('/home')
  } catch (e) {
    console.error(e)
    if (e.response.status !== 401) {
      return dispatch(messageHandler({ message: 'Error del servidor, intente mas tarde', success: false }))
    }
    onFail()
    return dispatch(messageHandler({ message: 'Usuario o contraseña incorrecta', success: false }))
  }
}

// registrarse
export const singup = (payload, redirectFunc, onFail) => async (dispatch) => {
  try {
    const result = await axios.post('/student/register', payload)
    dispatch(messageHandler(result.data))
    window.localStorage.removeItem('recaptcha')
    setTimeout(() => {
      redirectFunc.push('/login')
    }
    , 2000)
  } catch (e) {
    console.log(e)
    if (e.response.status === 400) {
      const keys = Object.keys(e.response.data.key)
      onFail()
      if (keys[0] === 'userID') {
        return dispatch(messageHandler({ message: 'Ya existe una cuenta con este usuario', success: false }))
      } else if (keys[0] === 'email') {
        return dispatch(messageHandler({ message: 'Ya existe una cuenta con este correo', success: false }))
      } else {
        return dispatch(messageHandler({ message: 'El link de referidos es incorrecto', success: false }))
      }
    }
    return dispatch(messageHandler({ message: 'error del servidor, intenta mas tarde', success: false }))
  }
}
// configurar los datos de la cuenta
export const setStudentAccont = (payload, redirectUrl) => async (dispatch) => {
  try {
    // mandamos los datos al server
    const { email, userName, password1, userID } = payload
    const result = await axios({
      method: 'PUT',
      data: { email, userName, password: password1 },
      url: `/student/${userID}`
    })
    // enviamos un mensaje de success con la respuesta del servidor
    dispatch(messageHandler({ message: result.data.message, success: true }))
    // despues de 5s con el mensaje de success hacemos que inice sesión nuevamente
    setTimeout(() =>
      dispatch(logOutUser(redirectUrl)),
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
    return dispatch(messageHandler({ message: 'error del servidor, intenta mas tarde', success: false }))
  }
}

// cerrar sesión eleiminando las cookies
export const logOutUser = (redirectFunc) => async (dispatch) => {
  document.cookie = 'connect.sid='
  dispatch(registerData({ data: null, name: 'videos' }))
  dispatch(registerData({ data: null, name: 'user' }))
  redirectFunc.push('/login')
}
