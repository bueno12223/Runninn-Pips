import React from 'react'
import Hero from '../components/layout/hero'
import Description from '../components/layout/descriptions'
import Plans from '../components/layout/plans'
import Teams from '../components/layout/teams'
import Suscribe from '../components/layout/suscribe'
import Testiomonial from '../components/layout/testimonial'
import { useSelector } from 'react-redux'
function landing () {
  const planPrices = useSelector(state => {
    return state.planPrices
  })
  console.log(planPrices)
  return (
    <>
      <Hero />
      <Description />
      <Plans prices={planPrices} />
      <Teams />
      <Testiomonial />
      <Suscribe />
    </>
  )
}

export default landing
