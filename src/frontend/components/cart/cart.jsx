import React from 'react'
import SelectDale from './selectDale'
import useForm from '../../hooks/useForm'
import cardTypes from '../../assets/icons/cart/cartTypes.svg'
import CountryInput from './countrys'
import './styles/cart.scss'
function cart () {
  const defaultFrom = {
    ccNo: null,
    expMonth: null,
    expYear: null,
    cvv: null,
    contry: null,
    zipCode: null
  }
  const [form, setForm] = useForm(defaultFrom)
  return (
    <>
      <form className='cart'>
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
        <p className='cart-text cart__small'>País</p>
        <input type='number' name='cvv' className='cart-input cart__small' onChange={setForm} maxLength={3} required />
        <CountryInput handleChangue={setForm} className='cart-input cart__small' />
        <p className='cart-text'>Código postal</p>
        <input type='text' name='zipCode' className='cart-input' onChange={setForm} maxLength='32' required />
        <input type='submit' className='cart-submit' value='Enviar' />
      </form>
    </>
  )
}

export default cart
