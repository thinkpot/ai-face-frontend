import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Loader2, Camera } from 'lucide-react';

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col items-center p-8"
    >
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="text-5xl font-bold mb-4 text-blue-800"
      >
        Select a Style
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-gray-700 mb-8 text-center max-w-2xl"
      >
        Choose a style for your generated image that best represents you.
      </motion.p>

      {/* Pills Tabs */}
      <motion.div
        className="flex space-x-4 mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {['professional', 'dating'].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 
                        ${activeTab === tab
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-blue-600 hover:bg-blue-100'}`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </motion.div>

      {loading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center space-x-2"
        >
          <Loader2 className="animate-spin" />
          <p className="text-lg">Loading styles...</p>
        </motion.div>
      ) : (
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-h-[600px] overflow-y-auto p-6 bg-white rounded-xl shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          {styles.map((style) => (
            <motion.div
              key={style.name}
              onClick={() => handleStyleSelection(style.name)}
              className={`cursor-pointer bg-white rounded-lg shadow-md transition-all duration-300 
                          ${selectedStyleId === style.name
                  ? 'ring-4 ring-blue-500 shadow-lg'
                  : 'hover:shadow-lg'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={style.url}
                alt={style.name}
                className="w-full h-auto aspect-[0.75/1] object-cover rounded-t-lg"
              />
              {/* <p className="p-2 text-center text-sm font-medium text-gray-700">{style.name}</p> */}
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Generate Button */}
      <motion.button
        onClick={handleGenerateImage}
        className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-lg flex items-center space-x-2"
        whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0,0,0,0.2)" }}
        whileTap={{ scale: 0.95 }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Camera size={24} />
        <span>Generate Image</span>
      </motion.button>
    </motion.div>
  );
}

export default StyleSelection;