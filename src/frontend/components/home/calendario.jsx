import React from 'react'
import useGetTeacherCalendar from '../../hooks/useGetTeacherCalendar'
import './styles/calendario.scss'

function calendario ({ teacherID }) {
  const getTeacherCalendar = useGetTeacherCalendar()
  const data = getTeacherCalendar(teacherID) || []
  return (
    <section className='calendario'>
      <p className='calendario-text'>Lunes</p>
      <p className='calendario-text'>Martes</p>
      <p className='calendario-text'>Miercoles</p>
      <p className='calendario-text'>Jueves</p>
      <p className='calendario-text'>Viernes</p>
      <p className='calendario-text'>Sábado</p>
      <p className='calendario-text'>Domingo</p>
      {
            data.map((info, idx) => (
              <p key={info + idx} className={`calendarioInfo-text ${info ? 'calendarioInfo-text__active' : ''}`}>{info}</p>
            ))
        }
    </section>
  )
}

export default calendario
