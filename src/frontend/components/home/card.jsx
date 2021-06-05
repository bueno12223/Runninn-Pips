import React from 'react'
import { Link } from 'react-router-dom'
import './styles/card.scss'
import back from '../../assets/images/back.png'
function card ({ title, description, time }) {
  return (
    <Link to={`/home/${title}`}>
      <article className='card' onClick=''>
        <img src={back} alt='' className='card-img' />
        <div className='card-description'>
          <h2 className='card-description__title'>{title}</h2>
          <p className='card-description__time'>{time}</p>
          <p className='card-description__text'>{description}</p>
        </div>
      </article>
    </Link>
  )
}

export default card
