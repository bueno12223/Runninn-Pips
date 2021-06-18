import React from 'react'

function referredTree ({ upline, downline, ammount }) {
  return (
    <section>
      <h1>Tienes en tu saldo {ammount} de referidos</h1>
      <h2>Fuiste referido por {upline}</h2>
      <h2>Tus referidos</h2>
      <ul>
        {
            downline.map(ref => (
              <li key={ref._id}>{ref.userID} <p>{ref.updated}</p></li>
            ))
        }
      </ul>
    </section>
  )
}

export default referredTree
