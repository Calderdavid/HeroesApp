import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import DashboardRoutes from './DashboardRoutes'
import LoginScreen from '../components/login/LoginScreen'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'


const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={
              <PublicRoute>
                <LoginScreen/>
              </PublicRoute>
            } />

            <Route path="/*" elemen={
              //PrivateRoute verify if the user is logged in
              <PrivateRoute>
                  <DashboardRoutes/>
              </PrivateRoute>
              }
            />
            <Route path="/*" element={<DashboardRoutes/>}/>

        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter