import React from 'react'
import Cart from './cart'
import Paypal from './paypal'
import Transfer from './transfer'
function selectedPaymen ({ select }) {
  switch (select) {
    case 'tarjeta':
      return <Cart />

    case 'paypal':
      return <Paypal />

    case 'transferencia':
      return <Transfer />

    default:
      return <Cart />
  }
}
export default selectedPaymen
