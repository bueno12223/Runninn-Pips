/* eslint-disable camelcase */
import React from 'react'
import { Link } from 'react-router-dom'
import def from '../../assets/images/home/def.jpg'
import TeacherHero from './TeacherHero'

function superCard ({ otherKey, profesor_id, duration, title, idx }) {
  return (
    <Link to={`/${profesor_id}/${otherKey}/#video`}>
      <article className='superCard'>
        <TeacherHero {...{ profesor_id, duration, title }} />
        <img className='superCard-img' src={def} alt='' />
      </article>
    </Link>
  )
}

export default superCard
