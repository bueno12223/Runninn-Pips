/* eslint-disable camelcase */
import React from 'react'
import { useSelector } from 'react-redux'
import './styles/teacherHero.scss'
function TeacherHero ({ profesor_id: profesorId, duration, title }) {
  let profesorData = useSelector(state => state.videos)
  profesorData = profesorData.find(({ profesor_id }) => profesor_id == profesorId)
  const { profesor_id: name, photoUrl, desc } = profesorData
  return (
    <div className='teacherHero'>
      <img src={photoUrl} alt='' className='teacherHero-img' />
      <h3 className='teacherHero-name'>{name} <br /><b>{desc}</b></h3>
      <p className='teacherHero-num'>{duration}min</p>
      <p className='teacherHero-btText'>{title}</p>
    </div>
  )
}

export default TeacherHero
