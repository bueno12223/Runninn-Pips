import React from 'react'
import './styles/locations.scss'
import mapa from '../../assets/icons/locations.svg'
function locations () {
  return (
    <section className='locations'>
      <h2>Lider en enseñanza en latinoamerica</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta enim porro ad fugiat voluptatibus</p>
      <img src={mapa} alt='world map' />
    </section>
  )
}

export default locations
