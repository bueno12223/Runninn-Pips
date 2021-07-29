import axios from 'axios'
import { messageHandler } from './states'

export const validatePayment = (payload, redirectUrl) => async (dispatch) => {
  if (!payload.id) {
    return dispatch(messageHandler({ message: 'Transaccion no encontrada', success: false }))
  }
  try {
    await axios({
      method: 'post',
      url: '/payments',
      data: payload
    })
    dispatch(messageHandler({ message: 'Pago realizado correctamente', success: true }))
  } catch (e) {
    console.log(e)
    dispatch(messageHandler({ message: 'error del servidor, intente mas tarde', success: false }))
  }
}
