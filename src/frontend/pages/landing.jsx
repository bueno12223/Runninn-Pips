import React from 'react'
import Header from '../components/landing/header'
import Hero from '../components/landing/hero'
import Description from '../components/landing/descriptions'
import Plans from '../components/landing/plans'
import Locations from '../components/landing/locations'
function landing () {
  return (
    <>
      <Header />
      <Hero />
      <Description />
      <Plans />
      <Locations />
    </>
  )
}

export default landing
