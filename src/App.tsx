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
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// Dashboard Pages
import ClientDashboard from './pages/dashboard/ClientDashboard';
import CoachDashboard from './pages/dashboard/CoachDashboard';
import ClientProgress from './pages/dashboard/ClientProgress';
import ProgramsList from './pages/dashboard/ProgramsList';
import SessionsPage from './pages/dashboard/SessionsPage';
import ClientsPage from './pages/dashboard/ClientsPage';
import MessagesPage from './pages/dashboard/MessagesPage';

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
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="reservation" element={<BookingPage />} />
          <Route path="connexion" element={<LoginPage />} />
          <Route path="inscription" element={<RegisterPage />} />
        </Route>
        
        {/* Dashboard routes with DashboardLayout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="client" element={<ClientDashboard />} />
          <Route path="coach" element={<CoachDashboard />} />
          <Route path="progres" element={<ClientProgress />} />
          <Route path="programmes" element={<ProgramsList />} />
          <Route path="seances" element={<SessionsPage />} />
          <Route path="clients" element={<ClientsPage />} />
          <Route path="messages" element={<MessagesPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;