import React from 'react'
import { connect } from 'react-redux'
import CardList from '../components/home/cardList'
import Hero from '../components/home/hero'

function home ({ videos, search }) {
  const { omarSosa, OmarSosaFx, JairPower } = videos
  console.log(search)
  return (
    <>
      <Hero />
      <CardList title='Omar Sosa' to='/teacher/OmarSosa' videos={omarSosa} />
      <CardList title='Jair Powel' to='/teacher/JairPower' videos={JairPower} />
      <CardList title='Omar Sosa FX' to='/teacher/OmarSosaFx' videos={OmarSosaFx} />
    </>
  )
}
const mapStateToProps = state => {
  return {
    videos: state.videos,
    search: state.search || []
  }
}
export default connect(mapStateToProps, null)(home)
