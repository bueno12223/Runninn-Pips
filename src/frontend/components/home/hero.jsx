import React from 'react'
import user from '../../assets/images/user.png'
import Search from '../../assets/icons/search.svg'
import './styles/hero.scss'
import { connect } from 'react-redux'
function hero ({ userName }) {
  return (
    <article className='hero'>
      <div className='hero-data'>
        <h1 className='hero-data__hello'>Hola {userName} &#128075;!!!</h1>
        <img className='hero-data__avatar' src={user} alt='user avatar' />
      </div>
      <div className='hero-search'>
        <img src={Search} alt='' />
        <input className='hero-search__input' type='text' placeholder='¿Qué estas buscando?' />
      </div>
    </article>
  )
}
const mapStateToProps = (state) => {
  return {
    userName: state.userName
  }
}
export default connect(mapStateToProps, null)(hero)
