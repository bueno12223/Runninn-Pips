import React from 'react'
import NotFoundImg from '../assets/icons/404'
function notFound () {
  return (
    <article style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 className='notFound-title'>404 no encontrado</h1>
      <NotFoundImg style={{ with: 100 + '%' }} />
    </article>
  )
}

export default notFound
