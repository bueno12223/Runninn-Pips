import axios from 'axios'
const transacctions = (app) => {
  app.post('/transaction', async (req, res) => {
    const { userID, url, userName } = req.body
    try {
      const result = await axios({
        method: 'POST',
        data: { userID, url, userName },
        url: `${process.env.API_URL}/transaction`
      })
      res.status(201).json({ data: result.data.result })
    } catch (e) {
      res.status(e.response.status).json(e.response.data)
    }
  })
  app.post('/payments', async (req, res) => {
    try {
      await axios({
        method: 'POST',
        data: req.body,
        url: `${process.env.API_URL}/payments`
      })
      res.sendStatus(200)
    } catch (e) {
      console.error(e)
    }
  })
  app.post('/message', async (req, res) => {
    try {
      await axios({
        method: 'POST',
        data: req.body,
        url: `${process.env.API_URL}/message`
      })
      res.sendStatus(200)
    } catch (e) {
      console.error(e)
      res.sendStatus(400)
    }
  })
  app.get('/update/:id', async (req, res) => {
    const { id } = req.params
    try {
      await axios({
        method: 'POST',
        url: `${process.env.API_URL}/teacher/folder/${id}`
      })
    } catch (e) {
      console.error(e)
      return res.sendStatus(400)
    }
    return res.sendStatus(204)
  })
}
export default transacctions
