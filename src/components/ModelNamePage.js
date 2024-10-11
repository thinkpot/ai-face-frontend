import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'

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
    <div className="min-h-screen flex flex-col items-center justify-center p-8  bg-gradient-to-br from-blue-100 to-purple-100">

      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="text-5xl font-bold mb-4 text-blue-800"
      >
        Enter Model Name
      </motion.h1>
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
