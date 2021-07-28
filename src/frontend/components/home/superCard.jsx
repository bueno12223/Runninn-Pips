/* eslint-disable camelcase */
import React from 'react'
import { Link } from 'react-router-dom'
import TeacherHero from './TeacherHero'
function superCard ({ otherKey, profesor_id, duration, thumbnail, title, idx }) {
  return (
    <Link to={`/${profesor_id}/${otherKey}/#video`}>
      <article className='superCard'>
        <TeacherHero {...{ profesor_id, duration, title }} />
        <img className='superCard-img' src={thumbnail.substring(0, thumbnail.length - 6)} alt='' />
      </article>
    </Link>
  )
}

export default superCard
