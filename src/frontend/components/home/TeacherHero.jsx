import React from 'react'
import useGetTeacherData from '../../hooks/useGetTeacherData'

function TeacherHero ({ teacherID, num }) {
  const { name, img, desc } = useGetTeacherData(teacherID)
  return (
    <div className='teacherHero'>
      <img src={img} alt='' className='teacherHero-img' />
      <h3 className='teacherHero-name'>{name}</h3>
      <p className='text'>{num}</p>
      <p className='text'>{desc}</p>
    </div>
  )
}

export default TeacherHero
