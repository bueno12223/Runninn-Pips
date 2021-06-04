import React from 'react'
import Check from '../../assets/icons/check'
import ToolsImg from '../../assets/icons/tools'
import './styles/description.scss'
function descriptions () {
  return (
    <section className='description'>
      <ToolsImg className='description-img' />
      <h2><b>Te damos herramientas para que puedas usar</b></h2>
      <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
      <ul className='description-list'>
        <li><Check /> Enseñanza en todo lugar</li>
        <li><Check /> Sin tiempos limites</li>
        <li><Check /> La información mas actualizada</li>
        <li><Check /> Con mentorías personales</li>
      </ul>
    </section>
  )
}

export default descriptions
