import React from 'react'
import { useSelector } from 'react-redux'
import './styles/referredTree.scss'
function referredTree () {
  const downline = useSelector(state => state.user.downline)
  return (
    <>
      <section className='referred'>
        <h4 className='title'>Así va tu referidos.</h4>
        {downline
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
