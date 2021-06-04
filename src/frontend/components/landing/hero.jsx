import React from 'react'
import { Link } from 'react-router-dom'
import HeroIcon from '../../assets/icons/new'
import './styles/hero.scss'
function hero () {
  return (
    <section className='lhero'>
      <HeroIcon className='lhero-img' />
      <h1 className='lhero-title'>Todo es mas fácil con <b>Runnig Traders</b></h1>
      <p className='lhero-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis doloremque excepturi nisi quidem qui autem? Cupiditate optio hic, laborum adipisci minima et inventore beatae tempora qui animi deserunt ipsa expedita!</p>
      <Link className='lhero-button' to='registro'>Empezar</Link>
    </section>
  )
}

export default hero
