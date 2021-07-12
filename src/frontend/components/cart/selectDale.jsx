import React from 'react'

function selectDale ({ name, className, handleChangue, maxNum = [1, 12] }) {
  const options = []
  for (let i = maxNum[0] || 0; i <= maxNum[1]; i++) {
    options.push(i)
  }
  return (
    <select name={name} onChange={handleChangue} className={className} maxLength='2' required>
      <option value='-' defaultValue>-</option>
      {
          options.map(num => (<option value={num} key={num}>{num}</option>))
      }
    </select>
  )
}

export default selectDale
