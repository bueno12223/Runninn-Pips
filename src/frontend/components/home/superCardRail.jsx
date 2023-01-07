import React from 'react'
import SuperCard from './superCard'
import './styles/superCard.scss'
function superCardRail ({ cardData, title = '' }) {
  if (cardData === 'error') {
    return (<h1 className='title'>No hemos encuentrado el video que buscabas</h1>)
  }
  return (
    <>
      <h2 className='superCard-mainTitle'>{title}</h2>
      <div className='superCard-container'>
        {
              cardData.map((data) => (
                <SuperCard {...data} key={data.title} idx={data._id} otherKey={data.key} />
              ))
          }
      </div>
    </>
  )
}

export default superCardRail
