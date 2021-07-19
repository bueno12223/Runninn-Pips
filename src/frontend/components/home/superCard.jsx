import React from 'react'
import { Link } from 'react-router-dom'
import def from '../../assets/images/home/default.jpg'
import TeacherHero from './TeacherHero'
function superCard ({ img, title, to, teacherID, num }) {
  return (
    <article className='superCard'>
      <TeacherHero {...{ teacherID, num }} />
      <img className='superCard-img' src={img || def} alt='' />
      <p className='superCard-text'>{title}</p>
      <Link className='superCard--button' to={to} />
    </article>
  )
}

export default superCard
