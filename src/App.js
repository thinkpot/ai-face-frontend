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


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<GenderSelection />} />
        <Route path="/styles" element={<StyleSelection />} />
        <Route path="/generate" element={<GeneratePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/signup" element={<SignUpPage />} /> {/* Add signup route */}
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
        
      </Routes>
    </Router>
  );
}

export default App;
