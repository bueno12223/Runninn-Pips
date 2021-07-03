import React from 'react'
import { connect } from 'react-redux'
import { uploadTransacction } from '../../actions'
import './styles/transferenicia.scss'
function transferencia ({ uploadTransacction, userID, message: { message, success } }) {
  const handleFileInput = async (file) => {
    uploadTransacction({ img: file, userID })
    window.localStorage.removeItem('userID')
  }
  const messageClassname = () => {
    if (message) {
      if (success) {
        return 'login-message__success'
      }
      return 'login-message__alert'
    }
    return ''
  }
  const copyToClipboard = (text) => {
    const textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
  return (
    <section className='transferencia' id='transferencia'>
      <h2 className='transferencia-title'>Transferencia</h2>
      <div className='transferencia-info'>
        <button className='transferencia-info__copy' onClick={() => copyToClipboard('0404040440404')}>Copiar</button>
        <h3>banco general, ahorro</h3>
        <p>0404040440404</p>
        <p>Running Trader</p>
      </div>
      <p className='transferencia-text'>Sube una captura de la transferencia para validarla, el proceso puede tomar de 1h hasta 2 días.</p>
      <input className='transferencia-input' type='file' name='image' id='file' onChange={(e) => handleFileInput(e.target.files[0])} />
      <label for='file' className='transferencia-label'>Seleccionar un archivo</label>
      <span className={`login-message transferencia-message  ${messageClassname()}`}>{message}</span>
    </section>
  )
}
const mapStateToProps = {
  uploadTransacction
}

const mapDispachToProps = state => {
  return {
    message: state.message
  }
}
export default connect(mapDispachToProps, mapStateToProps)(transferencia)
