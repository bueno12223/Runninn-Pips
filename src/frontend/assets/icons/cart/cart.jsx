import * as React from 'react'

function SvgComponent (props) {
  return (
    <svg
      {...props}
      width='1em'
      height='1em'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16 4H0v-.75C0 2.56.448 2 1 2h14c.552 0 1 .56 1 1.25V4zm0 2.5V13a1 1 0 01-1 1H1a1 1 0 01-1-1V6.5h16zM4 10a1 1 0 000 2h1a1 1 0 000-2H4z'
        fill='currentColor'
      />
    </svg>
  )
}

export default SvgComponent
