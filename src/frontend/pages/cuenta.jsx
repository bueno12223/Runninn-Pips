import React from 'react'
import SetAccount from '../components/home/setAccount'
import { setStudentAccont, messageHandler } from '../actions'
import { connect } from 'react-redux'

function cuenta (props) {
  // datos de la cuenta
  const { userID, userName, email } = props
  // actions
  const { setStudentAccont, messageHandler } = props
  return (
    <article>
      <SetAccount {...{ userID, userName, email, setStudentAccont, messageHandler }} />
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
