import React, { useEffect } from 'react'
import CardList from '../components/home/cardList'
import { getTeacher } from '../actions'
function teacher (props) {
  const { id } = props.match.params
  const { getTeacher } = props
  let videos
  useEffect(() => { videos = getTeacher(id) }, [])
  return (
    <CardList tile={id} videos={videos} to='/home' />
  )
}
const mapDispatchToProps = {
  getTeacher
}
export default (null, mapDispatchToProps)(teacher)
