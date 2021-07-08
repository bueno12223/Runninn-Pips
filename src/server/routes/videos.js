import axios from 'axios'
import express from 'express'
const videos = (app) => {
  const router = express.Router()
  app.use('/video', router)
  router.get('/search', async (req, res) => {
    const params = req.query
    const { 'connect.sid': sesionID } = req.cookies
    try {
      const result = await axios({
        method: 'GET',
        url: `${process.env.API_URL}/video/search?params=${params}`,
        headers: { Cookie: `connect.sid=${sesionID}` },
        withCredentials: true
      })
      res.status(200).json({ result })
    } catch (e) {
      res.status(400).json(e.response.data)
    }
  })
  router.get('/teacher/:id', async (req, res) => {
    const { id } = req.params
    try {
      const result = await axios({
        method: 'GET',
        url: `${process.env.API_URL}/video/teacher/${id}`
      })
      res.status(200).json({ teacher: result.data.teacher })
    } catch (e) {
      res.status(400).json({ message: 'Profesor no encontrado' })
    }
  })
  router.get('/:id', async (req, res) => {
    const { id } = req.params
    const { 'connect.sid': sesionID } = req.cookies
    try {
      const result = await axios({
        method: 'GET',
        url: `${process.env.API_URL}/video/${id}`,
        headers: { Cookie: `connect.sid=${sesionID}` },
        withCredentials: true
      })
      res.status(200).json({ data: result.data.result[0] })
    } catch (e) {
      res.status(400).json(e.response.data)
    }
  })
}
export default videos
