import React from 'react'
import Cart from './cart'
import Paypal from './paypal'
import Transfer from './transfer'
function selectedPaymen ({ select }) {
  if (select === 'tarjeta') {
    return <Cart />
  }
  if (select === 'Paypal') {
    return <Paypal />
  }
  if (select === 'banco') {
    return <Transfer />
  }
}
export default selectedPaymen
