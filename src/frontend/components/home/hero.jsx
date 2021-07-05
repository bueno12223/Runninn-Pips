import React from 'react'
import Search from '../../assets/icons/search.svg'
import { searchVideo } from '../../actions'
import './styles/hero.scss'
import { connect } from 'react-redux'
function hero ({ userName, searchVideo }) {
  return (
    <article className='hero'>
      <div className='hero-data'>
        <h1 className='hero-data__hello'>Hola {userName} &#128075;!!!</h1>
      </div>
      <div className='hero-search'>
        <img src={Search} alt='' />
        <input className='hero-search__input' type='text' placeholder='¿Qué estas buscando?' onChange={(e) => searchVideo(e.target.value)} />
      </div>
    </article>
  )
}
const mapStateToProps = (state) => {
  return {
    userName: state.userName
  }
}
const mapDispatchToProps = {
  searchVideo
}
export default connect(mapStateToProps, mapDispatchToProps)(hero)
