import React from 'react'
import SuperCard from './superCard'
import './styles/superCard.scss'
function superCardRail ({ cardData, title, idx }) {
  if (cardData === 'error') {
    return (<h1 className='title'>No hemos encuentrado el video que buscabas</h1>)
  }
  return (
    <>
      <h2 className='superCard-mainTitle'>{title}</h2>
      <div className='superCard-container'>
        {
              cardData.map((data, idx2) => (
                <SuperCard {...data} key={data.title} idx={title ? idx2 : idx} otherKey={data.key} />
              ))
          }
      </div>
    </>
  )
}

export default superCardRail
