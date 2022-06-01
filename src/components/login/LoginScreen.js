import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';


const LoginScreen = () => {

  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext)

  const handleLogin = () => {

      const action = {
          type: types.login,
          payload: {name: 'David'}
          
      }

      dispatch(action)

      navigate('/marvel', {
        replace: true
      })      
  }

  return (
    <div className="container mt-5">
        <h1>Login Screen</h1>
        <hr />

        <button 
        className="btn btn-primary"
        onClick={handleLogin}
        >
          Login
        
        </button>
    </div>
  )
}

export default LoginScreen