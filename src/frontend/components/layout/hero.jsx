import React from 'react'
import { Link } from 'react-router-dom'
import HeroIcon from '../../assets/icons/new'
import './styles/hero.scss'
function hero () {
  return (
    <section className='lhero'>
      <HeroIcon className='lhero-img' />
      <h1 className='lhero-title'>Todo es mas fácil con <b>Running Traders</b></h1>
      <p className='lhero-text'>Te enseñamos a travez de cursos o sesiones en vivo las estrategias de inversión mas efectivas en el mercado de Forex, bolsa de valores, criptomonedas o índices. Genera una nueva fuente de ingresos, aprende la información que te dará mas libertad.</p>
      <Link className='lhero-button' to='/registro'>Registarme ahora!!</Link>
    </section>
  )
}

export default hero
