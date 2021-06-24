import React from 'react'
import bank from '../../assets/icons/bank.svg'
import yappyIcon from '../../assets/images/yappy.png'
import './styles/botonesDePago.scss'
function botonesDePago () {
  return (
    <article className='pagos'>
      <ul className='pagos-list'>
        <li className='pagos-item'> <a className='pagos-href' href='#transferencia'>Transferencia <img className='pagos-item__img' src={bank} alt='icono de banco' /></a></li>
        <li className='pagos-item'>Yappy <br /> NO DISPONIBLE<img className='pagos-item__img' src={yappyIcon} alt='logo de yappy' /></li>
      </ul>
    </article>
  )
}

export default botonesDePago
