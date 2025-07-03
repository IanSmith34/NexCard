import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { useAuth } from '../../contexts/AuthContext';

type AuthMode = 'login' | 'register' | 'forgot-password';

const AuthForm: React.FC = () => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const { login, register, forgotPassword, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      if (mode === 'login') {
        await login(email, password);
      } else if (mode === 'register') {
        if (!name) {
          setError('Name is required');
          return;
        }
        await register(email, password, name);
      } else if (mode === 'forgot-password') {
        await forgotPassword(email);
        alert('If an account with that email exists, we have sent password reset instructions.');
        setMode('login');
      }
    } catch (err) {
      setError('Authentication failed. Please try again.');
    }
  };

  const switchMode = (newMode: AuthMode) => {
    setMode(newMode);
    setError('');
  };

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">
          {mode === 'login' ? 'Welcome Back' : mode === 'register' ? 'Create Account' : 'Reset Password'}
        </h2>
        <p className="mt-2 text-gray-600">
          {mode === 'login'
            ? 'Sign in to access your digital business cards'
            : mode === 'register'
            ? 'Create an account to get started with digital business cards'
            : 'Enter your email to receive password reset instructions'}
        </p>
      </div>

      {error && (
        <div className="mb-4 p-3 rounded-md bg-red-50 text-red-600 text-sm border border-red-200">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === 'register' && (
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            leftIcon={<User size={18} />}
          />
        )}

        <Input
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          leftIcon={<Mail size={18} />}
        />

        {mode !== 'forgot-password' && (
          <Input
            label="Password"
            type="password"
            placeholder={mode === 'login' ? 'Enter your password' : 'Create a password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            leftIcon={<Lock size={18} />}
          />
        )}

        <Button
          type="submit"
          variant="primary"
          fullWidth
          isLoading={isLoading}
          rightIcon={<ArrowRight size={18} />}
          className="mt-2"
        >
          {mode === 'login' ? 'Sign In' : mode === 'register' ? 'Create Account' : 'Send Reset Instructions'}
        </Button>
      </form>

      <div className="mt-6 text-center text-sm">
        {mode === 'login' ? (
          <>
            <button 
              onClick={() => switchMode('forgot-password')}
              className="text-primary-600 hover:text-primary-800 font-medium"
            >
              Forgot password?
            </button>
            <p className="mt-4">
              Don't have an account?{' '}
              <button
                onClick={() => switchMode('register')}
                className="text-primary-600 hover:text-primary-800 font-medium"
              >
                Sign up
              </button>
            </p>
          </>
        ) : mode === 'register' ? (
          <p>
            Already have an account?{' '}
            <button
              onClick={() => switchMode('login')}
              className="text-primary-600 hover:text-primary-800 font-medium"
            >
              Sign in
            </button>
          </p>
        ) : (
          <p>
            Remember your password?{' '}
            <button
              onClick={() => switchMode('login')}
              className="text-primary-600 hover:text-primary-800 font-medium"
            >
              Sign in
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;