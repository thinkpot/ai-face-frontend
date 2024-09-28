// AuthCallback.js
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function AuthCallback() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const code = query.get('code');

    if (code) {
      fetch('/api/google-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      })
        .then(response => response.json())
        .then(data => {
          localStorage.setItem('authToken', data.token);
          navigate('/dashboard'); // Redirect to the dashboard or other page
        })
        .catch(error => console.error('Login failed', error));
    }
  }, [location.search, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center">Authenticating...</h1>
      </div>
    </div>
  );
}

export default AuthCallback;
