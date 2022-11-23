import React from 'react'
import EducadorCard from './EducatorCard'
import './styles/educatorList.scss'
function EducatorList ({ profesorsVideos }) {
  return (
    <ul className='educador-list'>
      {profesorsVideos.map(({ photoUrl, profesor_id: profesorId }) => (
        <EducadorCard key={profesorId} img={photoUrl} teacher={profesorId} />
      ))}
    </ul>
  )
}

export default EducatorList
