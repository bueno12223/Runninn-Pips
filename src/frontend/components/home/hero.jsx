import React from 'react'
import Search from '../../assets/icons/search.svg'
import { searchVideo } from '../../actions'
import './styles/hero.scss'
import { Link } from 'react-router-dom'
import UserIcon from '../../assets/icons/home/user.js'
import { connect } from 'react-redux'
function hero ({ searchVideo }) {
  return (
    <article className='hero'>
      <div className='hero-search'>
        <img src={Search} alt='' />
        <input className='hero-search__input' type='text' placeholder='¿Qué estas buscando?' onChange={(e) => searchVideo(e.target.value)} />
      </div>
      <Link to='/cuenta'> <UserIcon className='hero-icon' /></Link>
    </article>
  )
}
const mapDispatchToProps = {
  searchVideo
}
export default connect(null, mapDispatchToProps)(hero)
