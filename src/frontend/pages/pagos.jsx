import React from 'react'
import Table from '../components/pagos/table'
import BotonDePago from '../components/pagos/botonesDePago'
import Transferencia from '../components/pagos/transferencia'
function pagos () {
  return (
    <>
      <h1 className='pagos-title__main pagos-title'>Parece que tu cuenta aún no esta activa</h1>
      <p className='pagos-text'>Para poder volver a accerder a la plataforma nesecitarás renovar tu cuenta</p>
      <section className='pagos-container'>
        <Table />
        <BotonDePago />
      </section>
      <Transferencia />
    </>
  )
}

export default pagos
