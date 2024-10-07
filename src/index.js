import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './contexts/AuthContext';
import ReactGA from 'react-ga';

const GA_TRACKING_ID = 'G-ETEZ1Z57FB'; // Replace with your Tracking ID
ReactGA.initialize(GA_TRACKING_ID);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="883200761702-uppioi3l496nqk6tgh6chrnqaasffgki.apps.googleusercontent.com">

    <AuthProvider>
      <App />
    </AuthProvider>

  </GoogleOAuthProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
