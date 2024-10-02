import React from 'react';
import Carousel from './Carousel'; // Reuse your working Carousel component
import CreateHeadshotButton from './CreateHeadshotButton';
import logo from '../assets/logo5.png';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate('/'); // Redirect to the homepage when clicking the logo
    };
    return (
        <div className="min-h-screen bg-white-50 flex flex-col items-center">

            {/* Main Section */}
            <section className="text-center mt-16">
                <h2 className="text-5xl font-bold text-gray-800">
                    The World's Most Popular AI Headshot Generator
                </h2>
                <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                    Get professional AI headshots in minutes with our new AI headshot generator. Save hundreds of dollars and hours of your time. Built by AI researchers.
                </p>
                <CreateHeadshotButton onClick={() => window.location.href = '/gender'} />
                <div className="mt-4">
                    <p className="text-gray-600">Trusted by leading professionals</p>
                    {/* Add trusted logos if needed */}
                </div>
            </section>

            {/* Carousel Section */}
            <section className="mt-16 w-full px-8">
                <Carousel />
            </section>

            {/* Redesigned Upload Photos Section */}
            <section className="mt-10 py-12 bg-white rounded-lg max-w-5xl mx-auto px-6" style={{ width: "100%;" }}>
                <h3 className="text-4xl font-bold mb-10 text-center text-gray-800">
                    Upload Your Photos
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    {/* Step 1 */}
                    <div className="p-6 bg-gray-100 rounded-lg shadow-md transition-transform transform hover:scale-105">
                        <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg mx-auto mb-4">
                            1
                        </div>
                        <h4 className="font-semibold text-xl mb-4">Upload Photos</h4>
                        <p className="text-gray-600">
                            Select a few clear photos of yourself to begin. Ensure they're well-lit and focused.
                        </p>
                    </div>
                    {/* Step 2 */}
                    <div className="p-6 bg-gray-100 rounded-lg shadow-md transition-transform transform hover:scale-105">
                        <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg mx-auto mb-4">
                            2
                        </div>
                        <h4 className="font-semibold text-xl mb-4">Choose Style</h4>
                        <p className="text-gray-600">
                            Pick a professional style that suits you from our wide range of options.
                        </p>
                    </div>
                    {/* Step 3 */}
                    <div className="p-6 bg-gray-100 rounded-lg shadow-md transition-transform transform hover:scale-105">
                        <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg mx-auto mb-4">
                            3
                        </div>
                        <h4 className="font-semibold text-xl mb-4">Get Your AI Headshot</h4>
                        <p className="text-gray-600">
                            Receive your AI-generated professional headshots in minutes and impress everyone!
                        </p>
                    </div>
                </div>
                {/* Create Headshot Button */}
                <div className="mt-10 text-center">
                    <CreateHeadshotButton onClick={() => window.location.href = '/gender'} />
                </div>
            </section>



            {/* New Image Generation Section */}
            <section className="mt-10 py-12 bg-blue-50 shadow-sm rounded-lg max-w-5xl mx-auto flex flex-col lg:flex-row items-center px-4 lg:px-8">
                <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
                    <h3 className="text-3xl font-semibold mb-6 text-gray-800">Generate Any Type of Image from Text!</h3>
                    <p className="text-gray-600 mb-8">
                        Our advanced AI technology allows you to create stunning images from simple text prompts.
                        Whether it's a portrait, landscape, or abstract art, the possibilities are endless!
                    </p>

                    <CreateHeadshotButton onClick={() => window.location.href = '/gender'} text={"Start Generating Images"} />
                </div>
                <div className="flex-1 flex justify-center">
                    <img
                        src="https://imgv3.fotor.com/images/side/Generate-a-realistic-female-AI-portrait-with-Fotor-AI-portrait-generator-from-text.jpg"
                        alt="AI Generated Image"
                        className="rounded-lg max-w-full h-auto"
                    />
                </div>
            </section>

            {/* New Professional Headshot Section */}
            <section className="mt-10 py-12 bg-white shadow-sm rounded-lg max-w-5xl mx-auto flex flex-col lg:flex-row items-center px-4 lg:px-8">
                <div className="flex-1 flex justify-center">
                    <img
                        src="https://imgv3.fotor.com/images/side/turn-a-male-selfie-into-a-professional-headshot-for-LinkedIn-profile.jpg"
                        alt="Professional Headshot for LinkedIn"
                        className="rounded-lg max-w-full h-auto"
                    />
                </div>
                <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0 lg:ml-6"> {/* Added lg:ml-6 for margin */}
                    <h3 className="text-3xl font-semibold mb-6 text-gray-800">Create Professional Headshots for LinkedIn</h3>
                    <p className="text-gray-600 mb-8">
                        Transform your selfies into stunning professional headshots perfect for your LinkedIn profile.
                        Stand out in your industry with a polished look!
                    </p>
                    <CreateHeadshotButton onClick={() => window.location.href = '/gender'} />
                </div>
            </section>

            {/* New Section for Social Media Headshots */}
            <section className="mt-10 py-12 bg-white shadow-sm rounded-lg max-w-5xl mx-auto px-8 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 p-4 md:p-6">
                    <h3 className="text-3xl font-semibold mb-6 text-center md:text-left text-gray-800">
                        Create Headshots for Social Media
                    </h3>
                    <p className="text-gray-600 text-center md:text-left mb-4">
                        Stand out on platforms like Instagram and Facebook with a professional avatar tailored just for you.
                    </p>
                    <CreateHeadshotButton onClick={() => window.location.href = '/gender'} text={"Create Your Avatar"} />
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
                    <img
                        src="https://imgv3.fotor.com/images/side/generate-a-professional-avatar-for-Instagram-profile.jpg"
                        alt="Social Media Headshot"
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>
            </section>

            {/* Pricing Section */}
            <section className="mt-10 py-12 bg-whiterounded-lg max-w-5xl mx-auto px-8 text-center">
                <h3 className="text-3xl font-semibold mb-4 text-gray-800">Affordable Pricing</h3>
                <p className="text-gray-600 mb-6">
                    Our pricing is the lowest in the market with the best results!
                    Get started with our competitive rates:
                </p>
                <div className="flex justify-center space-x-2 mb-6">
                    <div className="p-6 border border-gray-300 rounded-lg shadow-md">
                        <h4 className="text-2xl font-bold text-gray-800">Model Training</h4>
                        <p className="text-2xl font-semibold text-blue-600">₹300 (~$4)</p>
                        <p className="text-gray-600">One-time fee for training your model.</p>
                    </div>
                    <div className="p-6 border border-gray-300 rounded-lg shadow-md">
                        <h4 className="text-2xl font-bold text-gray-800">Image Generation</h4>
                        <p className="text-2xl font-semibold text-blue-600">₹7 (~$0.09)</p>
                        <p className="text-gray-600">Per image generated from your model.</p>
                    </div>
                </div>
                <div className="text-2xl font-semibold text-gray-800 mb-4">
                    <span className="text-lg font-medium">Total Pricing:</span> ₹307 (~$4.09)
                </div>
                <p className="text-gray-600 mb-6">
                    Start creating amazing AI headshots today!
                </p>
                <CreateHeadshotButton onClick={() => window.location.href = '/gender'} />
            </section>

            {/* Footer Section */}
            <footer className="mt-10 py-6 bg-gray-800 text-white text-center w-full" style={{ background: "#03045e" }}>
                <div className="flex items-center justify-center">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-12 h-12 cursor-pointer"
                        onClick={handleLogoClick}
                    />
                    <h1
                        className="text-2xl font-bold ml-2 cursor-pointer"
                        onClick={handleLogoClick}
                    >
                        Tasvir
                    </h1>
                </div>
                <div className="mt-4">
                    <a href="/privacy" className="mx-4 hover:underline">Privacy Policy</a>
                    <a href="/contact" className="mx-4 hover:underline">Contact Us</a>
                    <a href="/about" className="mx-4 hover:underline">About Us</a>
                    <a href="/generate" className="mx-4 hover:underline">Generate Image</a>
                </div>
                <p className="mt-4 text-sm">© 2024 Tasvir. All rights reserved.</p>
            </footer>

        </div>
    );
};

export default LandingPage;
