import axios from 'axios'
import { messageHandler } from './states'

export const resetPassword = (payload) => async (dispatch) => {
  try {
    const response = await axios({
      method: 'POST',
      data: payload,
      url: '/resetpassword/generate'
    })
    dispatch(messageHandler({ ...response.data }))
  } catch (e) {
    console.error(e)
    dispatch(messageHandler({ ...e.response.data }))
  }
}

export const validatePassword = ({ password, token }) => async (dispatch) => {
  try {
    const response = await axios({
      method: 'POST',
      data: { password },
      url: `/resetpassword/validate?token=${token}`
    })
    dispatch(messageHandler({ ...response.data }))
  } catch (e) {
    console.error(e)
    dispatch(messageHandler({ ...e.response.data }))
  }
}
