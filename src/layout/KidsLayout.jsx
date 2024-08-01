import React from 'react'
import KidsNavbar from './KidsNavbar'

import { Outlet } from 'react-router-dom'

const KidsLayout = () => {
  return (
    <div>
      <KidsNavbar />
     
      <Outlet />
    </div>
  )
}

export default KidsLayout
