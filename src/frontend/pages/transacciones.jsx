import React from 'react'
import { connect } from 'react-redux'
import TransCard from '../components/home/TransCard'
import { validatePayment, messageHandler } from '../actions'
function transacciones ({ transactions = [], messageHandler, validatePayment }) {
  if (transactions === []) {
    return <h1 className='title'>Aun no hay transacciones registradas en tu cuenta</h1>
  }
  return (
    <>
      <h1 className='title'>Transacciones</h1>
      <p className='text mb'>Los pagos de referido tardan de 3 a 5 días</p>
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
