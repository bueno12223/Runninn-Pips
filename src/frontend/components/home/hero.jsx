import React from 'react'
import Search from '../../assets/icons/search.svg'
import './styles/hero.scss'
import { Link } from 'react-router-dom'
import UserIcon from '../../assets/icons/home/user.js'
import { useSelector, useDispatch } from 'react-redux'
function hero () {
  const videos = useSelector(state => state.videos)
  let allVideos = []
  for (const data in videos) {
    allVideos = ([...allVideos, ...videos[data]])
  }
  let result
  const dispatch = useDispatch()
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      result = allVideos.filter((data) => data.title.toLowerCase().includes(e.target.value.toLowerCase()))
      if (result.length === allVideos.length) {
        dispatch({ type: 'REGISTER_DATA', payload: { data: null, name: 'search' } })
      }
      dispatch({ type: 'REGISTER_DATA', payload: { data: result, name: 'search' } })
    }
  }
  const handleChange = (e) => {
    if (!e.target.value) {
      result = null
      return dispatch({ type: 'REGISTER_DATA', payload: { data: result, name: 'search' } })
    }
  }
  return (
    <article className='hero'>
      <div className='hero-search'>
        <img src={Search} alt='' />
        <input onKeyDown={handleKeyDown} onChange={handleChange} className='hero-search__input' type='text' placeholder='¿Qué estas buscando?' />
      </div>
      <Link to='/cuenta'> <UserIcon className='hero-icon' /></Link>
    </article>
  )
}
export default hero
