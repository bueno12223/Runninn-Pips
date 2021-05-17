import React from 'react'
import './styles/suscribe.scss'
function suscribe () {
  return (
    <section className='suscribe'>
      <h2>Ingresa tu datos y te contactaremos</h2>
      <p>Suscribete para obtener la última información</p>
      <input type='email' placeholder='email' />
      <input type='text' placeholder='nombre' />
      <input type='number' placeholder='numero de contacto' />
      <a href='/'>Suscribirse</a>
    </section>
  )
}

export default suscribe
