import React from 'react'
import { connect } from 'react-redux'
import './styles/displayMessage.scss'
function displayMessage ({ message: { message, success }, className = '' }) {
  // decide si el class del mensaje si fue exitosio o no
  function messageClassname () {
    if (message) {
      if (success) {
        return 'message-default__success'
      }
      return 'message-default__alert'
    }
    return ''
  }
  // default message tiene el css para que no se vea, className es si se quiere modificar algo extra
  return (
    <span className={`message-default ${className} ${messageClassname()}`}>{message}</span>
  )
}
const mapStateToProps = state => {
  return {
    message: state.message
  }
}
export default connect(mapStateToProps, null)(displayMessage)
