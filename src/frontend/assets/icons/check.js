import * as React from 'react'

function SvgComponent (props) {
  return (
    <svg
      stroke='currentColor'
      fill='#fff'
      strokeWidth={0}
      viewBox='0 0 512 512'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M256 48C142 48 48 142 48 256s94 208 208 208 208-94 208-208S370 48 256 48zm-43 319L107 260l30-30 76 77 162-162 30 30-192 192z'
        stroke='none'
      />
    </svg>
  )
}

export default SvgComponent
