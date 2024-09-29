// src/components/GoogleLoginButton.js
import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const GOOGLE_CLIENT_ID = '883200761702-uppioi3l496nqk6tgh6chrnqaasffgki.apps.googleusercontent.com'; // Replace with your Google Client ID

const GoogleLoginButton = () => {
  const handleLoginSuccess = (response) => {

    const profile = jwtDecode(response.credential);
    console.log(response)
    console.log("Profile ", profile.picture)

    if (response.credential) {
      // Send token to your backend for verification and authentication
      fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/google/callback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: response.credential }),
        
      })
        .then(response => response.json())
        .then(data => {
          // Store the JWT token in local storage or state
          localStorage.setItem('token', data.token);
          localStorage.setItem('profilePic', profile.picture);
          window.location.href = '/dashboard'; // Redirect to dashboard or wherever you want
        })
        .catch(error => console.error('Error:', error));
    }
  };

  const handleLoginError = (error) => {
    console.error('Login Failed:', error);
  };

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginError}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
