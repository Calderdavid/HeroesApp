import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DcScreen from '../components/dc/DcScreen'
import SearchScreen from '../components/search/SearchScreen'
import MarvelScreen from '../components/marvel/MarvelScreen'
import Navbar from '../components/ui/NavBar'
// import Hero from '../components/hero/Hero'
import HeroScreen from '../components/hero/HeroScreen'


const DashboardRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className='container'>
          <Routes>
              <Route path="marvel" element={<MarvelScreen/>} />
              <Route path="dc" element={<DcScreen/>} />
              <Route path="search" element={<SearchScreen/>} />

              <Route path="hero/:heroeId" element={<HeroScreen/>} />
          </Routes>
        </div>

    </>
  )
}

export default DashboardRoutes