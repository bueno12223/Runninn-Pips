import React from 'react'
import TestimonialCard from './testimonialCard'
import './styles/testimonial.scss'
import NormaImg from '../../assets/images/layout/norma.jpg'
import OmarImg from '../../assets/images/home/omar.jpg'
import CoraliaImg from '../../assets/images/home/coralia.jpg'
import IsmaelImg from '../../assets/images/home/ismael.jpg'
function testimonial () {
  const testimonialData = [
    { img: NormaImg, desc: 'Ingeniera industrial.', title: 'Norma Quintero', text: 'Soy inmigrante Venezolana en Chile y entre hace un año al mundo del trading, comencé con la información común que redunda en YouTube pero la  nunca me funcionó, nunca me rendí,después de unos meses conocí entonces Running trader, me hicieron entender con el trading institucional como en realidad se manejan los mercados financieros, cómo actúan los traders profesionales.' },
    { img: CoraliaImg, desc: 'Emprendedora', title: 'Coralia Pinzón', text: 'Soy una madre soltera que inició en el mundo de los mercados financiero hace dos años sin resultados, desde mis inicios veía al CEO actual de Running trader tener grandes resultados en trading y me habló sobre su academia, cosa que no puse en tela de duda, hoy en día he aprendido muchísimo del trading institucional, y tengo mucha paz y tranquilidad.' },
    { img: IsmaelImg, desc: 'Trader profesional', title: 'Ismael Ortega ', text: 'A los 16 años con muy poco recurso vendí mi celular para poder pagar cursos de trading, estuve sin resultados hasta que conocí esta oportunidad, siempre vi las ganancias altas que tenía el CEO desde mucho más antes de tener su academia lo cual me inspiró mucha confianza, hasta que pude conocer el trading institucional en Running Trader y mí trader se potencializó.' }
  ]
  return (
    <article className='testimonial mb'>
      <h3 className='mb'>Confianza de cientos de clientes</h3>
      <ul className='testimonial-list'>
        <TestimonialCard {...testimonialData[0]} />
        <TestimonialCard {...testimonialData[1]} />
        <TestimonialCard {...testimonialData[2]} />
      </ul>
    </article>
  )
}
export default testimonial
