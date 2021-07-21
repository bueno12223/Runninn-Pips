import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { messageHandler } from '../../actions'
import './styles/displayMessage.scss'
function displayMessage ({ message: { message, success }, className = '', messageHandler }) {
  const location = useLocation()
  // cada vex que la ruta actual cambia, borra el mensaje
  useEffect(() => {
    messageHandler({ message: '' })
  }, [location])
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
const mapDispatchToProps = {
  messageHandler
}
export default connect(mapStateToProps, mapDispatchToProps)(displayMessage)
