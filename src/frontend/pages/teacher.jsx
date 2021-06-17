import React, { useEffect } from 'react'
import CardList from '../components/home/cardList'
import Loader from 'react-loader-spinner'
import { getTeacher } from '../actions'
import { connect } from 'react-redux'
function teacher (props) {
  const { id } = props.match.params
  const { getTeacher, videos } = props
  useEffect(() => { getTeacher(id) }, [])
  if (!videos) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: 60 + 'vh'
      }}
      >
        <Loader
          type='Puff'
          color='#e42421'
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    )
  }
  return (
    <CardList title={id} videos={videos} to='/home' />
  )
}
const mapStateToProps = state => ({
  videos: state.teacher
})
const mapDispatchToProps = {
  getTeacher
}
export default connect(mapStateToProps, mapDispatchToProps)(teacher)
