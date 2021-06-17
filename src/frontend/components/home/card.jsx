import React from 'react'
import { Link } from 'react-router-dom'
import './styles/card.scss'
function card (props) {
  const { title, duration, keyID, thumbnail } = props
  return (
    <Link to={`/home/${keyID}`}>
      <article className='card' onClick=''>
        <img src={thumbnail} alt='' className='card-img' />
        <div className='card-description'>
          <h2 className='card-description__title'>{title}</h2>
          <p className='card-description__time'>{duration}min</p>
        </div>
      </article>
    </Link>
  )
}

export default card
