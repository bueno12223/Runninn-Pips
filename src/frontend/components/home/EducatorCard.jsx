import React from 'react'
import { Link } from 'react-router-dom'
function EducatorCard ({ img, teacher }) {
  return (

    <li className='educador-listItem'>
      <Link to={`/home/educador/${teacher}`}>
        <img className='educador-listImg' src={img} alt='Imagen de educador' />
      </Link>
    </li>
  )
}

export default EducatorCard
