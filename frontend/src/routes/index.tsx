import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {
    HomePage,
    AboutPage,
} from '../pages'

export enum EnumRoutes {
  home = '/',
  about = '/about',
}

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
        </Routes>
    )
}
