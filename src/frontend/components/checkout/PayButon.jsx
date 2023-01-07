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
      environment='TEST'
      paymentRequest={{
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: 'CARD',
            parameters: {
              allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
              allowedCardNetworks: ['MASTERCARD', 'VISA']
            },
            tokenizationSpecification: {
              type: 'PAYMENT_GATEWAY',
              parameters: {
                gateway: 'example',
                gatewayMerchantId: 'exampleGatewayMerchantId'
              }
            }
          }
        ],
        merchantInfo: {
          merchantId: '12345678901234567890',
          merchantName: 'Demo Merchant'
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
