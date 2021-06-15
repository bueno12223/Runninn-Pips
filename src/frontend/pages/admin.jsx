import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getTokens, validateTransaccion } from '../actions'
function admin ({ getTokens, tokens, validateTransaccion }) {
  useEffect(() => {
    getTokens()
  }, [])
  const handleValidate = (url) => {
    validateTransaccion(url)
  }
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
            <button onClick={() => handleValidate(e.redirect_url)}>Validar pago</button>
          </li>
        ))
    }
      </ul>
    </div>
  )
}
const mapStateToProps = {
  getTokens,
  validateTransaccion
}
const mapDispatchToProps = state => {
  return {
    tokens: state.tokens
  }
}
export default connect(mapDispatchToProps, mapStateToProps)(admin)
