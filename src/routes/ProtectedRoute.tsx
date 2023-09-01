import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProtectedRoute = () => {
  const [user, setUser] = useState(true);

  if (!user) {
    toast.error('로그인이 필요한 서비스예요 😭');
    return <Navigate to="/auth/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
