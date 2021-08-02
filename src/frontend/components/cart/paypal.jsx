import React from 'react'
import { connect } from 'react-redux'
import { PayPalButton } from 'react-paypal-button-v2'
import { messageHandler, validatePayment } from '../../actions'
function PayPalBtn (props) {
  return (
    <PayPalButton
      amount={props.amount}
      shippingPreference='NO_SHIPPING'
      onSuccess={async (details, data) => {
        console.log(data.orderID)
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
        clientId: 'AfRa9d0sXTSuHnmKXtBoFkpPEBnLVMh4CnquL6Rh6KFqLQg3ulClV96Ruyi8bTkPwmB0QZCmnnH9Cy2l'
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
