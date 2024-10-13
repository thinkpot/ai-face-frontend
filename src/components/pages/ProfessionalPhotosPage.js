import React, { useState } from 'react';
import { Camera, Linkedin, Briefcase, Image } from 'lucide-react';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import CreateHeadshotButton from '../CreateHeadshotButton';
import { Helmet } from "react-helmet";

const ProfessionalPhotosPage = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const images = [
        "professional/professional_1.jpg",
        "professional/professional_2.jpg",
        "professional/professional_3.jpg",
        "professional/professional_4.jpg",
        "professional/professional_5.jpg",
        "professional/professional_6.jpg",
        "professional/professional_7.jpg",
        "professional/professional_8.jpeg",


    ];
    const navigate = useNavigate();
    const handleCreateHeadshot = () => {
        navigate('/gender');
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <Helmet>
                <title>AI Professional Headshot Generator | LinkedIn and Business Photos</title>
                <meta name="description" content="Create professional AI-generated headshots for LinkedIn and business profiles with Tasvir. Generate high-quality business and corporate photos using AI for free." />
                <meta name="keywords" content="professional photo ai, professional headshots, headshotpro, ai business photo, ai profile picture generator, ai professional photo generator, linkdin headshot generator, ai corporate headshot free , ai professional headshot generator, generate headshots using ai free, professional headshot ai free, betterpic" />
                <meta name="author" content="Tasvir" />
            </Helmet>

            <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <section className="text-center mb-20">
                    <div className="inline-block">
                        <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-7xl mb-4">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                                Professional Photos
                            </span>
                        </h1>
                        <div className="flex items-center justify-center">
                            <div className="h-1 w-1/3 bg-blue-600 rounded-full"></div>
                            <span className="px-4 text-3xl font-bold text-blue-600">by Tasvir</span>
                            <div className="h-1 w-1/3 bg-blue-600 rounded-full"></div>
                        </div>
                    </div>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600 sm:text-2xl">
                        Elevate your professional presence with AI-generated headshots tailored for LinkedIn and beyond.
                    </p>
                </section>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
                    <div className="p-8">
                        <div className="flex items-center justify-center mb-6">
                            <Camera className="text-blue-500 mr-3" size={32} />
                            <h2 className="text-3xl font-bold text-gray-900">Create Your Perfect Headshot</h2>
                        </div>
                        <p className="text-center mb-8 text-gray-600 max-w-2xl mx-auto">
                            Stand out on professional platforms with high-quality, AI-generated headshots that capture your best professional self.
                        </p>
                        <div className="text-center">
                            <button
                                onClick={handleCreateHeadshot}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            >
                                Generate Your Headshot
                            </button>
                            {/* <CreateHeadshotButton onClick={() => window.location.href = '/gender'} text={"Generate Your Headshot"} /> */}
                        </div>
                    </div>

                    <div className="px-8 pb-8">
                        {/* <div className="aspect-w-3 aspect-h-2 mb-4">
              <img 
                src={images[selectedImage]} 
                alt={`Professional headshot ${selectedImage + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div> */}
                        <div className="grid grid-cols-4 gap-4">
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    className={`w-full h-full object-cover rounded-md cursor-pointer transition duration-300 ease-in-out ${index === selectedImage ? 'ring-4 ring-blue-500' : 'hover:opacity-75'}`}
                                    onClick={() => setSelectedImage(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <FeatureCard
                        icon={<Linkedin className="text-blue-500" size={24} />}
                        title="LinkedIn Ready"
                        description="Perfect for your LinkedIn profile, making a strong first impression."
                    />
                    <FeatureCard
                        icon={<Briefcase className="text-blue-500" size={24} />}
                        title="Professional Look"
                        description="Tailored styles for various industries and corporate environments."
                    />
                    <FeatureCard
                        icon={<Image className="text-blue-500" size={24} />}
                        title="Multiple Options"
                        description="Generate several options to choose your favorite professional look."
                    />
                </div>

                <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                    <h3 className="text-2xl font-bold mb-4 text-blue-800">Why Choose Tasvir for Professional Photos?</h3>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                            <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            High-quality, realistic results powered by advanced AI
                        </li>
                        <li className="flex items-start">
                            <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Save time and money compared to traditional photo shoots
                        </li>
                        <li className="flex items-start">
                            <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Easily update your professional image across all platforms
                        </li>
                        <li className="flex items-start">
                            <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Consistent, polished look for all your professional needs
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
};

const FeatureCard = ({ icon, title, description }) => (
    <div className="bg-white rounded-xl shadow-md p-6 transition duration-300 ease-in-out hover:shadow-lg">
        <div className="text-blue-500 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

export default ProfessionalPhotosPage;