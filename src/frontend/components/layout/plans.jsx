import React from 'react'
import { Link } from 'react-router-dom'
import check from '../../assets/icons/check2.svg'
import box from '../../assets/icons/box.svg'
import './styles/plans.scss'
function plans ({ to = '/registro', onClick = () => {} }) {
  return (
    <section className='plans'>
      <Card
        desc={[
          'Accseso a todos los cursos de la plataforma por 1 mes',
          'Ideas de inversiones',
          'Capacitaciones semanales y mentorias grupales',
          'Acceso al sistema de referidos'
        ]}
        isCheck={check}
        price={140}
        tile='Plan inversor inteligente'
        to={to}
        onClick={onClick}
      />
      <Card
        desc={[
          'Accseso a todos los cursos de la plataforma por 6 meses',
          'Ideas de inversiones',
          'Capacitaciones semanales y mentorias grupales',
          'Acceso al sistema de referidos'
        ]}
        isCheck={check}
        price={700}
        tile='Plan inversor profesional'
        to={to}
        onClick={onClick}
      />
      <Card
        desc={[
          'Accseso a todos los cursos de la plataforma por un año',
          'Ideas de inversiones',
          'Capacitaciones semanales y mentorias grupales',
          'Acceso al sistema de referidos'
        ]}
        isCheck={check}
        price={1400}
        tile='Plan top trader'
        to={to}
        onClick={onClick}
      />
    </section>
  )
}
function Card ({ desc, isCheck, price, tile, to, onClick }) {
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
      <h4>{price}$</h4>
      <Link to={to} onClick={() => onClick(price)}>Seleccionar</Link>
    </article>
  )
}

export default plans
