import * as React from 'react'

function SvgComponent (props) {
  return (
    <svg
      width={28}
      height={28}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M18.328 14.828a7 7 0 10-8.656 0 11.666 11.666 0 00-7.257 9.544 1.174 1.174 0 102.333.256 9.333 9.333 0 0118.55 0 1.166 1.166 0 001.167 1.039h.128a1.167 1.167 0 001.027-1.284 11.666 11.666 0 00-7.292-9.555zM14 14a4.667 4.667 0 110-9.334A4.667 4.667 0 0114 14z'
        fill='#DDD'
      />
    </svg>
  )
}

export default SvgComponent
