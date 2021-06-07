import axios from 'axios'

const studentRoutes = (app) => {
  app.post('/login', async (req, res, next) => {
    const { userID, password } = req.body
    try {
      const result = await axios({
        url: 'http://localhost:3003/student/login',
        method: 'POST',
        withCredentials: true,
        auth: {
          username: userID,
          password
        }
      })
      console.log(result.headers)
      res.status(200).header(result.headers).json({ data: result.data.result })
    } catch (e) {
      console.log(e)
      next(e)
    }
  })
  app.post('/register', async (req, res) => {
    const { userID, password, email, userName } = req.body
    try {
      console.log('registrao')
      await axios({
        data: { userID, password, email, userName },
        url: 'http://localhost:3003/student/register',
        method: 'POST'
      })
      res.status(201).json({ message: 'creado correctamente' })
    } catch (error) {
      console.log(error, 'error de aqui')
      res.status(500)
    }
  })
}
export default studentRoutes
