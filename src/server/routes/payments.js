import axios from 'axios'

const paymemts = (app) => {
  app.post('/payments', async (req, res) => {
    try {
      const { headers } = req
      const { data } = await axios({
        method: 'POST',
        data: { ...req.body, token: process.env.PAYMENT_TOKEN },
        url: `${process.env.API_URL}/payments`,
        headers
      })
      return res.status(200).json({ ...data })
    } catch (e) {
      console.log(e.response.data)
      return res.sendStatus(e.response.status).json(e.response.data)
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
}
export default paymemts
