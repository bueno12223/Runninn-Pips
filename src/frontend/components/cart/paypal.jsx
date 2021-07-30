import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { PayPalButton } from 'react-paypal-button-v2'
import { messageHandler, validatePayment } from '../../actions'
function PayPalBtn (props) {
  const paypal = useRef()
  useEffect(async () => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: `Accesso a la plataforma de Running Trader con el plan de ${props.amount}`,
                amount: {
                  currency_code: 'USD',
                  value: 1.00
                }
              }
            ]
          })
        },
        onError: (err) => {
          console.error(err)
          props.messageHandler({ message: 'Ocurrio un error, intente mas tarde', success: false })
        }
      })
      .render(paypal.current)
  }, [])

  return (
    <PayPalButton
      amount='1.00'
      onSuccess={async (details, data) => {
        window.alert('Transaction completed by ' + details.payer.name.given_name)
        await props.validatePayment({ id: data.orderID })
        props.messageHandler({ message: 'Transaccion realizada correctamente', success: true })
        return window.fetch('/paypal-transaction-complete', {
          method: 'post',
          body: JSON.stringify({
            orderId: data.orderID
          })
        })
      }}
      options={{
        clientId: 'AfMEqJwOIsI2ScDCxgZh1CLV1zAJFMb7qUEpIGp5mVdMYl0QYjX2BWlgLvsDKqVCV1Sh7xDNIVBmfjYx'
      }}
      onError={(err) => {
        console.error(err)
        props.messageHandler({ message: 'Ocurrio un error, intente mas tarde', success: false })
      }}
    />
  )
}
const mapDispatchToProps = {
  messageHandler,
  validatePayment
}
export default connect(null, mapDispatchToProps)(PayPalBtn)
