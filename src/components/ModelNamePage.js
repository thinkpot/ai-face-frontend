import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ModelNamePage() {
  const [modelName, setModelName] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { gender, style } = location.state || {};

  const handleNext = () => {
    if (!modelName) {
      alert("Please enter a model name.");
      return;
    }
    navigate('/upload', { state: { gender, style, modelName } });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Enter Model Name</h1>
      <p className="text-xl text-gray-600 mb-8 text-center">This name will help you identify your model later.</p>
      
      <input
        type="text"
        value={modelName}
        onChange={(e) => setModelName(e.target.value)}
        placeholder="Enter your model name"
        className="mb-4 p-4 border border-gray-300 rounded-lg w-full max-w-md"
      />

      <button
        onClick={handleNext}
        className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl"
      >
        Next
      </button>
    </div>
  );
}

export default ModelNamePage;
