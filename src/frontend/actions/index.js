import axios from 'axios'

export const registerRequest = (payload) => ({
  type: 'REGISTER_REQUEST',
  payload
})
export const loginStudent = (payload, redirectUrl = '/home') => async (dispatch) => {
  try {
    const data = await axios.post('/login', payload)
    console.log(data)
  } catch (e) {
    console.log(e)
  }
}
