import axios from 'axios'
import { messageHandler } from './states'

export const validatePayment = (pay, redirectUrl) => async (dispatch) => {
  try {
    const params = {
      payment: pay,
    };
    const response = await axios({
      method: 'get',
      url: '/yappy',
      params: params
    })
    dispatch(messageHandler({ message: 'Pago realizado correctamente, inicia sesión nuevamente', success: true }))
    return response
  } catch (e) {
    console.log(e)
    dispatch(messageHandler({ message: 'error del servidor, intente mas tarde', success: false }))
  }
}
