import React from 'react'
import shortid from 'shortid'
import './styles/skrill.scss'
function skrill ({ totalCharges }) {
  return (
    <form action='https://pay.skrill.com' method='post' target='_blank' className='skrill'>
      <input type='hidden' name='pay_to_email' value='demoqco@sun-fish.com' />
      <input type='hidden' name='status_url' value='https://running-trader.herokuapp.com/payments' />
      <input type='hidden' name='status_url2' value='berriojesus122@gmail.com' />
      <input type='hidden' name='recipient_description' value='Acceso a la plataforma de Runnig Traders' />
      <input type='hidden' name='transaction_id' value={shortid.generate()} />
      <input type='hidden' name='return_url' value='http://localhost:3000/home' />
      <input type='hidden' name='language' value='ES' />
      <input type='hidden' name='amount' value={totalCharges.toFixed(2)} />
      <input type='hidden' name='currency' value='USD' />
      <input type='hidden' name='detail1_description' value={`Acceso a la plataforma de Runnig Traders, plan de ${totalCharges}`} />
      <input type='submit' value='Pagar con Skrill' className='skrill-button' />
    </form>
  )
}
export default skrill
