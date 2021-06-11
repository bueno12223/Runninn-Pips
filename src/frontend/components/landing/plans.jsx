import React from 'react'
import Check from '../../assets/icons/check'
import box from '../../assets/icons/box.svg'
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
      <img src={box} alt='box img' />
      <h3>Plan gratis</h3>
      <ul>
        <li><Check />Trades ilimitados</li>
        <li><Check />Señales gratis</li>
        <li><Check />Acceso a todos</li>
        <li><Check />Entre mas cosas</li>
      </ul>
      <h4>40$ al mes</h4>
      <a href='/'>Seleccionar</a>
    </article>
  )
}

export default plans
