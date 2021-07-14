import React, { useState } from 'react'
import Table from '../components/cart/table'
import Payment from '../components/cart/payments'
import Plans from '../components/layout/plans'
import DisplayMesage from '../components/global/displayMessage'
import './styles/pagos.scss'
function pagos ({ isLogged }) {
  const [additionalCharges, setAditionals] = useState(0.00)
  const [totalCharges, setTotal] = useState(140.00)
  const userID = window.localStorage.getItem('userID')
  if (isLogged) {
    return (
      <>
        <h1 className='title'>Tu cuenta ya esta activa  &#128526;</h1>
        <p className='text'>No tienes nada que hacer aquí, los pagos por tarjeta se hacen cada 30 días, si pagas por transferencia, espera que tu cuenta expire para volver a pa</p>
      </>
    )
  }
  return (
    <>
      <h1 className='title'>{userID} Parece que tu cuenta aún no esta activa</h1>
      <p className='text mb'>Para poder volver a accerder a la plataforma nesecitarás renovar tu cuenta, primero selecciona tu plan preferido y luego selecciona el método de pago que mas te convenga</p>
      <Plans onClick={setTotal} to='/pagos' />
      <section className='pagos-container mt'>
        <Table additionalCharges={additionalCharges} totalCharges={totalCharges} />
        <Payment setAditionals={setAditionals} />
        <DisplayMesage />
      </section>
    </>
  )
}

export default pagos
