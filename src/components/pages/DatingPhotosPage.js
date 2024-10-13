import React, { useState } from 'react';
import { Camera, Heart, Users, Image } from 'lucide-react';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";

const DatingPhotosPage = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const images = [
        "dating/dating_1.png",
        "dating/dating_2.png",
        "dating/dating_3.jpg",
        "dating/dating_4.jpg",
        "dating/dating_5.jpg",
        "dating/dating_6.jpg",
        "dating/dating_7.png",
        "dating/dating_8.png",
    ];
    const navigate = useNavigate();

    const handleCreateDatingPhoto = () => {
        navigate('/gender')
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100">
            <Helmet>
                <title>AI Dating Photo Generator | Create Realistic Dating Photos</title>
                <meta name="description" content="Generate ultra-realistic AI photos for dating apps with Tasvir. Create AI-generated dating profile photos that enhance your online presence and attract matches." />
                <meta name="keywords" content="ai dating photo generator free , free ai dating app photo generator, best ai photo generator for dating apps, ai dating photo generator for free, ai dating photos, ai dating app photos, dating photo ai, the ultra realistic photos ai dating, ai dating photos free, ai photos dating, AI dating photo generator, best AI photo generator for dating apps, AI dating photos, free AI dating photo generator, AI dating app photos, ultra-realistic AI dating photos" />
                <meta name="author" content="Tasvir" />
            </Helmet>

            <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <section className="text-center mb-20">
                    <div className="inline-block">
                        <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-7xl mb-4">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-red-500">
                                Dating Photos
                            </span>
                        </h1>
                        <div className="flex items-center justify-center">
                            <div className="h-1 w-1/3 bg-pink-500 rounded-full"></div>
                            <span className="px-4 text-3xl font-bold text-pink-500">by Tasvir</span>
                            <div className="h-1 w-1/3 bg-pink-500 rounded-full"></div>
                        </div>
                    </div>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600 sm:text-2xl">
                        Enhance your dating profile with AI-generated photos tailored for Tinder, social media, and beyond.
                    </p>
                </section>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
                    <div className="p-8">
                        <div className="flex items-center justify-center mb-6">
                            <Camera className="text-pink-500 mr-3" size={32} />
                            <h2 className="text-3xl font-bold text-gray-900">Create Your Perfect Dating Photo</h2>
                        </div>
                        <p className="text-center mb-8 text-gray-600 max-w-2xl mx-auto">
                            Stand out on dating platforms with high-quality, AI-generated photos that capture your best self and personality.
                        </p>
                        <div className="text-center">
                            <button
                                onClick={handleCreateDatingPhoto}
                                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50"
                            >
                                Generate Your Dating Photo
                            </button>
                        </div>
                    </div>

                    <div className="px-8 pb-8">
                        <div className="grid grid-cols-4 gap-4">
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    className={`w-full h-full object-cover rounded-md cursor-pointer transition duration-300 ease-in-out ${index === selectedImage ? 'ring-4 ring-pink-500' : 'hover:opacity-75'}`}
                                    onClick={() => setSelectedImage(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <FeatureCard
                        icon={<Heart className="text-pink-500" size={24} />}
                        title="Tinder Ready"
                        description="Perfect for your Tinder profile, making a strong first impression."
                    />
                    <FeatureCard
                        icon={<Users className="text-pink-500" size={24} />}
                        title="Social Media Optimized"
                        description="Ideal for Instagram, Facebook, and other social platforms."
                    />
                    <FeatureCard
                        icon={<Image className="text-pink-500" size={24} />}
                        title="Multiple Options"
                        description="Generate several options to showcase different aspects of your personality."
                    />
                </div>

                <div className="bg-pink-50 rounded-2xl p-8 border border-pink-100">
                    <h3 className="text-2xl font-bold mb-4 text-pink-800">Why Choose Tasvir for Dating Photos?</h3>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                            <svg className="h-6 w-6 text-pink-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            High-quality, natural-looking results powered by advanced AI
                        </li>
                        <li className="flex items-start">
                            <svg className="h-6 w-6 text-pink-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Save time and effort compared to organizing a photo shoot
                        </li>
                        <li className="flex items-start">
                            <svg className="h-6 w-6 text-pink-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Easily update your dating profile across multiple platforms
                        </li>
                        <li className="flex items-start">
                            <svg className="h-6 w-6 text-pink-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Showcase different aspects of your personality and interests
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
        <div className="text-pink-500 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

export default DatingPhotosPage;