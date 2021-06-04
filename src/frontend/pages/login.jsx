import React from 'react'
import { Link } from 'react-router-dom'
function login () {
  return (
    <article>
      <form action=''>
        <input type='email' name='email' placeholder='Usuario' required />
        <input type='password' name='email' placeholder='Contraseña' required />
        <input type='Submit' />
        <input type='email' name='email' required />
        <Link>¿Olvidaste tu contraseña?</Link>
      </form>

    </article>
  )
}

export default login
