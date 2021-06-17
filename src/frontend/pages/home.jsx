import React from 'react'
import { connect } from 'react-redux'
import CardList from '../components/home/cardList'
import Hero from '../components/home/hero'

function home ({ videos }) {
  const { omarSosa, OmarSosaFx, JairPower } = videos
  return (
    <>
      <Hero />
      <CardList title='Omar Sosa' to='OmarSosa' videos={omarSosa} />
      <CardList title='Jair Powel' to='Jair Powel' videos={JairPower} />
      <CardList title='Omar Sosa FX' to='OmarSosaFx' videos={OmarSosaFx} />
    </>
  )
}
const mapStateToProps = state => {
  return { videos: state.videos }
}
export default connect(mapStateToProps, null)(home)
