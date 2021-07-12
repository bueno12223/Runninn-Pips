import React from 'react'
import './styles/table.scss'
function table ({ additionalCharges }) {
  return (
    <article className='table-container'>
      <h2 className='pagos-title'>Seleciona tu método de pago</h2>
      <table className='table'>
        <thead>
          <tr>
            <th className='table-item__text table-item'>premium x30 días</th>
            <th className='table-item__price table-item'> 140.00$</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className='table-item__text table-item'>Cargos adcionales</th>
            <th className='table-item__price table-item'>{additionalCharges}$</th>
          </tr>
        </tbody>
        <tfoot>
          <tr className='table-row'>
            <th className='table-item__text table-item'> <b>Total</b></th>
            <th className='table-item__price table-item'> <b>{parseFloat(Math.round(14000.00 + additionalCharges * 100) / 100).toFixed(2)}$</b></th>
          </tr>
        </tfoot>
      </table>
    </article>
  )
}

export default table
