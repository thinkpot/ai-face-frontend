import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function GenderSelection() {
    const [selectedGender, setSelectedGender] = useState(null);
    const navigate = useNavigate();

    const handleSelection = (gender) => {
        setSelectedGender(gender);
    };

    const handleGenerate = () => {
        if (selectedGender) {
            navigate('/styles', { state: { gender: selectedGender } });
        } else {
            alert("Please select a gender.");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 flex items-center justify-center">
            <div className="text-center p-8 rounded-xl w-full max-w-4xl">
                <h1 className="text-4xl font-bold mb-4">AI Face Image Generator</h1>
                <p className="text-xl text-gray-600 mb-8">Select your gender to begin generating images</p>

                <div className="flex justify-center space-x-8 mb-8">
                    {/* Male Selection */}
                    <div
                        onClick={() => handleSelection('male')}
                        className={`cursor-pointer p-6 bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 ${selectedGender === 'male' ? 'border-4 border-blue-500' : 'border-4 border-transparent'
                            }`}
                    >
                        <img
                            src="/male.png"
                            alt="Male"
                            className="w-40 h-40 object-cover rounded-full object-top mb-4"
                        />
                        <p className="text-lg font-semibold">Male</p>
                    </div>

                    {/* Female Selection */}
                    <div
                        onClick={() => handleSelection('female')}
                        className={`cursor-pointer p-6 bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 ${selectedGender === 'female' ? 'border-4 border-pink-500' : 'border-4 border-transparent'
                            }`}
                    >
                        <img
                            src="/woman.png"
                            alt="Female"
                            className="w-40 h-40 object-cover rounded-full object-top mb-4"
                        />
                        <p className="text-lg font-semibold">Female</p>
                    </div>
                </div>

                {/* Generate Button */}
                <button
                    onClick={handleGenerate}
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl"
                >
                    Generate
                </button>
            </div>
        </div>
    );
}

export default GenderSelection;
