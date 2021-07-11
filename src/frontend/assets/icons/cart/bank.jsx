import * as React from 'react'

function SvgComponent (props) {
  return (
    <svg
      {...props}
      stroke='currentColor'
      fill='currentColor'
      strokeWidth={0}
      viewBox='0 0 1024 1024'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M894 462c31 0 44-40 19-58L531 126a32 32 0 00-38 0L111 404a32 32 0 0019 58h62v374h-72c-4 0-8 4-8 8v52c0 4 4 8 8 8h784c4 0 8-4 8-8v-52c0-4-4-8-8-8h-72V462h62zM381 836H264V462h117v374zm189 0H453V462h117v374zm190 0H642V462h118v374z'
        stroke='none'
      />
    </svg>
  )
}

export default SvgComponent
