import React, { useState } from 'react'
import Table from '../components/cart/table'
import Plans from '../components/layout/plans'
import { useSelector } from 'react-redux'
import DisplayMesage from '../components/global/displayMessage'
import axios from 'axios'
import './styles/pagos.scss'
function pagos () {
  const [totalCharges, setTotal] = useState(120)
  const user = useSelector(state => state.user) || {}
  const isLogged = !!user
  const generatePaymentLink = async () => {
    // fetch bincance API to get the link

    const response = await axios.post('/payments', {
      body: {
        orderAmount: totalCharges,
        firstName: user.userName || 'anonymusName',
        buyerEmail: user.email || 'anonymusEmail',
        userId: user._id || 'anonymus'
      }
    })
    console.log(response)
  }
  return (
    <>
      <h1 className='title'>{isLogged ? 'Parece que tu cuenta aún no esta activa' : 'Estos son todos los métodos de pago que usamos'}</h1>
      <p className='text mb'>{isLogged ? 'Para poder volver a accerder a la plataforma nesecitarás renovar tu cuenta, primero selecciona tu plan preferido y luego selecciona el método de pago que mas te convenga' : 'Antes de hacer algún pago, registarte'}</p>
      <Plans onClick={setTotal} to='/pagos' />
      <section className='pagos-container mt'>
        <Table totalCharges={totalCharges} />
        <button
          onClick={generatePaymentLink}
        >Pagar
        </button>
        <DisplayMesage />
      </section>
      <p className='text'> IMPORTANTE!!!! <br />
        debes pagar con el email que tienes en tu cuenta
      </p>
    </>
  )
}

export default pagos
