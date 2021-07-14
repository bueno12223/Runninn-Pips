import React from 'react'
import Cart from './cart'
import Transfer from './transfer'
function selectedPaymen ({ select }) {
  if (select === 'tarjeta') {
    return <Cart />
  }
  if (select === 'banco') {
    return <Transfer />
  }
}
export default selectedPaymen
