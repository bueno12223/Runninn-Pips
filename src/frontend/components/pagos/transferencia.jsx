import React from 'react'
import { connect } from 'react-redux'
import { uploadTransacction } from '../../actions'
function transferencia ({ uploadTransacction, userID, userName }) {
  const handleFileInput = async (file) => {
    uploadTransacction({ img: file, userID, userName })
  }
  return (
    <section>
      <h2>Transferencia</h2>
      <div className=''>
        <h4>banco general, ahorro</h4>
        <p>00000000000000000000</p>
        <p>Running Trader</p>
      </div>
      <input type='file' name='image' id='' onChange={(e) => handleFileInput(e.target.files[0])} />
    </section>
  )
}
const mapStateToProps = {
  uploadTransacction
}
const mapDispachToProps = state => {
  return {
    userID: state.userID,
    userName: state.userName
  }
}
export default connect(mapDispachToProps, mapStateToProps)(transferencia)
