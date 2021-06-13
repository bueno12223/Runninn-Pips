import React from 'react'
import NotFoundImg from '../assets/icons/404'
function notFound () {
  return (
    <>
      <NotFoundImg className='notFound-img' />
      <h1 className='notFound-title'>404 no encontrado</h1>
    </>
  )
}

export default notFound
