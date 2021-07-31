import axios from 'axios'
import express from 'express'
const resetpassword = (app) => {
  const router = express.Router()
  app.use('/resetpassword', router)

  router.post('/generate', async (req, res) => {
    const data = req.body
    try {
      const result = await axios({
        method: 'POST',
        url: `${process.env.API_URL}/resetpassword/generate`,
        data
      })
      res.status(result.status).json(result.data)
    } catch (e) {
      console.error(e)
      res.status(e.response.status).json(e.response.data)
    }
  })

  router.post('/validate', async (req, res) => {
    const { token } = req.query
    const data = req.body
    try {
      const result = await axios({
        method: 'POST',
        url: `${process.env.API_URL}/resetpassword/validate?token=${token}`,
        data: data
      })
      res.status(result.status).json(result.data)
    } catch (e) {
      console.error(e)
      res.status(e.response.status).json(e.response.data)
    }
  })
}
export default resetpassword
