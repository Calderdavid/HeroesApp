import React, { useReducer, useEffect } from 'react'
import { AuthContext } from './auth/authContext'
import { authReducer } from './auth/authReducer'
import AppRouter from './routes/AppRouter'

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false }
}

const HeroesApp = () => {

  const [user, dispatch] = useReducer( authReducer, {}, init )

  useEffect(() => {
    if(!user) return;

    localStorage.setItem('user', JSON.stringify(user))
  }, [user])
  

  
  return (
    //authContext.Provider have to provide information to all components that are inside the context
    //the information inside of the provider will be available to all components that are inside the context
      <AuthContext.Provider value = {{
        user,
        dispatch
      }}>
        <AppRouter />
      </AuthContext.Provider>
  )
}

export default HeroesApp