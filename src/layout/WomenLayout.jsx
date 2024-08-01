import React from 'react'
import { Outlet } from 'react-router-dom'
import WomenNavbar from './WomenNavbar'

const WomenLayout = () => {
  return (
    <div>
      <WomenNavbar />
    
      <Outlet />
    </div>
  )
}

export default WomenLayout
