import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const [user,setUser] = useState(false);

  if(!user){
    return <Navigate to='/auth/login' replace />;
  }
  
  return <Outlet />;
}

export default ProtectedRoute
