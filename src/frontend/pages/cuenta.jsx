import React from 'react'
import SetAccount from '../components/home/setAccount'
import ReferredTree from '../components/home/referredTree'
import { setStudentAccont } from '../actions'
import { connect } from 'react-redux'

function cuenta ({ ammount, userID, userName, email, message, upline, downline }) {
  return (
    <article>
      <ReferredTree ammount={ammount} upline={upline} downline={downline} />
      <SetAccount {...{ userID, userName, email, message, setStudentAccont }} />
    </article>
  )
}
const mapStateToProps = state => ({ ...state, videos: undefined })
export default connect(mapStateToProps, null)(cuenta)
