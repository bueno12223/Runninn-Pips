import React from 'react'
import EducadorCard from './EducatorCard'
import useGetTeacherData from '../../hooks/useGetTeacherData'
import './styles/educatorList.scss'
function EducatorList () {
  const educadors = useGetTeacherData()
  return (
    <ul className='educador-list'>
      {educadors.map(({ img, name }) => (
        <EducadorCard key={name} img={img} />

      ))}
    </ul>
  )
}

export default EducatorList
