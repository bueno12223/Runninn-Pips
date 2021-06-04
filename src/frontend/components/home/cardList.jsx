import React from 'react'
import Card from './card'
import './styles/cardList.scss'
function cardList () {
  const data = [
    { title: 'Example #1', description: 'lorem', time: 50 },
    { title: 'Example #1', description: 'lorem', time: 50 },
    { title: 'Example #1', description: 'lorem', time: 50 },
    { title: 'Example #1', description: 'lorem', time: 50 },
    { title: 'Example #1', description: 'lorem', time: 50 },
    { title: 'Example #1', description: 'lorem', time: 50 }
  ]
  return (
    <>
      <section className='cardList'>
        <h2>Tu lista</h2>
        <div className='cardList-container'>

          {
            data.map(PreVideo => (
              <Card key={PreVideo.title} {...PreVideo} />
            ))
            }
        </div>
      </section>
    </>
  )
}

export default cardList
