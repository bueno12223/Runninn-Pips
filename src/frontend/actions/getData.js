import axios from 'axios'
import { messageHandler, registerData } from './states'

export const getTeacher = (payload, redirectUrl) => async (dispatch) => {
  try {
    const teacher = await axios({
      method: 'GET',
      url: `/video/teacher/${payload}`
    })
    return teacher.data.teacher
  } catch (e) {
    console.log(e)
  }
}
export const getVideo = (payload, redirectUrl) => async (dispatch) => {
  try {
    const video = await axios({
      method: 'GET',
      url: `/video/${payload}`
    })
    return video.data.data
  } catch (e) {
    console.log(e)
  }
}
export const searchVideo = (payload, redirectUrl) => async (dispatch) => {
  try {
    const { data } = await axios({
      method: 'GET',
      url: `/video/search?q=${payload}`
    })
    dispatch(registerData({ data, name: 'search' }))
  } catch (e) {
    console.log(e)
  }
}
export const sendMessage = (payload, redirectUrl) => async (dispatch) => {
  try {
    await axios({
      method: 'POST',
      url: '/message',
      data: payload
    })
    dispatch(messageHandler({ message: 'Enviado correctamente', success: true }))
  } catch (e) {
    console.error(e)
    dispatch(messageHandler({ message: 'Error al enviar el mensaje, intenta mas tarde', success: false }))
  }
}
