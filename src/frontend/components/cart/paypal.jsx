import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { messageHandler, validatePayment, logOutUser } from '../../actions'
function PayPalBtn (props) {
  const history = useHistory()
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
                  value: props.amount
                }
              }
            ]
          })
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture()
          console.log(order.id)
          await props.validatePayment({ id: order.id })
          props.messageHandler({ message: 'Pago realizado correctamente, vuelva a iniciar sesión', success: true })
          setTimeout(() => {
            logOutUser(history)
          }, 2000)
        },
        onError: (err) => {
          console.error(err)
          props.messageHandler({ message: 'Ocurrio un error, intente mas tarde', success: false })
        }
      })
      .render(paypal.current)
  }, [])

  return (
    <div>
      <div ref={paypal} />
    </div>
  )
}
const mapDispatchToProps = {
  messageHandler,
  validatePayment
}
export default connect(null, mapDispatchToProps)(PayPalBtn)
