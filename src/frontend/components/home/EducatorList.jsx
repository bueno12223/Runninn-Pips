import React from 'react'
import EducadorCard from './EducatorCard'
import './styles/educatorList.scss'
function EducatorList ({ profesors }) {
  return (
    <ul className='educador-list'>
      {profesors.map(({ photoUrl, id }) => (
        <EducadorCard key={id} img={photoUrl} teacher={id} />
      ))}
    </ul>
  )
}

export default EducatorList
