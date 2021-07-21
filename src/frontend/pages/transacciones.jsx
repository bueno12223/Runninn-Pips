import React from 'react'
import TransCard from '../components/home/transCard'
import { useSelector } from 'react-router-dom'
function transacciones () {
  const transactions = useSelector(state => state.user.transactions)
  return (
    <ul>
      {transactions.map(data => (
        <TransCard key={data._id} {...data} />
      ))}
    </ul>
  )
}

export default transacciones
