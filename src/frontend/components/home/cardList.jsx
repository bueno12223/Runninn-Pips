import React from 'react'
import Card from './card'
import './styles/cardList.scss'
function cardList () {
  const data = [
    { title: 'Example #1', description: 'lorem' },
    { title: 'Example #1', description: 'lorem' },
    { title: 'Example #1', description: 'lorem' },
    { title: 'Example #1', description: 'lorem' },
    { title: 'Example #1', description: 'lorem' },
    { title: 'Example #1', description: 'lorem' },
    { title: 'Example #1', description: 'lorem' }
  ]
  return (
    <section className='cardList'>
      {
          data.map(PreVideo => (
            <Card key={PreVideo.title} {...PreVideo} />
          ))
      }
    </section>
  )
}

export default cardList
