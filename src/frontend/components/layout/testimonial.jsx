import React from 'react'
import TestimonialCard from './testimonialCard'
import './styles/testimonial.scss'
import NormaImg from '../../assets/images/layout/norma.jpg'
import OmarImg from '../../assets/images/home/omar.jpg'
function testimonial () {
  const testimonialData = [
    { img: NormaImg, desc: 'Ingeniera industrial.', title: 'Norma Quintero', text: 'Soy inmigrante Venezolana en Chile y entre hace un año al mundo del trading, comencé con la información común que redunda en YouTube pero la  nunca me funcionó, nunca me rendí,  entonces conocí entonces Running traider, me hicieron entender con el trading institucional como en realidad se manejan los mercados financieros, cómo actúan los traders profesionales.' },
    { img: OmarImg, desc: 'CEO de Running Trader', title: 'Omar Sosa', text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptates amet dolorum hic ducimus quis dolores est doloremque animi neque repellat beatae omnis aut alias cupiditate, eligendi tempore, sit quam.' }
  ]
  return (
    <article className='testimonial mb'>
      <h3 className='mb'>Confianza de cientos de clientes</h3>
      <ul className='testimonial-list'>
        <TestimonialCard {...testimonialData[0]} />
        <TestimonialCard {...testimonialData[0]} />
        <TestimonialCard {...testimonialData[0]} />
      </ul>
    </article>
  )
}
export default testimonial
