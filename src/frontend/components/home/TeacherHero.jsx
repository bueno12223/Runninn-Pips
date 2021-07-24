/* eslint-disable camelcase */
import React from 'react'
import useGetTeacherData from '../../hooks/useGetTeacherData'
import './styles/teacherHero.scss'
function TeacherHero ({ profesor_id, duration, title }) {
  const { name, img, desc } = useGetTeacherData(profesor_id)
  return (
    <div className='teacherHero'>
      <img src={img} alt='' className='teacherHero-img' />
      <h3 className='teacherHero-name'>{name} <br /><b>{desc}</b></h3>
      <p className='teacherHero-num'>{duration}min</p>
      <p className='teacherHero-btText'>{title}</p>
    </div>
  )
}

export default TeacherHero
