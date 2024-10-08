import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function StyleSelection() {
  const [selectedStyleId, setSelectedStyleId] = useState(null);
  const [styles, setStyles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('professional'); // Default tab
  const location = useLocation();
  const navigate = useNavigate();
  const { gender } = location.state || {};

  // Fetch styles from the backend based on the selected tab
  const fetchStyles = async (tab) => {
    try {
      setLoading(true);
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/styles/${gender}/${tab}`);
      setStyles(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching styles:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (gender) {
      fetchStyles(activeTab);
    }
  }, [gender, activeTab]);

  // Handle style selection
  const handleStyleSelection = (id) => {
    setSelectedStyleId(id);
  };

  // Handle generating the image
  const handleGenerateImage = () => {
    
    const selectedStyle = styles.find((style) => style.name === selectedStyleId);
  
    if (selectedStyleId) {
      
      navigate('/model-name', { state: { gender, style: selectedStyle.url } });
    } else {
      alert('Please select a style.');
    }
  };

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedStyleId(null); // Reset selected style when tab changes
    fetchStyles(tab); // Fetch styles for the new tab
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-4">Select a Style</h1>
      <p className="text-xl text-gray-600 mb-8 text-center">Choose a style for your generated image.</p>

      {/* Pills Tabs */}
      <div className="flex space-x-4 mb-8">
        {['professional', 'dating'].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`px-4 py-2 rounded-full text-lg font-semibold transition-colors duration-300 
                        ${activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {loading ? (
        <p>Loading styles...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 h-[500px] overflow-y-auto p-4 bg-white rounded-lg shadow-lg">
          {styles.map((style) => (
            <div
              key={style.name}
              onClick={() => handleStyleSelection(style.name)}
              className={`cursor-pointer p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 ${selectedStyleId === style.name ? 'border-4 border-blue-500' : 'border-4 border-transparent'
                }`}
            >
              <img
                src={style.url}
                alt={style.name}
                className="w-full h-auto aspect-[0.75/1] object-cover rounded"
              />
              {/* <p className="mt-2 text-lg font-semibold">{style.name}</p> */}
            </div>
          ))}
        </div>
      )}

      {/* Generate Button */}
      <button
        onClick={handleGenerateImage}
        className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl"
      >
        Generate Image
      </button>
    </div>
  );
}

export default StyleSelection;
