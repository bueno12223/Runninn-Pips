import React, { useState } from 'react'
import { connect } from 'react-redux'
import PaymentRail from './paymentRail'
import Card from '../../assets/icons/cart/cart'
import Bank from '../../assets/icons/cart/bank'
import Paypal from '../../assets/icons/cart/paypal'
import SelectedPayment from './selectedPayment'

export const payments = (props) => {
  const [select, setSelected] = useState('tarjeta')
  return (
    <section className='payment-container'>
      <ul className='payment-rail'>
        <PaymentRail name='tarjeta' Icon={Card} setSelected={setSelected} select={select} />
        <PaymentRail name='Paypal' Icon={Paypal} setSelected={setSelected} select={select} />
        <PaymentRail name='banco' Icon={Bank} setSelected={setSelected} select={select} />
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
