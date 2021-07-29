import React, { useState } from 'react'
import { connect } from 'react-redux'
import TransCard from '../components/home/TransCard'
import DisplayMesage from '../components/global/displayMessage'
import { validatePayment, messageHandler } from '../actions'
function transacciones ({ transactions = [], messageHandler, validatePayment }) {
  if (transactions === []) {
    return <h1 className='title'>Aun no hay transacciones registradas en tu cuenta</h1>
  }
  const [id, setId] = useState(null)
  const handleSubmit = () => {
    messageHandler({ message: 'Pago realizado correctamente, vuelva a iniciar sesión', success: true })
    validatePayment({ id })
  }
  return (
    <>
      <h1 className='title'>Transacciones</h1>
      <p className='text mb'>Los pagos de referido tardan de 3 a 5 días</p>
      <p className='text'>Validar transacción manualmente</p>
      <div className='transaccionValidate mb'>
        <button className='transaccionValidate-button' onClick={handleSubmit}>Validar pago</button>
        <input className='transaccionValidate-input' type='text' name='id' onChange={(e) => setId(e.target.value)} />
        <DisplayMesage />
      </div>
      <ul className='transaccionCard-list'>
        {transactions.map(data => (
          <TransCard key={data._id} {...data} />
        ))}
      </ul>
    </>
  )
}
const mapStateToProps = (state) => ({
  transactions: state.user ? state.user.transactions : []
})
const mapDispatchToProps = { validatePayment, messageHandler }
export default connect(mapStateToProps, mapDispatchToProps)(transacciones)
