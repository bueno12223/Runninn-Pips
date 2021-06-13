import React from 'react'
import bank from '../assets/icons/bank.svg'
import visa from '../assets/icons/visa.svg'
import yappyIcon from '../assets/images/yappy.png'
import './styles/pagos.scss'
function pagos () {
  return (
    <>
      <h1 className='pagos-title'>Parece que tu cuenta aún no esta activa</h1>
      <p className='pagos-text'>Para poder volver a accerder a la plataforma nesecitarás renovar tu cuenta</p>
      <section className='pagos-container'>
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
        <article className='pagos'>
          <ul className='pagos-list'>
            <li className='pagos-item'>Transferencia <img className='pagos-item__img' src={bank} alt='icono de banco' /></li>
            <li className='pagos-item'>Tarjeta <img className='pagos-item__img' src={visa} alt='logos de tarjetas' /></li>
            <li className='pagos-item'>Yappy <img className='pagos-item__img' src={yappyIcon} alt='logo de yappy' /></li>
          </ul>
        </article>
      </section>
    </>
  )
}

export default pagos
