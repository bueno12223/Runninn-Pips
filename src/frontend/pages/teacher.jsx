import React from 'react'
import Hero from '../components/home/hero'
import EducatorList from '../components/home/EducatorList'
import SuperCardRail from '../components/home/superCardRail'
import Calendario from '../components/home/calendario'
import { connect, useSelector } from 'react-redux'
function teacher (props) {
  const { teacher } = props.match.params
  const { search, videos } = useSelector(state => state)
  return (
    <>
      <Hero />
      <EducatorList teacherID={teacher} />
      {search
        ? <SuperCardRail cardData={search.length ? search : 'error'} />
        : (
          <>
            <Calendario teacherID={teacher} />
            <SuperCardRail cardData={videos[teacher]} />
          </>
          )}

    </>
  )
}

const mapDispatchToProps = state => ({
  videos: state.videos
})
export default connect(mapDispatchToProps, null)(teacher)
