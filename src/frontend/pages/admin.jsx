import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getTokens } from '../actions'
function admin ({ getTokens, tokens }) {
  useEffect(() => {
    getTokens()
  }, [])
  if (!tokens) {
    return (<h1>Cargando</h1>)
  }
  return (
    <div>
      <ul>
        {
        tokens.map(e => (
          <li className='list' key={e._id}>
            <img src={e.img_url} alt='transaccion' />
            <h3>{e.userID}</h3>
            <p>{e.userName}</p>
          </li>
        ))
    }
      </ul>
    </div>
  )
}
const mapStateToProps = {
  getTokens
}
const mapDispatchToProps = state => {
  return {
    tokens: state.tokens
  }
}
export default connect(mapDispatchToProps, mapStateToProps)(admin)
