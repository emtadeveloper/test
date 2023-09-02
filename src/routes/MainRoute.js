import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserProvider } from '../context'
import Home from '../pages/Home/Home'
import NotFound from '../pages/NotFound/NotFound'
import AboutPage from '../pages/About/AboutPage'

const MainRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<UserProvider><Home /></UserProvider>} />
            <Route path='/about-me' element={<AboutPage />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default MainRoute
