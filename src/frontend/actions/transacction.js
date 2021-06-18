import axios from 'axios'
import FormData from 'form-data'
import { messageHandler } from './states'

// subir y noticicar la transaccion
export const uploadTransacction = (payload, redirectUrl) => async (dispatch) => {
  // preparamos los datos paua subirlos y convertirlos en una URL
  const bodyFormData = new FormData()
  bodyFormData.append('image', payload.img)
  // petcion de guardar la image y obtener URL
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
