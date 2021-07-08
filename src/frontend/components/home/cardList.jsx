import React from 'react'
import { Link } from 'react-router-dom'
import Card from './card'
import './styles/cardList.scss'
function cardList ({ videos, title, to }) {
  return (
    <>
      <section className='cardList'>
        <Link to={to} className='cardList-link'><h1 className='cardList-title'>{title === 'OmarSosa' ? 'OmarSosaFx' : title}</h1></Link>
        <div className='cardList-container'>

          {
            videos.map(PreVideo => {
              return (

                <Card key={PreVideo._id} {...PreVideo} keyID={PreVideo.key} />
              )
            })
            }
        </div>
      </section>
    </>
  )
}
export default cardList
