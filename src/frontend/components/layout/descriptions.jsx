import React from 'react'
import Check from '../../assets/icons/check'
import ToolsImg from '../../assets/icons/tools'
import './styles/description.scss'
function descriptions () {
  return (
    <section className='description'>
      <ToolsImg className='description-img' />
      <h2><b>Explora las herramientas mas poderosas del mercado</b></h2>
      <p>Con tu accseso premium puedes tener todas estas herramientas listas para cuando las nesecites</p>
      <ul className='description-list'>
        <li><Check /> Acceso a todos los cursos</li>
        <li><Check /> Ideas de inversiones </li>
        <li><Check /> Mentorias grupales todas las semanas</li>
        <li><Check /> La información mas actualizada de la industria</li>
      </ul>
    </section>
  )
}

export default descriptions
