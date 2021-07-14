import React, { useState } from 'react'
import { connect } from 'react-redux'
import PaymentRail from './paymentRail'
import Card from '../../assets/icons/cart/cart'
import Bank from '../../assets/icons/cart/bank'
import SelectedPayment from './selectedPayment'

export const payments = ({ setAditionals }) => {
  const [select, setSelected] = useState('tarjeta')
  const handleSelected = (name) => {
    setSelected(name)
    if (name === 'banco') {
      return setAditionals(0.50)
    }
    return setAditionals(0.00)
  }
  return (
    <section className='payment-container'>
      <ul className='payment-rail'>
        <PaymentRail name='tarjeta' Icon={Card} setSelected={handleSelected} select={select} />
        <PaymentRail name='banco' Icon={Bank} setSelected={handleSelected} select={select} />
      </ul>
      <SelectedPayment select={select} />
    </section>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(payments)
