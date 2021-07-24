import React from 'react'
import { connect } from 'react-redux'
import SuperCardRail from './superCardRail'
function selectedTeacher ({ teacherID, videos }) {
  if (teacherID === 'OmarSosa') {
    return (
      <SuperCardRail cardData={videos.OmarSosa} idx={teacherID} />
    )
  }
  if (teacherID === 'NormaQuintero') {
    return (
      <SuperCardRail cardData={videos.NormaQuintero} idx={teacherID} />
    )
  }
  if (teacherID === 'IsmaelOrtega') {
    return (
      <SuperCardRail cardData={videos.IsmaelOrtega} idx={teacherID} />
    )
  }
  if (teacherID === 'JulioOrtiz') {
    return (
      <SuperCardRail cardData={videos.JulioOrtiz} idx={teacherID} />
    )
  }
  if (teacherID === 'JairPowell') {
    return (
      <SuperCardRail cardData={videos.JairPowell} idx={teacherID} />
    )
  }
  if (teacherID === 'OmarSosaFx') {
    return (
      <SuperCardRail cardData={videos.OmarSosaFx} idx={teacherID} />
    )
  }
  if (teacherID === 'CoraliaPinzon') {
    return (
      <SuperCardRail cardData={videos.CoraliaPinzon} idx={teacherID} />
    )
  }
}

const mapStateToProps = state => ({
  videos: state.videos
})
export default connect(mapStateToProps, null)(selectedTeacher)
