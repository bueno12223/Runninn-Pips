const axios = require('axios')
const { formatCurreny } = require('../utils')
const crypto = require('crypto')

const generateTimestamp = () => Date.now()
export const createOrder = async ({ orderAmount, firstName, buyerEmail, userId }) => {
  const body = {
    env:
    {
      terminalType: 'WEB'
    },
    merchantTradeNo: userId + Date.toString(),
    orderAmount: formatCurreny(orderAmount),
    currency: 'USDT',
    goods:
    {
      goodsType: '02',
      goodsCategory: 'Z000',
      referenceGoodsId: 'abc001',
      goodsName: '1 month subscription',
      goodsUnitAmount:
       {
         currency: 'USDT',
         amount: formatCurreny(orderAmount)
       }
    },
    buyer:
    {
      buyerName:
       {
         firstName: firstName,
         buyerEmail: buyerEmail
       }
    }
  }
  const result = await axios({
    url: process.env.BINANCE_API + '/binancepay/openapi/v2/order',
    method: 'POST',
    headers: buildBinanceHeader(body),
    body: body

  })
  if (result.status !== 200) {
    console.log(formatCurreny(orderAmount))
    throw new Error(`Error creating order for user ${userId} with the error`)
  }
  return result
}
function randomString () {
  return crypto.randomBytes(32).toString('hex').substring(0, 32)
}

const buildBinanceHeader = (body, timestamp = generateTimestamp(), nonce = randomString()) => {
  return {
    'content-type': 'application/json',
    'BinancePay-Timestamp': timestamp,
    'BinancePay-Nonce': nonce,
    'BinancePay-Certificate-SN': process.env.BINANCE_KEY,
    'BinancePay-Signature': buildBinancePaySignature(body, timestamp, nonce)
  }
}

const buildBinancePaySignature = (body, timestamp, nonce) => {
  const payloadToSign = timestamp + '\n' + nonce + '\n' + body + '\n'
  return crypto
    .createHmac('sha512', process.env.BINANCE_SECRET)
    .update(payloadToSign)
    .digest('hex').toUpperCase()
}
