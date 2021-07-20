import React from 'react'
import SuperCard from './superCard'
import './styles/superCard.scss'
function superCardRail ({ cardData }) {
  return (
    <>
      <h2 className='superCard-mainTitle'>Cursos mas vistos</h2>
      <div className='superCard-container'>
        {
              cardData.map((data) => (
                <SuperCard {...data} key={data.title} />
              ))
          }
      </div>
    </>
  )
}

export default superCardRail
