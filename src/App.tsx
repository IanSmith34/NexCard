import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import CardsPage from './pages/CardsPage';
import CreateCardPage from './pages/CreateCardPage';
import EditCardPage from './pages/EditCardPage';
import ViewCardPage from './pages/ViewCardPage';
import TeamPage from './pages/TeamPage';
import AnalyticsPage from './pages/AnalyticsPage';
import SettingsPage from './pages/SettingsPage';
import PricingPage from './pages/PricingPage';
import HelpPage from './pages/HelpPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import { useAuth } from './contexts/AuthContext';

function App() {
  const { isAuthenticated, isLoading } = useAuth();

  // Protected route component
  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    if (isLoading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
        </div>
      );
    }
    
    return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
  };

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/register" element={<AuthPage />} />
      <Route path="/pricing" element={<Layout><PricingPage /></Layout>} />
      <Route path="/card/:id" element={<ViewCardPage />} />
      
      {/* Protected routes */}
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Layout><DashboardPage /></Layout>
        </ProtectedRoute>
      } />
      <Route path="/cards" element={
        <ProtectedRoute>
          <Layout><CardsPage /></Layout>
        </ProtectedRoute>
      } />
      <Route path="/cards/create" element={
        <ProtectedRoute>
          <Layout><CreateCardPage /></Layout>
        </ProtectedRoute>
      } />
      <Route path="/cards/:id/edit" element={
        <ProtectedRoute>
          <Layout><EditCardPage /></Layout>
        </ProtectedRoute>
      } />
      <Route path="/team" element={
        <ProtectedRoute>
          <Layout><TeamPage /></Layout>
        </ProtectedRoute>
      } />
      <Route path="/analytics" element={
        <ProtectedRoute>
          <Layout><AnalyticsPage /></Layout>
        </ProtectedRoute>
      } />
      <Route path="/settings" element={
        <ProtectedRoute>
          <Layout><SettingsPage /></Layout>
        </ProtectedRoute>
      } />
      <Route path="/profile" element={
        <ProtectedRoute>
          <Layout><ProfilePage /></Layout>
        </ProtectedRoute>
      } />
      <Route path="/help" element={
        <ProtectedRoute>
          <Layout><HelpPage /></Layout>
        </ProtectedRoute>
      } />
      
      {/* 404 route */}
      <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
    </Routes>
  );
}

export default App;