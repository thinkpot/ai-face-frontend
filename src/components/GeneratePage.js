import React from 'react';
import { useLocation } from 'react-router-dom';

function GeneratePage() {
  const location = useLocation();
  const { gender } = location.state || {};

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Generate AI Image</h1>
        <p className="text-xl text-gray-600 mb-8">You selected: {gender}</p>
        {/* Add further functionality here */}
      </div>
    </div>
  );
}

export default GeneratePage;
