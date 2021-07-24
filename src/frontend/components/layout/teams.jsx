import React from 'react'
import { Link } from 'react-router-dom'
import teamIcon from '../../assets/icons/layout/team.svg'
import './styles/team.scss'
function team () {
  return (
    <section className='team'>
      <img src={teamIcon} alt='iamgen de trabajo en equipo' className='team-img' />
      <div>
        <h2 className='title'>Si tu ganas, yo gano</h2>
        <p className='text mb'>Invita a tus amigos y familia, recibe el 40% de cada plan que compren cuando tengas un plan activo, sin limites!!</p>
      </div>
      <Link className='lhero-button team-button' to='/registro'>Registarme ahora</Link>
    </section>
  )
}

export default team
