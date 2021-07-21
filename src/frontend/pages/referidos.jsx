import React from 'react'
import { useSelector } from 'react-redux'
import ReferredTree from '../components/home/referredTree'
function referidos () {
  const userID = useSelector(state => state.user.userID)
  const link = `runningtrader.com/registro?upline=${userID}`
  return (
    <div>
      <ReferredTree />
      <p className='text'><a href={link}>{link}</a></p>

    </div>
  )
}

export default referidos
