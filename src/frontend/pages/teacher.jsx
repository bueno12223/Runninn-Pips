import React from 'react'
import Hero from '../components/home/hero'
import EducatorList from '../components/home/EducatorList'
import SelectedTeacher from '../components/home/selectedTeacher'
import SuperCardRail from '../components/home/superCardRail'
import { connect, useSelector } from 'react-redux'
function teacher (props) {
  const { teacher } = props.match.params
  const search = useSelector(state => state.search)
  return (
    <>
      <Hero />
      <EducatorList teacher={teacher} />
      {search
        ? <SuperCardRail cardData={search.length ? search : 'error'} />
        : <SelectedTeacher teacherID={teacher} />}

    </>
  )
}

const mapDispatchToProps = state => ({
  videos: state.videos
})
export default connect(mapDispatchToProps, null)(teacher)
