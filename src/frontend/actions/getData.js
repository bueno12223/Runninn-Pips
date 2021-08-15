import axios from 'axios'
import { messageHandler } from './states'

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
