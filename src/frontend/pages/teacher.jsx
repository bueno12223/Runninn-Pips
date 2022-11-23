import React from 'react'
import Hero from '../components/home/hero'
import EducatorList from '../components/home/EducatorList'
import SuperCardRail from '../components/home/superCardRail'
import Calendario from '../components/home/calendario'
import { connect, useSelector } from 'react-redux'
function teacher (props) {
  const { teacher } = props.match.params
  const { search } = useSelector(state => state)
  const profesorVideos = props.profesorsVideos.find(profesorVideos => profesorVideos.profesor_id === teacher)
  console.log(profesorVideos)
  return (
    <>
      <Hero profesorsVideos={props.profesorsVideos} />
      <EducatorList profesorsVideos={props.profesorsVideos} />
      {search
        ? <SuperCardRail cardData={search.length > 0 ? search : 'error'} />
        : (
          <>
            <Calendario teacherCalendar={profesorVideos.calendar} />
            <SuperCardRail cardData={profesorVideos.videos} />
          </>
          )}

    </>
  )
}

const mapDispatchToProps = state => ({
  profesorsVideos: state.videos
})
export default connect(mapDispatchToProps, null)(teacher)
