import React from 'react'
import clases from '../../assets/icons/layout/class.svg'
import course from '../../assets/icons/layout/course.svg'
import teacher from '../../assets/icons/layout/teacher.svg'
import chart from '../../assets/icons/layout/chart.svg'
import './styles/description.scss'
function descriptions () {
  return (
    <section className='description'>
      <h2 className='title'><b>Nuestro servicio</b></h2>
      <p className='text mb'>Te entregamos las mejores herramientas para facilitar tu camino a la rentabilidad, todos disponibles desde el plan básico al avanzado.</p>
      <ul className='description-list'>
        <li className='description-listItem'> <img src={clases} className='description-listImg' alt='clase' /><p className='description-text'> Recibe clases en vivo cada semana </p>Se parte de nuestra comunidad, pregunta y aporta a nuestras clases en vivo</li>
        <li className='description-listItem'> <img src={course} className='description-listImg' alt='clase' /> <p className='description-text'> Disfruta de los cursos cuando quieras </p>Acceso a cientos de cursos dados por nuestros educadores, especializados en trading institucional</li>
        <li className='description-listItem'> <img src={teacher} className='description-listImg' alt='clase' /><p className='description-text'>Mentorias personalizada con profesionales </p>Contacta con traders rentables en cualquier momento o planea reuniones con ellos para aclarar dudas</li>
        <li className='description-listItem'> <img src={chart} className='description-listImg' alt='clase' /><p className='description-text'> Ten un seguimiento diario del mercado </p>Recibe reuniones semanales donde se dan entradas o ideas de inversión</li>
      </ul>
    </section>
  )
}

export default descriptions
