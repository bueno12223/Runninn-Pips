import React from 'react'
import { FiCheck } from 'react-icons/fi'
import './styles/plans.scss'
function plans () {
  return (
    <section className='plans'>
      <Card />
      <Card />
      <Card />
    </section>
  )
}
function Card () {
  return (
    <article className='plans-card'>
      <img src='https://laslesvpn-landing.netlify.app/images/standard-plan.svg' alt='box img' />
      <h3>Plan gratis</h3>
      <ul>
        <li><FiCheck />Trades ilimitados</li>
        <li><FiCheck />Señales gratis</li>
        <li><FiCheck />Acceso a todos</li>
        <li><FiCheck />Entre mas cosas</li>
      </ul>
      <h4>40$ al mes</h4>
      <a href='/'>Seleccionar</a>
    </article>
  )
}

export default plans
