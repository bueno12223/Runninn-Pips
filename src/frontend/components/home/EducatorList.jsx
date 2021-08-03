import React from 'react'
import EducadorCard from './EducatorCard'
import useGetTeacherData from '../../hooks/useGetTeacherData'
import './styles/educatorList.scss'
function EducatorList ({ teacher }) {
  const educadors = useGetTeacherData(null)
  return (
    <ul className='educador-list'>
      {educadors.map(({ img, name }) => (
        <EducadorCard key={name} img={img} teacher={name} />

      ))}
    </ul>
  )
}

export default EducatorList
