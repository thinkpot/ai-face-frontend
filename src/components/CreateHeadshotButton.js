import React from 'react';

const CreateHeadshotButton = ({ text = "Create Your Headshot", onClick }) => {
    return (
        <button
            onClick={onClick}
            className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
            {text}
        </button>
    );
};

export default CreateHeadshotButton;
