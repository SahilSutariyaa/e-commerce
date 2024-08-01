import React from 'react'
import MenNavbar from './MenNavbar'
import { Outlet } from 'react-router-dom'

const MenLayout = () => {
    return (
        <div>
            <MenNavbar />
           
            <Outlet />
        </div>
    )
}

export default MenLayout
