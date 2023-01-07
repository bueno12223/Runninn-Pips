import React from 'react'
import GooglePayButton from '@google-pay/button-react'
import { Link } from 'react-router-dom'
function PayButon ({ paymentCallback, amount, isLogged }) {
  // if is not logged create a button to redirect to login
  if (!isLogged) {
    return (
      <Link className='lhero-button' to='/login'>Pagar</Link>
    )
  }
  return (
    <GooglePayButton
      environment='PRODUCTION'
      paymentRequest={{
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: 'CARD',
            parameters: {
              allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
              allowedCardNetworks: ['MASTERCARD', 'VISA']
            }
          }
        ],
        merchantInfo: {
          merchantId: 'BCR2DN4TQS44FLCM',
          merchantName: 'Running tarder'
        },
        transactionInfo: {
          totalPriceStatus: 'FINAL',
          totalPriceLabel: 'Total',
          totalPrice: amount,
          currencyCode: 'USD',
          countryCode: 'US'
        }
      }}
      onLoadPaymentData={paymentCallback}
    />
  )
}

export default PayButon
