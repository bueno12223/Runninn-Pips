import React from 'react'
import TestimonialCard from './testimonialCard'
import './styles/testimonial.scss'
import NormaImg from '../../assets/images/layout/norma.jpg'
import OmarImg from '../../assets/images/home/omar.jpg'
function testimonial () {
  const testimonialData = [
    { img: NormaImg, desc: 'Ingeniera industrial.', title: 'Norma Quintero', text: 'Soy inmigrante Venezolana en Chile y como muchos en búsqueda de ingresos extras entre hace un año al mundo del trading, comencé con la información común que redunda en YouTube, Brokers, exchage y aunque en ocasiones acertaba más eran las pérdidas que tenía, hice amistades que me hablaban de Los profesionales y decidimos indagar, la información era casi nula o muy costosa  y aunque tenía frustraciones no me rendí, conocí entonces Running traider y sus mentores me hicieron entender con el trading institucional como en realidad se manejan los mercados financieros, cómo actúan los traders profesionales. Mi percepción mejoro y mis entradas también, he alcanzado más consistencia  y rentabilidad.' },
    { img: OmarImg, desc: 'CEO de Running Trader', title: 'Omar Sosa', text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptates amet dolorum hic ducimus quis dolores est doloremque animi neque repellat beatae omnis aut alias cupiditate, eligendi tempore, sit quam.' }
  ]
  return (
    <article className='testimonial'>
      <h3>Confianza de cientos de clientes</h3>
      <ul className='testimonial-list'>
        <TestimonialCard {...testimonialData[0]} />
        <TestimonialCard {...testimonialData[1]} />
        <TestimonialCard {...testimonialData[0]} />
      </ul>
    </article>
  )
}
export default testimonial
