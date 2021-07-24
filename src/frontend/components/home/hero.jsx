import React from 'react'
import Search from '../../assets/icons/search.svg'
import { searchVideo } from '../../actions'
import './styles/hero.scss'
import { Link } from 'react-router-dom'
import UserIcon from '../../assets/icons/home/user.js'
import { useSelector, useDispatch } from 'react-redux'
function hero () {
  const videos = useSelector(state => state.videos)
  const dispatch = useDispatch()
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      let allVideos = []
      videos.forEach((data) => {
        allVideos = ([...allVideos, ...data])
      })
      const result = allVideos.filter((data) => data.title.toLowerCase().includes(e.target.value.toLowerCase()))
      dispatch({ type: 'REGISTER_DATA', payload: { data: result, name: 'search' } })
    }
  }
  return (
    <article className='hero'>
      <div className='hero-search'>
        <img src={Search} alt='' />
        <input onKeyDown={handleKeyDown} className='hero-search__input' type='text' placeholder='¿Qué estas buscando?' onChange={(e) => searchVideo(e.target.value)} />
      </div>
      <Link to='/cuenta'> <UserIcon className='hero-icon' /></Link>
    </article>
  )
}
export default hero
