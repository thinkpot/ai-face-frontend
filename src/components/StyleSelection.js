import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Define styles based on gender
const maleStyles = [
  { id: 1, name: 'Masculine Style 1', image: '/male_styles/male_style_1.jpg' },
  { id: 2, name: 'Masculine Style 2', image: '/male_styles/male_style_2.jpg' },
  { id: 3, name: 'Masculine Style 3', image: '/male_styles/male_style_3.jpg' },
  { id: 4, name: 'Masculine Style 4', image: '/male_styles/male_style_4.jpg' },
  { id: 5, name: 'Masculine Style 5', image: '/male_styles/male_style_5.jpg' },
  { id: 6, name: 'Masculine Style 6', image: '/male_styles/male_style_6.jpg' },
  { id: 7, name: 'Masculine Style 7', image: '/male_styles/male_style_7.jpg' },
  { id: 8, name: 'Masculine Style 8', image: '/male_styles/male_style_8.jpg' },
  { id: 9, name: 'Masculine Style 9', image: '/male_styles/male_style_9.jpg' },
  { id: 10, name: 'Masculine Style 10', image: '/male_styles/male_style_10.jpg' },
];

const femaleStyles = [
  { id: 1, name: 'Feminine Style 1', image: '/female_styles/female_style_1.jpg' },
  { id: 2, name: 'Feminine Style 2', image: '/female_styles/female_style_2.jpg' },
  { id: 3, name: 'Feminine Style 3', image: '/female_styles/female_style_3.jpg' },
  { id: 4, name: 'Feminine Style 4', image: '/female_styles/female_style_4.jpg' },
  { id: 5, name: 'Feminine Style 5', image: '/female_styles/female_style_5.jpg' },
  { id: 6, name: 'Feminine Style 6', image: '/female_styles/female_style_6.jpg' },
  { id: 7, name: 'Feminine Style 7', image: '/female_styles/female_style_7.jpg' },
  { id: 8, name: 'Feminine Style 8', image: '/female_styles/female_style_8.jpg' },
  { id: 9, name: 'Feminine Style 9', image: '/female_styles/female_style_9.jpg' },
  { id: 10, name: 'Feminine Style 10', image: '/female_styles/female_style_10.jpg' },
];

function StyleSelection() {
  const [selectedStyleId, setSelectedStyleId] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { gender } = location.state || {};

  const styles = gender === 'male' ? maleStyles : femaleStyles;

  const handleStyleSelection = (id) => {
    setSelectedStyleId(id);
  };

  const handleGenerateImage = () => {
    const selectedStyle = styles.find(style => style.id === selectedStyleId);
    if (selectedStyle) {
      navigate('/upload', { state: { gender, style: selectedStyle } });
    } else {
      alert("Please select a style.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-4">Select a Style</h1>
      <p className="text-xl text-gray-600 mb-8 text-center">Choose a style for your generated image.</p>

      {/* Container with overflow */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 h-[500px] overflow-y-auto p-4 bg-white rounded-lg shadow-lg">
        {styles.map((style) => (
          <div
            key={style.id}
            onClick={() => handleStyleSelection(style.id)}
            className={`cursor-pointer p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
              selectedStyleId === style.id ? 'border-4 border-blue-500' : 'border-4 border-transparent'
            }`}
          >
            <img
              src={style.image}
              alt={style.name}
              className="w-full h-auto aspect-[0.75/1] object-cover rounded"
            />
            <p className="mt-2 text-lg font-semibold">{style.name}</p>
          </div>
        ))}
      </div>

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
