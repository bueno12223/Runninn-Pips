import React from 'react'
import './styles/suscribe.scss'
import useForm from '../../hooks/useForm'
import { sendMessage } from '../../actions'
import DisplayMesage from '../global/displayMessage'
import { connect } from 'react-redux'
function suscribe ({ sendMessage }) {
  const [form, setForm] = useForm({
    email: '',
    name: '',
    number: ''
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage(form)
  }
  return (
    <>
      <section className='suscribe'>
        <h2>¿Aún tienes duda?</h2>
        <p>LLena estos datos y te contactaremos!</p>
        <input type='email' placeholder='email' name='email' onChange={setForm} />
        <input type='text' placeholder='nombre' name='name' onChange={setForm} />
        <input type='number' placeholder='numero de contacto' name='number' onChange={setForm} />
        <a href='/' onClick={handleSubmit}>Enviar</a>
        <DisplayMesage />
      </section>
    </>
  )
}
const mapDispatchToProps = {
  sendMessage
}
export default connect(null, mapDispatchToProps)(suscribe)
