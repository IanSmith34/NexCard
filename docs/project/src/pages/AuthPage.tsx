import React from 'react';
import { Navigate } from 'react-router-dom';
import { CreditCard } from 'lucide-react';
import AuthForm from '../components/auth/AuthForm';
import { useAuth } from '../contexts/AuthContext';

const AuthPage: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();

  // If already authenticated, redirect to dashboard
  if (isAuthenticated && !isLoading) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mb-6">
            <CreditCard className="h-12 w-12 text-primary-600" />
          </div>
          <AuthForm />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;