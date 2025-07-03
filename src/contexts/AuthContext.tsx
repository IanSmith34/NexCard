import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthState, User } from '../types';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, newPassword: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    // Check if user is already logged in
    const checkAuth = async () => {
      try {
        // In a real app, you would check with your backend/auth service
        const savedUser = localStorage.getItem('user');
        
        if (savedUser) {
          const user = JSON.parse(savedUser) as User;
          setAuthState({
            user,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
        } else {
          setAuthState((prev) => ({ ...prev, isLoading: false }));
        }
      } catch (error) {
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
          error: 'Failed to authenticate',
        });
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setAuthState((prev) => ({ ...prev, isLoading: true, error: null }));
      // In a real app, you would make an API call to your auth service
      // Simulating API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock user data - in a real app this would come from your API
      const user: User = {
        id: '1',
        email,
        name: email.split('@')[0],
        role: 'individual',
        createdAt: new Date(),
      };

      localStorage.setItem('user', JSON.stringify(user));

      setAuthState({
        user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setAuthState((prev) => ({
        ...prev,
        isLoading: false,
        error: 'Invalid email or password',
      }));
    }
  };

  const register = async (email: string, password: string, name: string) => {
    try {
      setAuthState((prev) => ({ ...prev, isLoading: true, error: null }));
      // In a real app, you would make an API call to your auth service
      // Simulating API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock user data - in a real app this would come from your API
      const user: User = {
        id: '1',
        email,
        name,
        role: 'individual',
        createdAt: new Date(),
      };

      localStorage.setItem('user', JSON.stringify(user));

      setAuthState({
        user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setAuthState((prev) => ({
        ...prev,
        isLoading: false,
        error: 'Registration failed',
      }));
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    });
  };

  const forgotPassword = async (email: string) => {
    try {
      setAuthState((prev) => ({ ...prev, isLoading: true, error: null }));
      // In a real app, you would make an API call to trigger password reset
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setAuthState((prev) => ({ ...prev, isLoading: false }));
    } catch (error) {
      setAuthState((prev) => ({
        ...prev,
        isLoading: false,
        error: 'Failed to process password reset',
      }));
    }
  };

  const resetPassword = async (token: string, newPassword: string) => {
    try {
      setAuthState((prev) => ({ ...prev, isLoading: true, error: null }));
      // In a real app, you would make an API call to reset password
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setAuthState((prev) => ({ ...prev, isLoading: false }));
    } catch (error) {
      setAuthState((prev) => ({
        ...prev,
        isLoading: false,
        error: 'Failed to reset password',
      }));
    }
  };

  const value = {
    ...authState,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};