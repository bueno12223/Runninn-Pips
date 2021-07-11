import React from 'react'
import './styles/paymentRail.scss'
const paymentRail = ({ name, Icon, select, setSelected }) => {
  return (
    <li onClick={() => setSelected(name)} className={`payment-railItem ${select === name && 'payment-railItem__select'}`}>
      <Icon className={`payment-railImg ${select === name && 'payment-railImg___select'}`} />
      <p className='payment-railtext'>{name}</p>
    </li>

  )
}
export default paymentRail
