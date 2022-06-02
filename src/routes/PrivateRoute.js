import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'

//AppRouter is defined all of children routes
//So we can use children routes in PrivateRoute as props
//Children is a array compoents
export const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext)
    const { pathname, search } = useLocation();

    localStorage.setItem('lastpath', pathname + search);

    

    return user.logged
        ? children
        : <Navigate to="/login"/>
}

