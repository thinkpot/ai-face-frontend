import React, { useState } from 'react';
import axios from 'axios';

const PromptGenerator = ({ onPromptGenerated }) => {
  const [desire, setDesire] = useState('');
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const generatePrompt = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/generate-prompt`, {
        desire: `${desire}`,
      });
      setGeneratedPrompt(response.data.prompt);
      setIsLoading(false);
    } catch (error) {
      console.error('Error generating prompt:', error);
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt);
    onPromptGenerated(generatedPrompt);
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Automatic Prompt Generator</h3>
      <input
        type="text"
        value={desire}
        onChange={(e) => setDesire(e.target.value)}
        placeholder="Enter your desired image description"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={generatePrompt}
        disabled={isLoading}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        {isLoading ? 'Generating...' : 'Generate Prompt'}
      </button>
      {generatedPrompt && (
        <div className="mt-4">
          <h4 className="font-semibold">Generated Prompt:</h4>
          <p className="mt-2 p-2 bg-gray-100 rounded-md">{generatedPrompt}</p>
          <button
            onClick={handleCopy}
            className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Copy to Prompt Box
          </button>
        </div>
      )}
    </div>
  );
};

export default PromptGenerator;