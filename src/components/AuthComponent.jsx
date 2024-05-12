import React from 'react'
import { Navigate } from 'react-router-dom';

function AuthComponent({ children }) {
  const access_token = window.localStorage.getItem('access_token');

  if(!access_token) {
    return <Navigate to="/signin" />
  }
  
  return (
    <>{children}</>
  )
}

export default AuthComponent