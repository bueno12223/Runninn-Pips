import React from 'react'
import def from '../../assets/images/home/default.jpg'
import TeacherHero from './TeacherHero'
function superCard ({ img, text, to, teacherID, num }) {
  return (
    <article className='superCard'>
      <TeacherHero {...{ teacherID, num, text }} />
      <img className='superCard-img' src={img || def} alt='' />
    </article>
  )
}

export default superCard
