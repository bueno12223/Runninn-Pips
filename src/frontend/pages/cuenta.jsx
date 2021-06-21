import React from 'react'
import SetAccount from '../components/home/setAccount'
import ReferredTree from '../components/home/referredTree'
import { setStudentAccont, messageHandler } from '../actions'
import { connect } from 'react-redux'

function cuenta (props) {
  // datos de la cuenta
  const { ammount, userID, userName, email, upline, downline } = props
  // actions
  const { setStudentAccont, messageHandler } = props
  // mensaje
  const { message } = props
  return (
    <article>
      <ReferredTree ammount={ammount} upline={upline} downline={downline} />
      <SetAccount {...{ userID, userName, email, message, setStudentAccont, messageHandler }} />
    </article>
  )
}
const mapStateToProps = state => ({
  ...state,
  videos: undefined
})
const mapDispatchToProps = {
  setStudentAccont,
  messageHandler
}
export default connect(mapStateToProps, mapDispatchToProps)(cuenta)
