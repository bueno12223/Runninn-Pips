import { createOrder } from '../modules/binance'
import axios from 'axios'

const paymemts = (app) => {
  app.post('/payments', async (req, res) => {
    try {
      const { data, headers } = createOrder(req.body)
      res.status(200).header(headers).json({ ...data })
    } catch (e) {
      // console.log(e.response.data)
      // res.sendStatus(e.response.status)
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
