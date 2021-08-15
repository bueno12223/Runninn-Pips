import axios from 'axios'
const transacctions = (app) => {
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
      res.sendStatus(400)
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
export default transacctions
