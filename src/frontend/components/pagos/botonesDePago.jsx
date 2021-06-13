import React from 'react'
import bank from '../../assets/icons/bank.svg'
import visa from '../../assets/icons/visa.svg'
import yappyIcon from '../../assets/images/yappy.png'
import './styles/botonesDePago.scss'
function botonesDePago () {
  return (
    <article className='pagos'>
      <ul className='pagos-list'>
        <li className='pagos-item'>Transferencia <img className='pagos-item__img' src={bank} alt='icono de banco' /></li>
        <li className='pagos-item'>Tarjeta <img className='pagos-item__img' src={visa} alt='logos de tarjetas' /></li>
        <li className='pagos-item'>Yappy <img className='pagos-item__img' src={yappyIcon} alt='logo de yappy' /></li>
      </ul>
    </article>
  )
}

export default botonesDePago
