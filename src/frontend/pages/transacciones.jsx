import React from 'react'
import { connect } from 'react-redux'
import TransCard from '../components/home/TransCard'
function transacciones ({ transactions }) {
  if (transactions === []) {
    return <h1 className='title'>Aun no hay transacciones registradas en tu cuenta</h1>
  }
  return (
    <>
      <h1 className='title'>Transacciones</h1>
      <p className='text mb'>Los pagos de referido tardar de 3 a 5 días</p>
      <ul className='transaccionCard-list'>
        {transactions.map(data => (
          <TransCard key={data._id} {...data} />
        ))}
      </ul>
    </>
  )
}
const mapStateToProps = (state) => ({
  transactions: state.user.transactions
})
export default connect(mapStateToProps, null)(transacciones)
