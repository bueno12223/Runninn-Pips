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
  app.post('/transaction/validate', async (req, res) => {
    const { url } = req.body
    const { 'connect.sid': sesionID } = req.cookies
    try {
      const result = await axios({
        method: 'GET',
        url: url,
        // eslint-disable-next-line quote-props
        headers: { 'Cookie': `connect.sid=${sesionID}` },
        withCredentials: true
      })
      res.status(201).json({ data: result.data })
    } catch (e) {
    }
  })
  app.post('/transaction/all', async (req, res) => {
    const { 'connect.sid': sesionID, id } = req.cookies
    try {
      const result = await axios({
        method: 'POST',
        url: `${process.env.API_URL}/transaction/all`,
        data: { id },
        // eslint-disable-next-line quote-props
        headers: { 'Cookie': `connect.sid=${sesionID}` },
        withCredentials: true
      })
      res.status(201).json({ data: result.data })
    } catch (e) {
      res.status(e.response.status).json(e.response.data)
    }
  })
}
export default transacctions
