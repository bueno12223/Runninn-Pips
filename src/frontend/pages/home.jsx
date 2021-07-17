import React from 'react'
import { useSelector } from 'react-redux'
import Hero from '../components/home/hero'

function home () {
  const videos = useSelector(state => state.videos)
  console.log(videos)
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
    </>
  )
}
export default home
