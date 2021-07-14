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
      const result = await axios({
        method: 'POST',
        data: req,
        url: `${process.env.API_URL}/payments`
      })
      console.log(result)
      res.sendStatus(200)
    } catch (e) {
      console.log(e)
    }
  })
}
export default transacctions
