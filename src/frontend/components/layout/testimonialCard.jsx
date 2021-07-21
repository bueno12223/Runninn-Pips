import React from 'react'
function TestimonialCard ({ img, desc, text, title }) {
  return (
    <li className='testimonial-list__card'>
      <img className='testimonial-img' src={img} alt='' />
      <h4><b>{title}</b> <br />{desc}</h4>
      <p>"{text}"</p>
    </li>
  )
}
export default TestimonialCard
