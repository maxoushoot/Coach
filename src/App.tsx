import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Pages
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import CoachesPage from './pages/CoachesPage';
import CoachProfilePage from './pages/CoachProfilePage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';

// Dashboard Pages
import ClientDashboard from './pages/dashboard/ClientDashboard';
import CoachDashboard from './pages/dashboard/CoachDashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes with MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="fonctionnalites" element={<FeaturesPage />} />
          <Route path="coachs" element={<CoachesPage />} />
          <Route path="coachs/:id" element={<CoachProfilePage />} />
          <Route path="tarifs" element={<PricingPage />} />
          <Route path="a-propos" element={<AboutPage />} />
          <Route path="connexion" element={<LoginPage />} />
        </Route>
        
        {/* Dashboard routes with DashboardLayout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="client" element={<ClientDashboard />} />
          <Route path="coach" element={<CoachDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
