import React from 'react'
import Search from '../../assets/icons/search.svg'
import './styles/hero.scss'
import { Link } from 'react-router-dom'
import UserIcon from '../../assets/icons/home/user.js'
import { useDispatch } from 'react-redux'
function hero ({ profesorsVideos }) {
  const allVideos =
  profesorsVideos
    ? profesorsVideos.reduce((acc = [], profesorsVideo) => {
        acc = [...acc, ...profesorsVideo.videos]
        return acc
      }, [])
    : []
  let result
  const dispatch = useDispatch()
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const query = e.target.value
      result = allVideos.filter((videoData) => videoData.title.toLowerCase().includes(query.toLowerCase()))
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
