import React from 'react'
import Nav from '../navbar/Nav'
import { Foot } from '../foot/Foot'

function Layout({children}) {
  return (
    <div>
      <Nav/>
      <div className="contact">
         {children}
      </div>
      <Foot/>
    </div>
  )
}

export default Layout
