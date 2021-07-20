import React from 'react'
import useGetTeacherData from '../../hooks/useGetTeacherData'
import './styles/teacherHero.scss'
function TeacherHero ({ teacherID, num, text }) {
  const { name, img, desc } = useGetTeacherData(teacherID)
  return (
    <div className='teacherHero'>
      <img src={img} alt='' className='teacherHero-img' />
      <h3 className='teacherHero-name'>{name} <br /><b>{desc}</b></h3>
      <p className='teacherHero-num'>{num}</p>
      <p className='teacherHero-btText'>{text}</p>
    </div>
  )
}

export default TeacherHero
