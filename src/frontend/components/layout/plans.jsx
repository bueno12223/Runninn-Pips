import React from 'react'
import { Link } from 'react-router-dom'
import check from '../../assets/icons/check2.svg'
import box from '../../assets/icons/box.svg'
import './styles/plans.scss'
function plans ({ prices, to = '/registro', onClick = () => {} }) {
  return (
    <>
      <h2 className='plans-title'>Escoge tu plan</h2>
      <p className='text'>Explora todas tus optiones y elige el que mas te beneficie, se parte de nosotros </p>
      <section className='plans'>
        <Card
          desc={[
            'Accseso a todos los beneficios por 1 mes',
            'Reuniones de anális en vivo',
            'Cursos nuevos semanalmente y mentorias grupales',
            'Acceso al sistema de referidos',
            'Mentorías personalizada'
          ]}
          isCheck={check}
          price='300'
          tile='Plan inversor inteligente'
          to={to}
          onClick={onClick}
        />
        <Card
          desc={[
            'Accseso a todos los cursos de la plataforma por 6 meses',
            'Reuniones de anális en vivo',
            'Cursos nuevos semanalmente y mentorias grupales',
            'Acceso al sistema de referidos',
            'Mentorías personalizada'
          ]}
          isCheck={check}
          price='300'
          tile='Plan inversor profesional'
          to={to}
          onClick={onClick}
        />
        <Card
          desc={[
            'Accseso a todos los cursos de la plataforma por un año',
            'Reuniones de anális en vivo',
            'Cursos nuevos semanalmente y mentorias grupales',
            'Acceso al sistema de referidos',
            'Mentorías personalizada'
          ]}
          isCheck={check}
          price='300'
          tile='Plan top trader'
          to={to}
          onClick={onClick}
        />
      </section>
    </>
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
