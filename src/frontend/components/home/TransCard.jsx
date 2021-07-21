/* eslint-disable camelcase */
import React from 'react'
import './styles/transaccionCard.scss'
function TransCard ({ start_date, end_date, payment_type, amount, description, mb_transaccion_id, _id, status }) {
  const setStatusClass = () => {
    switch (status) {
      case 'completado':
        return 'transaccionCard-circle__complete'
      case 'pendiente':
        return 'transaccionCard-circle__wating'
      case 'fallido':
        return 'transaccionCard-circle__fail'

      default:
        break
    }
  }
  return (
    <div className='transaccionCard'>
      <h3 className='transaccionCard-title'>{description}</h3>
      <p>Tipo de pago: {payment_type}</p>
      <p>Fecha del pago: {start_date} <br /> {end_date}</p>
      <p>Id de transacción: {mb_transaccion_id || _id}</p>
      <p>cantidad: {amount} USD</p>
      <div className='transaccionCard__whitCircle'><p>Estado: {status}</p> <span className={`transaccionCard-circle ${setStatusClass()}`} /></div>
    </div>
  )
}

export default TransCard
