import React, { useState } from 'react'
import Table from '../components/cart/table'
import Payment from '../components/cart/payments'
function pagos ({ isLogged }) {
  const [additionalCharges, setAditionals] = useState(0.00)
  const userID = window.localStorage.getItem('userID')
  if (isLogged) {
    return (
      <>
        <h1 className='pagos-title__main pagos-title'>Tu cuenta ya esta activa  &#128526;</h1>
        <p className='pagos-text'>No tienes nada que hacer aquí, los pagos por tarjeta se hacen cada 30 días, si pagas por transferencia, espera que tu cuenta expire para volver a pa</p>
      </>
    )
  }
  return (
    <>
      <h1 className='pagos-title__main pagos-title'>{userID}Parece que tu cuenta aún no esta activa</h1>
      <p className='pagos-text'>Para poder volver a accerder a la plataforma nesecitarás renovar tu cuenta</p>
      <section className='pagos-container'>
        <Table additionalCharges={additionalCharges} />
        <Payment setAditionals={setAditionals} />
      </section>
    </>
  )
}

export default pagos
