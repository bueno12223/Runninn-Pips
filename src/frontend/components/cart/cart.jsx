import React, { useState } from 'react'
import { connect } from 'react-redux'
// components
import SelectDale from './selectDale'
import CountryInput from './countrys'
import DisplayMesage from '../global/displayMessage'
import Loader from '../global/loader'
// hooks or actions
import useForm from '../../hooks/useForm'
import useScript from '../../hooks/useScript'
import { validatePayment } from '../../actions'
// statics
import cardTypes from '../../assets/icons/cart/cartTypes.svg'
// style
import './styles/cart.scss'

function cart ({ name, email, validatePayment }) {
  // valores por defecto de los formularios
  const defaultFrom = {
    sellerId: '251225467102',
    publishableKey: '78953CDF-3F65-4D85-8CC7-9AF212A12D15',
    ccNo: null,
    expMonth: null,
    expYear: null,
    cvv: null
  }
  const defaultFromAdress = {
    name,
    addrLine1: null,
    city: null,
    state: null,
    zipCode: null,
    country: null,
    email,
    phoneNumber: null
  }
  // hooks para manejar formularios
  const [form, setForm] = useForm(defaultFrom)
  const [adress, setAdress] = useForm(defaultFromAdress)
  // state de loading
  const [loading, setLoading] = useState(false)
  // importamos el script de 2checkout
  useScript('https://www.2checkout.com/checkout/api/2co.min.js')
  // funcion que retorna el token de los datos de la tarjeta
  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()
    const successCallback = data => validatePayment({ token: data.response.token.token, adress })
    const failCallback = err => console.log(err)
    window.TCO.request.token(successCallback, failCallback, 'tcoCCForm')
    setLoading(false)
  }
  return (
    <>
      <form className='cart' id='tcoCCForm' value={form}>
        <p className='cart-text'>Numero de tarjeta</p>
        <div className='cart-numbers cart-input'>
          <input type='number' name='ccNo' className='cart-numbersInput' onChange={setForm} maxLength='16' required />
          <img src={cardTypes} alt='tipos de tarjeta aceptadas' className='cart-numbersImg' />
        </div>
        <p className='cart-text cart__small'>Mes de expiración</p>
        <p className='cart-text cart__small'>Año de expiración</p>
        <SelectDale className='cart-input cart__small' name='expMonth' handleChangue={setForm} />
        <SelectDale className='cart-input cart__small' name='expYear' handleChangue={setForm} maxNum={[new Date().getYear() - 100, new Date().getYear() - 85]} />
        <p className='cart-text cart__small'>CVV</p>
        <p className='cart-text cart__small'>Número de téfono</p>
        <input type='number' name='cvv' className='cart-input cart__small' onChange={setForm} maxLength={3} required />
        <input type='number' name='phoneNumber' onChange={setAdress} className='cart-input cart__small' maxLength='16' required />
        <p className='cart-text cart__small'>País</p>
        <p className='cart-text cart__small'>Estado o provincia</p>
        <CountryInput handleChangue={setAdress} className='cart-input cart__small' />
        <input type='text' name='state' className='cart-input cart__small' maxLength='32' onChange={setAdress} />
        <p className='cart-text cart__small'>Código postal</p>
        <p className='cart-text cart__small'>Ciudad</p>
        <input type='text' name='zipCode' className='cart-input cart__small' onChange={setAdress} maxLength='32' required />
        <input type='text' name='city' className='cart-input cart__small' onChange={setAdress} maxLength='32' required />
        <p className='cart-text'>Dirección de facturación</p>
        <input type='text' name='billingAddr' onChange={setAdress} className='cart-input' maxLength='64' required />
        <p className='cart-text'>Calle, casa o departamento</p>
        <input type='text' name='addrLine1' className='cart-input' maxLength='64' required onChange={setAdress} />
        <p className='cart-text'>Detalles opcionales</p>
        <input type='text' name='addrLine2' className='cart-input' maxLength='32' onChange={setAdress} />
        <DisplayMesage />
        <button className={`cart-submit ${loading && 'cart-submit__loading'}`} value='Enviar' onClick={(e) => handleSubmit(e)}>{loading ? <Loader color='#fff' height={35} width={35} /> : 'Enviar'}</button>
      </form>
    </>
  )
}
const mapDispatchToProps = {
  validatePayment
}
export default connect(null, mapDispatchToProps)(cart)
