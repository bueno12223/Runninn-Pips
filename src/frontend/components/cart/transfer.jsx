import React, { useState } from 'react'
import DisplayMesage from '../global/displayMessage'
import Loader from '../global/loader'
import { connect } from 'react-redux'
import { uploadTransacction } from '../../actions'
import useForm from '../../hooks/useForm'
import CountyTransfer from './countyTransfer'
import './styles/transferenicia.scss'

function transferencia ({ uploadTransacction, userID }) {
  const [loading, setLoading] = useState(false)
  // manejador del formulario del país
  const [countrySelect, setCountry] = useForm({ countyTransfer: 0 })
  // funcion que copia el valor
  // mnejador de cargar archivo
  const handleFileInput = async (file) => {
    setLoading(true)
    uploadTransacction({ img: file, userID })
    // borramos el usario
    window.localStorage.removeItem('userID')
    setLoading(false)
  }
  return (
    <section className='transferencia mt' id='transferencia'>
      <p className='secundary-title'>Seleciona el país desde donde harás la transacctión</p>
      <select className='transferencia-input' name='countyTransfer' onChange={setCountry}>
        <option value={0}>Panamá</option>
        <option value={1}>Estados Unidos</option>
        <option value={2}>Reino Unido</option>
        <option value={3}>Canadá</option>
      </select>
      <CountyTransfer countrySelect={countrySelect} />
      <p className='text'>Sube una captura de la transferencia para validarla, el proceso puede tomar de 1h hasta 2 días y lleva un cargo de 0.50c adcionales de cuota de manejo</p>
      <input className='transferencia-input__invisible' type='file' name='image' id='file' onChange={(e) => handleFileInput(e.target.files[0])} />
      <label for='file' className='transferencia-label mt'>Seleccionar un archivo</label>
      {loading && (<Loader />)}
      <DisplayMesage />
    </section>
  )
}
const mapStateToProps = {
  uploadTransacction
}

export default connect(null, mapStateToProps)(transferencia)
