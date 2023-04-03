import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'


export const WebsiteLayout = () => {
  return (
    <div className='bg-black flex flex-col justify-between'>
        <div className="bg-gradient-to-b from-primaryColor_darkTurquoise/20 to-secondaryColor_darkPurple/20">
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    </div>
  )
}
