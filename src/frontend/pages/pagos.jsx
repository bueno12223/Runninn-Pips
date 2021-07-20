import React, { useState } from 'react'
import Table from '../components/cart/table'
import Plans from '../components/layout/plans'
import DisplayMesage from '../components/global/displayMessage'
import { useSelector } from 'react-redux'
import Skrill from '../components/cart/skrill'
import './styles/pagos.scss'
function pagos ({ isLogged }) {
  const [totalCharges, setTotal] = useState(140.00)
  const userID = useSelector(state => state.user.userID)
  return (
    <>
      <h1 className='title'>{isLogged ? `${userID} Parece que tu cuenta aún no esta activa` : 'Estos son todos los métodos de pago que usamos'}</h1>
      <p className='text mb'>{isLogged ? 'Para poder volver a accerder a la plataforma nesecitarás renovar tu cuenta, primero selecciona tu plan preferido y luego selecciona el método de pago que mas te convenga' : 'Antes de hacer algún pago, registarte'}</p>
      <Plans onClick={setTotal} to='/pagos' />
      <section className='pagos-container mt'>
        <Table totalCharges={totalCharges} />
        <Skrill totalCharges={totalCharges} />
        <DisplayMesage />
      </section>
    </>
  )
}

export default pagos
