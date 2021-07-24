import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Hero from '../components/home/hero'
import EducatorList from '../components/home/EducatorList'
import SuperCardRail from '../components/home/superCardRail'
import './styles/home.scss'
function home () {
  const ranked = useSelector(state => state.ranked)
  console.log(ranked)
  const videos = useSelector(state => state.videos)
  const search = useSelector(state => state.search)
  if (videos == null) {
    return (
      <>
        <h1 className='title'>Tu cuenta no esta activa</h1>
        <p className='text'>Por favor dirigete a  <Link to='/pagos'> pagos</Link> para volver a acceder a todos los videos</p>
      </>
    )
  }
  return (
    <>
      <Hero />
      <EducatorList />
      {search
        ? <SuperCardRail cardData={search.length ? search : 'error'} />
        : <SuperCardRail cardData={ranked} title='Videos mas vistos' />}
    </>
  )
}
export default home
