import React, { useState } from 'react'
import CardList from '../components/home/cardList'
import Loader from '../components/general/loader'
import { getTeacher } from '../actions'
import { connect } from 'react-redux'
function teacher (props) {
  const { id } = props.match.params
  const { getTeacher } = props
  const [videos, setVideos] = useState(null)
  getTeacher(id).then(e => setVideos(e)).catch(e => console.log(e))
  if (!videos) {
    return (
      <Loader />
    )
  }
  return (
    <CardList title='regresar' videos={videos} to='/home' />
  )
}

const mapDispatchToProps = {
  getTeacher
}
export default connect(null, mapDispatchToProps)(teacher)
