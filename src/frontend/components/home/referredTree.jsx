import React from 'react'
import './styles/referredTree.scss'
function referredTree ({ ammount, downline, upline }) {
  return (
    <>
      <section className='referred'>
        <h2 className='referred-title'>Tu saldo disponible es</h2>
        <h2 className='referred-title__b referred-title'>{ammount}$</h2>
        <h4 className='referred-title'>Fuiste referido por {upline}, y referiste a</h4>
        {downline.length
          ? (
            <ul className='referred-list'>
              {downline.map(e => (<li className='referred-listItem' key={e._id}>{e.userID}, {new Date(e.updated).toLocaleDateString('en-US')}</li>))}
            </ul>
            )
          : <h3 className='referred-title'>Aún no has invitado a nadie &#128517;</h3>}

      </section>
    </>
  )
}

export default referredTree
