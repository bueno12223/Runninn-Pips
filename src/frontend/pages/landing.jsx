import React from 'react'
import Hero from '../components/layout/hero'
import Description from '../components/layout/descriptions'
import Plans from '../components/layout/plans'
import Locations from '../components/layout/locations'
import Suscribe from '../components/layout/suscribe'
import Testiomonial from '../components/layout/testimonial'
function landing () {
  return (
    <>
      <Hero />
      <Description />
      <Plans />
      <Locations />
      <Testiomonial />
      <Suscribe />
    </>
  )
}

export default landing
