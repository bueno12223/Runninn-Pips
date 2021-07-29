import React from 'react'
import { Link } from 'react-router-dom'
import HeroIcon from '../../assets/icons/layout/trader.svg'
import './styles/hero.scss'
function hero () {
  return (
    <section className='lhero'>
      <div className='lhero-data'>
        <h1 className='lhero-dataTitle'>Todo es mas fácil con <b>Running Traders</b></h1>
        <p className='text'>Te enseñamos a través de cursos o sesiones en vivo las estrategias de inversión mas efectivas en el mercado de Forex, bolsa de valores, criptomonedas o índices. Genera una nueva fuente de ingresos, aprende la información que te dará mas libertad.</p>
        <Link className='lhero-button' to='/registro'>Registarme ahora</Link>
      </div>
      <img src={HeroIcon} alt=' imagen de trader profesiona' className='lhero-img' />
    </section>
  )
}

export default hero
