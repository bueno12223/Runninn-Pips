import React, { useState } from 'react'
import Table from '../components/cart/table'
import Plans from '../components/layout/plans'
import { useSelector } from 'react-redux'
import DisplayMesage from '../components/global/displayMessage'
import PayButon from '../components/checkout/PayButon'
import './styles/pagos.scss'
function pagos () {
  const prices = ['300', '1500', '3000']
  const [totalCharges, setTotal] = useState(prices[0])
  const user = useSelector(state => state.user) || {}
  const isLogged = !!user

  const paymentCallback = async (paymentData) => {
    console.log('paymentData', paymentData)
  }
  return (
    <>
      <h1 className='title'>{isLogged ? 'Parece que tu cuenta aún no esta activa' : 'Estos son todos los métodos de pago que usamos'}</h1>
      <p className='text mb'>{isLogged ? 'Para poder volver a accerder a la plataforma nesecitarás renovar tu cuenta, primero selecciona tu plan preferido y luego selecciona el método de pago que mas te convenga' : 'Antes de hacer algún pago, registarte'}</p>
      <Plans onClick={setTotal} to='/pagos' prices={prices} />
      <section className='pagos-container mt'>
        <Table totalCharges={totalCharges} />
        <PayButon paymentCallback={paymentCallback} amount={totalCharges} isLogged={isLogged} />
        <DisplayMesage />
      </section>
    </>
  )
}

export default pagos
