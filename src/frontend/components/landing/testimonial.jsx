import React from 'react'
import customer from '../../assets/images/user.png'
import './styles/testimonial.scss'
function testimonial () {
  return (
    <article className='testimonial'>
      <h3>Confianza de cientos de clientes</h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta enim porro ad fugiat voluptatibus</p>
      <ul className='testimonial-list'>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </ul>
    </article>
  )
}
function TestimonialCard () {
  return (
    <li className='testimonial-list__card'>
      <img src={customer} alt='' />
      <h4><b>Raul Salinas</b> <br /> Panamá</h4>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ab quia inventore. Recusandae rerum nihil laboriosam quisquam ab</p>
    </li>
  )
}
export default testimonial
