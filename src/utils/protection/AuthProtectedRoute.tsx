import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../hooks/userContext';

const AuthProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { accessToken, loading } = useContext(UserContext);

  // Still loading the auth state? You can return a loader/spinner here
  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <span className="text-gray-700 text-lg">Checking authentication...</span>
      </div>
    );
  }

  // Not logged in? Redirect to login
  if (!accessToken) {
    return <Navigate to="/auth/login" replace />;
  }

  // Logged in? Show the protected route
  return <>{children}</>;
};

export default AuthProtectedRoute;

