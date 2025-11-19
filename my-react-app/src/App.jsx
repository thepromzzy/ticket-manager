// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import TicketForm from './TicketForm';
import TicketList from './TicketList';
import Signup from './Signup';
import Login from './Login';
import { Toaster, toast } from "react-hot-toast";
import { AuthProvider, useAuth } from './AuthContext';
import './App.css';

// Protected Route Component
function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}

// Dashboard - The main page after login
function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(0);

  const handleNewTicket = () => setRefresh(r => r + 1);

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully ");
    navigate("/login");
  };

  return (
    <div className="container">
      <header className="header">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '5rem',
          padding: '1rem 0'
        }}>
          <h1>Ticket Manager</h1>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5rem',
            fontSize: '1 rem'
          }}>
            <span>Welcome, <strong>{user?.email || 'User'}</strong></span>
            <button
              onClick={handleLogout}
              style={{
                padding: '10px 20px',
                backgroundColor: '#2563eb',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '15px',
                transition: 'background 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#1d4ed8'}
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="hero-section">
          <Toaster position="top-center" />
        </section>

        <section className="form-section">
          <TicketForm onCreated={handleNewTicket} />
        </section>

        <section className="list-section">
          <TicketList key={refresh} />
        </section>
      </main>
    </div>
  );
}

// All Routes
function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Public Routes - Only show when NOT logged in */}
      <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" replace />} />
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" replace />} />

      {/* Protected Dashboard */}
      <Route path="/" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />

      {/* Catch-all redirect */}
      <Route path="*" element={<Navigate to={user ? "/" : "/login"} replace />} />
    </Routes>
  );
}

// Main App Component
function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;