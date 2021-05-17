import React from 'react'
import { IoMdCheckmarkCircle } from 'react-icons/io'
import './styles/description.scss'
function descriptions () {
  return (
    <section className='description'>
      <img src='https://laslesvpn-landing.netlify.app/images/illustration-2.svg' alt='' />
      <h2><b>Te damos herramientas para que puedas usar</b></h2>
      <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
      <ul className='description-list'>
        <li><IoMdCheckmarkCircle /> Enseñanza en todo lugar</li>
        <li><IoMdCheckmarkCircle /> Sin tiempos limites</li>
        <li><IoMdCheckmarkCircle /> La información mas actualizada</li>
        <li><IoMdCheckmarkCircle /> Con mentorías personales</li>
      </ul>
    </section>
  )
}

export default descriptions
