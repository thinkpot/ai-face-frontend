import React from 'react';
import GoogleLoginButton from './GoogleLoginButtonNoRedirect';

function LoginModal({ isOpen, onClose, onLoginSuccess, onLoginError }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
        <h2 className="text-2xl font-bold mb-4">You are not logged in</h2>
        <p className="mb-4">Please log in to continue with the upload process.</p>

        {/* Google Login Button */}
        <GoogleLoginButton 
          onLoginSuccess={onLoginSuccess}  
          onLoginError={onLoginError}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default LoginModal;
