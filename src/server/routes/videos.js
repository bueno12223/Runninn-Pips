import axios from 'axios'
import express from 'express'
const videos = (app) => {
  const router = express.Router()
  app.use('/search', router)
  router.get('/', async (req, res) => {
    const { q } = req.query
    const { 'connect.sid': sesionID } = req.cookies
    try {
      const { data } = await axios({
        method: 'GET',
        url: `${process.env.API_URL}/video/search?q=${q}`,
        headers: { Cookie: `connect.sid=${sesionID}` },
        withCredentials: true
      })
      res.status(200).json([...data])
    } catch (e) {
      console.error(e)
      res.sendStatus(400)
    }
  })
}
export default videos
