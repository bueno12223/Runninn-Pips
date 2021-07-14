import React from 'react'
import './styles/locations.scss'
import mapa from '../../assets/icons/locations.svg'
function locations () {
  return (
    <section className='locations'>
      <h2>Lider en enseñanza en Todo el mundo</h2>
      <img src={mapa} alt='world map' />
    </section>
  )
}

export default locations
