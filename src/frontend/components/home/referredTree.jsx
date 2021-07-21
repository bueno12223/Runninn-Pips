import React from 'react'
import { useSelector } from 'react-redux'
import './styles/referredTree.scss'
import '../cart/styles/table.scss'
function referredTree () {
  const { downline, upline } = useSelector(state => state.user.referredTree)
  return (
    <section className='referred'>
      <h4 className='title'>Así va tu referidos.</h4>
      <p className='text'>Fuiste referido por {upline}</p>
      <p className='text'>hasta ahora has referido a ...</p>
      <table className='table'>
        <thead>
          <tr>
            <th className='table-item__text table-item'>Nombre de usuario</th>
            <th className='table-item__price table-item'>Fecha de registro</th>
          </tr>
        </thead>
        <tbody>
          {downline.map(({ _id, updated, userID }) => (
            <tr key={_id}>
              <th className='table-item__text table-item'>{userID} </th>
              <th className='table-item__price table-item'>{new Date(updated).toLocaleDateString('en-US')}</th>
            </tr>

          ))}
        </tbody>
      </table>
    </section>
  )
}

export default referredTree
