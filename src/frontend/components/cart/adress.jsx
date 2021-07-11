import React from 'react'

function adress () {
  return (
    <form action='' className='adress'>
      <input type='text' name='billingAddr' className='name-input' />
      <input type='text' name='addrLine1' className='name-input' />
      <input type='text' name='addrLine2' className='name-input' />
      <input type='text' name='city' className='name-input' />
      <input type='text' name='phoneNumber' className='name-input' />
    </form>
  )
}

export default adress
