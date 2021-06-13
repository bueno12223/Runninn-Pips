import React from 'react'
import './styles/table.scss'
function table () {
  return (
    <article className='table-container'>
      <h2 className='pagos-title'>Seleciona tu método de pago</h2>
      <table className='table'>
        <thead>
          <tr>
            <th className='table-item__text table-item'>premium x30 días</th>
            <th className='table-item__price table-item'> 120.00$</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className='table-item__text table-item'>ITBMS</th>
            <th className='table-item__price table-item'>8.40$</th>
          </tr>
        </tbody>
        <tfoot>
          <tr lassName='table-row'>
            <th className='table-item__text table-item'> <b>Total</b></th>
            <th className='table-item__price table-item'> <b>128.20$</b></th>
          </tr>
        </tfoot>
      </table>
    </article>
  )
}

export default table
