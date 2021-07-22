import React from 'react'

function EducatorCard ({ img }) {
  return (

    <li className='educador-listItem'>
      <img className='educador-listImg' src={img} alt='Imagen de educador' />
    </li>
  )
}

export default EducatorCard
