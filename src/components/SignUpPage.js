// src/components/SignUpPage.js
import React from 'react';
import GoogleLoginButton from './GoogleLoginButton';

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <p className="text-lg mb-6">Sign up to continue with Google.</p>
        <GoogleLoginButton />
      </div>
    </div>
  );
};

export default SignUpPage;
