import axios from 'axios'
import express from 'express'
const studentRoutes = (app) => {
  const router = express.Router()
  app.use('/student', router)
  // login estudiante
  router.post('/login', async (req, res) => {
    const { userID, password } = req.body
    try {
      const { data, headers } = await axios({
        url: `${process.env.API_URL}/student/login`,
        method: 'POST',
        withCredentials: true,
        auth: {
          username: userID,
          password
        }
      })
      res.status(200).header(headers).json({ ...data })
    } catch (e) {
      console.log(e.response.data)
      res.sendStatus(e.response.status)
    }
  })
  // registrar usuario
  router.post('/register', async (req, res) => {
    const { userID, password, email, userName, upline } = req.body
    try {
      const { data } = await axios({
        data: { userID, password, email, userName, upline },
        url: `${process.env.API_URL}/student/register`,
        method: 'POST'
      })
      res.status(201).json(data)
    } catch (e) {
      console.error(e)
      res.status(e.response.status).json({ ...e.response.data })
    }
  })
  // configurar datos del usuario
  router.put('/:id', async (req, res) => {
    const { id } = req.params
    const data = req.body
    const { 'connect.sid': sesionID } = req.cookies
    try {
      const result = await axios({
        method: 'PUT',
        url: `${process.env.API_URL}/student/${id}`,
        data,
        headers: { Cookie: `connect.sid=${sesionID}` },
        withCredentials: true
      })
      res.status(result.status).json({ ...result.data })
    } catch (e) {
      console.log(e)
      res.status(e.response.status).json({ ...e.response.data })
    }
  })
}
export default studentRoutes
