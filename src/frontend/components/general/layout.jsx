import React from 'react'
import Footer from './footer'
function layout ({ children }) {
  return (
    <>
      {children}
      <Footer />

    </>
  )
}

export default layout
