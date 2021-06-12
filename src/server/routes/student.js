import axios from 'axios'

const studentRoutes = (app) => {
  app.post('/login', async (req, res, next) => {
    const { userID, password } = req.body
    try {
      const result = await axios({
        url: `${process.env.API_URL}/student/login`,
        method: 'POST',
        withCredentials: true,
        auth: {
          username: userID,
          password
        }
      })
      res.status(200).header(result.headers).json({ data: result.data.result })
    } catch (e) {
      res.status(e.response.status).json(e.response.data)
    }
  })
  app.post('/register', async (req, res) => {
    const { userID, password, email, userName } = req.body
    try {
      await axios({
        data: { userID, password, email, userName },
        url: `${process.env.API_URL}/student/register`,
        method: 'POST'
      })
      res.status(201).json({ message: 'creado correctamente' })
    } catch (e) {
      res.status(e.response.status).json(e.response.data)
    }
  })
}
export default studentRoutes
