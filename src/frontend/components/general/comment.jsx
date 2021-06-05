import React from 'react'
import user from '../../assets/images/user.png'
function comment () {
  return (
    <li>
      <div className=''>
        <img src={user} alt='' />
        <h4>USER TITLE<p>00/00/00</p></h4>
      </div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, excepturi doloribus enim, asperiores consequatur ratione ex quasi corporis fuga, nulla vel totam vero eligendi ut perspiciatis nihil deleniti expedita qui!</p>
    </li>
  )
}

export default comment
