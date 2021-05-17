import React from 'react'
import Header from '../components/landing/header'
import Hero from '../components/landing/hero'
import Description from '../components/landing/descriptions'
import Plans from '../components/landing/plans'
import Locations from '../components/landing/locations'
import Suscribe from '../components/landing/suscribe'
import Testiomonial from '../components/landing/testimonial'
function landing () {
  return (
    <>
      <Header />
      <Hero />
      <Description />
      <Plans />
      <Locations />
      <Suscribe />
      <Testiomonial />
    </>
  )
}

export default landing
