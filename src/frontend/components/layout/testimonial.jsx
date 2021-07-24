import React from 'react'
import TestimonialCard from './testimonialCard'
import './styles/testimonial.scss'
import NormaImg from '../../assets/images/layout/norma.jpg'
import OmarImg from '../../assets/images/home/omar.jpg'
function testimonial () {
  const testimonialData = [
    { img: NormaImg, desc: 'Ingeniera industrial.', title: 'Norma Quintero', text: 'Soy inmigrante Venezolana en Chile y entre hace un año al mundo del trading, comencé con la información común que redunda en YouTube pero la  nunca me funcionó, nunca me rendí,después de unos meses conocí entonces Running trader, me hicieron entender con el trading institucional como en realidad se manejan los mercados financieros, cómo actúan los traders profesionales.' },
    { img: OmarImg, desc: 'CEO de Running Trader', title: 'Omar Sosa', text: 'Antes era mecanico naval, no me faltaba dinero pero si tiempo para estar con mi familia, cuando empeze con el trading perdi demasiado dinero pero mucho tiempo despues aprender la informacion correcta, soy libre de mi trabajo y ahora me dedico a cambiar vidas a travez de mi conocimiento en lo mercados financieros.' },
    { img: OmarImg, desc: 'CEO de Running Trader', title: 'Omar Sosa', text: 'Antes era mecanico naval, no me faltaba dinero pero si tiempo para estar con mi familia, cuando empeze con el trading perdi demasiado dinero pero mucho tiempo despues aprender la informacion correcta, soy libre de mi trabajo y ahora me dedico a cambiar vidas a travez de mi conocimiento en lo mercados financieros.' }
  ]
  return (
    <article className='testimonial mb'>
      <h3 className='mb'>Confianza de cientos de clientes</h3>
      <ul className='testimonial-list'>
        <TestimonialCard {...testimonialData[0]} />
        <TestimonialCard {...testimonialData[1]} />
        <TestimonialCard {...testimonialData[1]} />
      </ul>
    </article>
  )
}
export default testimonial
