// src/components/SignUpPage.js
import React from 'react';
import GoogleLoginButton from './GoogleLoginButton';

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="w-full max-w-lg bg-white border-2 border-gray-100 rounded-3xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-[#03045E]">
          Create Your Account
        </h1>
        <p className="text-lg text-center text-gray-600 mb-10">
          Sign up to start creating stunning AI-generated headshots with Tasvir!
        </p>

        <GoogleLoginButton />

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            By continuing, you agree to our{" "}
            <span className="text-[#03045E] cursor-pointer">Terms of Service</span> and{" "}
            <span className="text-[#03045E] cursor-pointer">Privacy Policy</span>.
          </p>
        </div>
      </div>

      {/* Design accents */}
      <div className="absolute inset-0 w-full h-full flex justify-center items-center pointer-events-none">
        {/* Accent circles */}
        <div className="w-48 h-48 bg-gradient-to-r from-[#03045E] to-gray-700 opacity-10 rounded-full absolute top-10 left-10"></div>
        <div className="w-64 h-64 bg-gradient-to-r from-[#03045E] to-gray-700 opacity-10 rounded-full absolute bottom-10 right-10"></div>
      </div>
    </div>
  );
};

export default SignUpPage;
