import React from 'react'
function displayMessage (className, { message, success }) {
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
    <span className={`message-default ${className} ${messageClassname()}`}>{message.message}</span>
  )
}

export default displayMessage
