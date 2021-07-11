import React from 'react'
import { Link } from 'react-router-dom'
import './styles/suscribe.scss'
function suscribe () {
  return (
    <>
      <section className='suscribe'>
        <Link className='lhero-button' to='/registro'>Registarme ahora!!</Link>
        <h2>¿Aún tienes duda?</h2>
        <p>LLena estos datos y te contactaremos!</p>
        <input type='email' placeholder='email' />
        <input type='text' placeholder='nombre' />
        <input type='number' placeholder='numero de contacto' />
        <a href='/'>Suscribirse</a>
      </section>
    </>
  )
}

export default suscribe
