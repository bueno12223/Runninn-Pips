import axios from 'axios'

export const getTeacher = (payload, redirectUrl) => async (dispatch) => {
  try {
    const teacher = await axios({
      method: 'GET',
      url: `/video/teacher/${payload}`
    })
    return teacher.data.teacher
  } catch (e) {
    console.log(e)
  }
}
export const getVideo = (payload, redirectUrl) => async (dispatch) => {
  try {
    const video = await axios({
      method: 'GET',
      url: `/video/${payload}`
    })
    return video.data.data
  } catch (e) {
    console.log(e)
  }
}
