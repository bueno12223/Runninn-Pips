import React from 'react'
import user from '../../assets/images/user.png'
import Search from '../../assets/icons/search.svg'
import './styles/hero.scss'
function hero () {
  return (
    <article className='hero'>
      <div className='hero-data'>
        <h1 className='hero-data__hello'>Hola USUARIO &#128075;!!!</h1>
        <img className='hero-data__avatar' src={user} alt='user avatar' />
      </div>
      <div className='hero-search'>
        <img src={Search} alt='' />
        <input className='hero-search__input' type='text' placeholder='¿Qué estas buscando?' />
      </div>
    </article>
  )
}

export default hero
