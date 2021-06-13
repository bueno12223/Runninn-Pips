import * as React from 'react'

function SvgComponent (props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={500}
      height={495}
      viewBox='0 0 375 371.2'
      {...props}
    >
      <defs>
        <clipPath id='prefix__a'>
          <path d='M0 0h375v52H0zm0 0' />
        </clipPath>
        <clipPath id='prefix__b'>
          <path d='M0 51h375v320H0zm0 0' />
        </clipPath>
        <clipPath id='prefix__c'>
          <path d='M97 303h181v68H97zm0 0' />
        </clipPath>
      </defs>
      <g clipPath='url(#prefix__a)'>
        <path d='M0 0h375v52H0zm0 0' fill='#5b5656' />
      </g>
      <g clipPath='url(#prefix__b)'>
        <path d='M0 52h375v322H0zm0 0' fill='#f6ddcb' />
      </g>
      <path
        d='M20 19h13v13H20zm26 0h12v13H46zm25 0h13v13H71zm91 0h193v13H162zm0 0'
        fill='#fff'
      />
      <path d='M181 97h13v32h-13zm0 0' fill='#5b5656' />
      <g clipPath='url(#prefix__c)'>
        <path
          d='M278 355v19H97v-19c0-29 23-52 52-52h77c29 0 52 23 52 52zm0 0'
          fill='#5b5656'
        />
      </g>
      <path d='M78 129h219v174H78zm0 0' fill='#fff' />
      <path d='M112 179l9-9 45 45-9 9zm0 0' fill='#5b5656' />
      <path
        d='M166 179l-9-9-18 18-18-18-9 9 18 18-18 18 9 9 18-18 18 18 9-9-18-18zm43 0l9-9 45 45-9 9zm0 0'
        fill='#5b5656'
      />
      <path
        d='M263 179l-9-9-18 18-18-18-9 9 18 18-18 18 9 9 18-18 18 18 9-9-18-18zm34-11h26v77h-26zm-245 0h26v77H52zm0 0'
        fill='#5b5656'
      />
      <path
        d='M149 277a39 39 0 1177 0zm51-187a13 13 0 01-3 9 13 13 0 113-9zm0 0'
        fill='#f56c5d'
      />
    </svg>
  )
}

export default SvgComponent
