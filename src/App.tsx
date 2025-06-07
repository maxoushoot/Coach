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
import SignUpPage from './pages/SignUpPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';

// Dashboard Pages
import ClientDashboard from './pages/dashboard/ClientDashboard';
import CoachDashboard from './pages/dashboard/CoachDashboard';
import ProgressPage from './pages/dashboard/ProgressPage';
import SessionsPage from './pages/dashboard/SessionsPage';
import ProgramsPage from './pages/dashboard/ProgramsPage';
import ClientsPage from './pages/dashboard/ClientsPage';
import MessagesPage from './pages/dashboard/MessagesPage';
import ProfilePage from './pages/dashboard/ProfilePage';
import SettingsPage from './pages/dashboard/SettingsPage';


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
          <Route path="inscription" element={<SignUpPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:id" element={<BlogPostPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        
        {/* Demo coach accessible without inscription */}
        <Route path="demo-coach" element={<DashboardLayout />}>
          <Route index element={<CoachDashboard isDemo />} />
        </Route>

        {/* Dashboard routes with DashboardLayout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="client" element={<ClientDashboard />} />
          <Route path="coach" element={<CoachDashboard />} />
          <Route path="progres" element={<ProgressPage />} />
          <Route path="seances" element={<SessionsPage />} />
          <Route path="programmes" element={<ProgramsPage />} />
          <Route path="clients" element={<ClientsPage />} />
          <Route path="messages" element={<MessagesPage />} />
          <Route path="profil" element={<ProfilePage />} />
          <Route path="parametres" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
