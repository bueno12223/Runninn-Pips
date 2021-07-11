import React from 'react'
import useClickboard from '../../hooks/useClickboard'

function countyTransfer ({ countrySelect: { countyTransfer } }) {
  const pleaseCopy = useClickboard()
  const TransferData = [
    { account: '0401988079729', name: 'Banco General, ahorro' },
    { account: '0401988079729', name: 'Payoneer' },
    { account: '0401988079729', name: 'Payoneer' },
    { account: '0401988079729', name: 'Payoneer' }
  ]
  return (
    <div className='transferencia-info'>
      <button className='transferencia-info__copy' name={TransferData[countyTransfer].account} onClick={pleaseCopy}>Copiar</button>
      <h3>{TransferData[countyTransfer].name}</h3>
      <p>{TransferData[countyTransfer].account}</p>
      <p>Running Trader</p>
    </div>
  )
}

export default countyTransfer
