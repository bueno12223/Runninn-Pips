import axios from 'axios'
import FormData from 'form-data'
import { messageHandler } from './states'

// subir y noticicar la transaccion
export const uploadTransacction = (payload, redirectUrl) => async (dispatch) => {
  // preparamos los datos paua subirlos y convertirlos en una URL
  const bodyFormData = new FormData()
  bodyFormData.append('image', payload.img)
  // petcion de guardar la image y obtener URL, dura 7 dias
  try {
    const img = await axios({
      method: 'post',
      url: 'https://api.imgbb.com/1/upload?expiration=604800&key=1b513c3ad873e32c0f610845b3ac9601',
      data: bodyFormData,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    await axios({
      method: 'post',
      url: '/transaction',
      data: { url: img.data.data.display_url, userID: payload.userID }
    })
    dispatch(messageHandler({ message: 'Notificado correctamente, te avisaremos cuando tu cuenta este nuevamente activa', success: true }))
  } catch (e) {
    dispatch(messageHandler({ message: 'error al notificar la transacción, intenta mas tarde', success: false }))
  }
}
export const validatePayment = (payload, redirectUrl) => async (dispatch) => {
  try {
    const { data: { message } } = await axios({
      method: 'post',
      url: '/payments',
      data: payload
    })
    dispatch(messageHandler({ message, success: true }))
  } catch (e) {
    console.log(e)
    dispatch(messageHandler({ message: 'error al realizar la transacción, intenta mas tarde', success: false }))
  }
}
