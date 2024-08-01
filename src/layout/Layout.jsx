import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Text from '../components/commen/Text'
import DownToUp from '../components/commen/DownToUp'



const Layout = () => {
    return (
        <div>
            <Navbar />
            <DownToUp />
            <main>
                <Outlet />
            </main>
            <Text />
            <Footer />
        </div>
    )
}

export default Layout
