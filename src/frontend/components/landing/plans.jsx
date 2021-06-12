import React from 'react'
import check from '../../assets/icons/check2.svg'
import box from '../../assets/icons/box.svg'
import './styles/plans.scss'
function plans () {
  return (
    <section className='plans'>
      <Card
        desc={[
          'Accseso a todos los cursos de la plataforma',
          'señales de Forex',
          'Acceso a una capacitción',
          'Acesso solamente por 7 días'
        ]}
        isCheck={check}
        price={0}
        tile='Plan de prueba'
      />
      <Card
        desc={[
          'Accseso a todos los cursos de la plataforma',
          'Ideas de inversiones  y señales de Forex',
          'Capacitaciones semanales',
          'Sesiones privadas'
        ]}
        isCheck={check}
        price={120}
        tile='Plan premium'
      />
    </section>
  )
}
function Card ({ desc, isCheck, price, tile }) {
  const img = isCheck
  return (
    <article className='plans-card'>
      <img src={box} alt='box img' />
      <h3>{tile}</h3>
      <ul>
        {
              desc.map((e) => (
                <li key={e}><img src={img} alt='check' />{e}</li>
              ))
          }
      </ul>
      <h4>{price}$ al mes</h4>
      <a href='/pagos'>Seleccionar</a>
    </article>
  )
}

export default plans
