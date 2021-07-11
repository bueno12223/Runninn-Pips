import React from 'react'
import Footer from './footer'
import Header from './header'
function layout ({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />

    </>
  )
}

export default layout
