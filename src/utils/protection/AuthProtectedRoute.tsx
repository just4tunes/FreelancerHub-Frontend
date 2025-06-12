import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../hooks/userContext';

const AuthProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { accessToken, loading } = useContext(UserContext);
  console.log('AuthProtectedRoute: Token exists?', !!accessToken, 'Loading?', loading);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <span className="text-gray-700 text-lg">Checking authentication...</span>
      </div>
    );
  }

  if (!accessToken) {
    console.log('AuthProtectedRoute: Redirecting to /auth/login');
    return <Navigate to="/auth/login" replace />;
  }

  return <>{children}</>;
};

export default AuthProtectedRoute;

