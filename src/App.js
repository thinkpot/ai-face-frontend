import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GenderSelection from './components/GenderSelection';
import GeneratePage from './components/GeneratePage';  // Create this component for the next page
import StyleSelection from './components/StyleSelection';
import UploadPage from './components/UploadPage';
import AuthCallback from './components/AuthCallback';
import Header from './components/Header';
import SignUpPage from './components/SignUpPage';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
import ModelNamePage from './components/ModelNamePage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsCondition'
import ContactUs from './components/ContactUs'
import AboutUs from './components/AboutUs'
import RefundPolicy from "./components/RefundPolicy"; // Adjust path accordingly
import PricingPage from './components/PricingPage'
import RedeemInvite from './components/RedeemInvite';
import ProfessionalPhotosPage from './components/pages/ProfessionalPhotosPage';
import DatingPhotosPage from './components/pages/DatingPhotosPage';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gender" element={<GenderSelection />} />
        <Route path="/styles" element={<StyleSelection />} />
        <Route path="/model-name" element={<ModelNamePage />} />
        <Route path="/generate" element={<GeneratePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/signup" element={<SignUpPage />} /> {/* Add signup route */}
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/professional-ai-photos" element={<ProfessionalPhotosPage />} />
        <Route path="/dating-ai-photos" element={<DatingPhotosPage />} />
        <Route path="/redeem-invite/:inviteCode" element={<RedeemInvite />} />

        
      </Routes>
    </Router>
  );
}

export default App;
