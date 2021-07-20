import React from 'react'
import { useSelector } from 'react-redux'
import Hero from '../components/home/hero'
import SuperCardRail from '../components/home/superCardRail'
import './styles/home.scss'
function home () {
  const videos = useSelector(state => state.videos)
  const cardEducator = [
    { img: null, title: 'trading institucional', teacherID: 'Omar Sosa', to: '/home/omar', text: 'Tendencias, estructura de mercado', num: '40min' },
    { img: null, title: 'trading institucional 1', teacherID: 'Omar Sosa', to: '/home/jair', text: 'Tendencias, estructura de mercado', num: '40min' },
    { img: null, title: 'trading institucional 2', teacherID: 'Omar Sosa', to: '/home/omarjr', text: 'Tendencias, estructura de mercado', num: '40min' },
    { img: null, title: 'trading institucional 3', to: '/home/omarjr', teacherID: 'Omar Sosa', text: 'Tendencias, estructura de mercado', num: '40min' }
  ]
  if (videos == null) {
    return (
      <>
        <h1 className='title'>Tu cuenta no esta activa</h1>
        <p className='text'>Por favor dirigete a pagos para volver a acceder a todos los videos</p>
      </>
    )
  }
  return (
    <>
      <Hero />
      <SuperCardRail cardData={cardEducator} mainTitle='Educadores' />
    </>
  )
}
export default home
