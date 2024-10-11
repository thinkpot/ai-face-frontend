import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { motion } from 'framer-motion';

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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center"
        >
            <Helmet>
                <title>Create Your AI Headshot - Choose Gender | Tasvir</title>
                <meta
                    name="description"
                    content="Start your journey to create personalized AI-generated headshots. Choose your gender to get customized image styles with Tasvir's advanced AI technology."
                />
                <meta name="keywords" content="AI headshot generator, personalized images, choose gender, Tasvir, AI-generated faces, custom headshots" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <motion.div
                className="text-center p-8 w-full max-w-4xl bg-opacity-90"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <motion.h1
                    className="text-5xl font-bold mb-4 text-gray-800"
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    AI Face Image Generator
                </motion.h1>
                <motion.p
                    className="text-xl text-gray-600 mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    Select your gender to begin generating images
                </motion.p>

                <motion.div
                    className="flex justify-center space-x-2 mb-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    {/* Male Selection */}
                    <motion.div
                        onClick={() => handleSelection('male')}
                        className={`cursor-pointer p-8 bg-white rounded-2xl shadow-lg transition-all duration-300 
                                    ${selectedGender === 'male' ? 'ring-4 ring-blue-500 shadow-xl' : 'hover:shadow-xl'}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img
                            src="/male.png"
                            alt="Male"
                            className="w-48 h-48 object-cover rounded-full object-top mb-6"
                        />
                        <p className="text-xl font-semibold text-gray-800">Male</p>
                    </motion.div>

                    {/* Female Selection */}
                    <motion.div
                        onClick={() => handleSelection('female')}
                        className={`cursor-pointer p-8 bg-white rounded-2xl shadow-lg transition-all duration-300 
                                    ${selectedGender === 'female' ? 'ring-4 ring-pink-500 shadow-xl' : 'hover:shadow-xl'}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img
                            src="/woman.png"
                            alt="Female"
                            className="w-48 h-48 object-cover rounded-full object-top mb-6"
                        />
                        <p className="text-xl font-semibold text-gray-800">Female</p>
                    </motion.div>
                </motion.div>

                {/* Generate Button */}
                <motion.button
                    onClick={handleGenerate}
                    className="px-10 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xl font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    Generate
                </motion.button>
            </motion.div>
        </motion.div>
    );
}

export default GenderSelection;