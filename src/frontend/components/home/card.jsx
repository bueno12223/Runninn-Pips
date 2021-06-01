import React from 'react'
import { Link } from 'react-router-dom'
import './styles/card.scss'
import back from '../../assets/images/back.png'
function card ({ title, description, img }) {
  return (
    <Link to={`/${title}`}>
      <article className='card' onClick=''>
        <img src={back} alt='' className='card-img' />
        <div className='card-description'>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </article>
    </Link>
  )
}

export default card
