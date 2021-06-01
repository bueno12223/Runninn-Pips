import React from 'react'
import './styles/card.scss'
import back from '../../assets/images/back.png'
function card ({ title, description, img }) {
  return (
    <article className='card'>
      <img src={back} alt='' className='card-img' />
      <div className=''>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default card
