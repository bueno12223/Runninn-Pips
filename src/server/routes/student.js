import axios from 'axios'

const studentRoutes = (app) => {
  app.post('/login', async (req, res, next) => {
    const { userID, password } = req.body
    try {
      const result = await axios.post({
        url: `${process.env.API_URL}/user/log-in`,
        query: `mutation {
          loginStudent(userID: "jesusA12", password: "1234"){
            user{
              _id
            }
          }
        }`,
        variables: { userID, password }
      })
      console.log(result)
    } catch (e) {
      console.log(e)
      next(e)
    }
  })
}
export default studentRoutes
