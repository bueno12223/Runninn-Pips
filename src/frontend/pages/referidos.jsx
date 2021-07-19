import React from 'react'
import { useSelector } from 'react-redux'
import ReferredTree from '../components/home/referredTree'
function referidos () {
  const userID = useSelector(state => state.user.userID)
  return (
    <div>
      <ReferredTree />
      <p className='text'>Tu link de referidos es: <br /> runningtrader.com/registro?upline={userID}</p>

    </div>
  )
}

export default referidos
