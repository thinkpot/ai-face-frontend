import React from 'react';
import Carousel from './Carousel'; // Reuse your working Carousel component
import CreateHeadshotButton from './CreateHeadshotButton';
import logo from '../assets/logo5.png';
import SubMenu from './SubMenu'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer'
import { Helmet } from "react-helmet";
import Gallery from './Gallery'
import TasvirFeatures from './FeaturesComponent';

const LandingPage = () => {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate('/'); // Redirect to the homepage when clicking the logo
    };
    return (
        <div className="min-h-screen bg-white-50 flex flex-col items-center">
            <Helmet>
                <title>The World's Most Popular & Cheapest AI Headshot Generator</title>
                <meta name="description" content="Tasvir offers the cheapest headshot generator and AI-powered professional photos for LinkedIn, social media, and casual headshots. Get stunning AI dating photos and enhance your online presence with our affordable, high-quality headshot solutions. Try our free AI headshot generator today for casual and professional use!" />
                <meta name="keywords" content="cheapest ai headshot generator, ai headshot generator, betterpic, ai professional headshot, instaheadshots, ai headshot generator free, ai headshots, headshot generator, free ai headshot generator, ai photo editor, headshotpro, ai business photo, argon ai, personalised, professional photo ai, ai business photo generator, ai enhanced professional headshot, ai professional headshots, ai profile picture generator, ai corporate headshots free, generate headshots using ai free, professional headshot ai free, ai linkedin photo, ai photo generator, ai photo generator for social media, free ai dating photo generator, casual headshots" />
            </Helmet>
            <SubMenu />
            {/* Main Section */}
            <section className="text-center mt-16">
                <h1 className='my-4'>The #1 Fastest and Cheapest AI Headshot Generator for Professional Photos and More</h1>
                <h2 className="text-5xl font-bold text-gray-800">
                    The World's Most Popular AI Headshot Generator
                </h2>
                <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                    Create professional AI headshots in minutes! Generate stunning AI LinkedIn photos and CV photos effortlessly with our AI headshot generator.
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


            <Gallery />

            {/* New Image Generation Section */}
            <section className="mt-10 py-12 bg-blue-50 shadow-sm rounded-lg max-w-5xl mx-auto flex flex-col lg:flex-row items-center px-4 lg:px-8">
                <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
                    <h3 className="text-3xl font-semibold mb-6 text-gray-800">Generate Any Type of Image from Text!</h3>
                    <p className="text-gray-600 mb-8">
                        Our AI technology lets you create stunning professional photos and casual headshots from simple text prompts. Whether you need an AI LinkedIn photo or a captivating portrait, our AI photo generator unlocks endless possibilities!
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
                        Transform your selfies into stunning AI professional headshots perfect for your LinkedIn profile. Stand out in your industry with a polished look that elevates your professional image!
                    </p>

                    <CreateHeadshotButton onClick={() => window.location.href = '/gender'} />
                </div>
            </section>

            {/* New Section for Social Media Headshots */}
            <section className="mt-10 py-12 bg-white shadow-sm rounded-lg max-w-5xl mx-auto px-8 flex flex-col md:flex-row items-center">
                <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0 lg:ml-6">
                    <h3 className="text-3xl font-semibold mb-6 text-center md:text-left text-gray-800">
                        Create Stunning Social Media Headshots
                    </h3>
                    <p className="text-gray-600 text-center md:text-left mb-4">
                        Stand out on Instagram and Facebook with personalized AI generated avatars and professional photos tailored just for you.
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

            <section>
                <TasvirFeatures />
            </section>

            {/* Pricing Section */}
            <section className="mt-10 py-12 bg-whiterounded-lg max-w-5xl mx-auto px-8 text-center">
                <h3 className="text-3xl font-semibold mb-4 text-gray-800">Affordable Pricing</h3>
                <p className="text-gray-600 mb-6">
                    Our pricing is the lowest in the market, making us the cheapest headshot generator with the best results! Start using our cheap AI photo generator today and take advantage of our competitive rates.
                </p>

                <div className="flex justify-center space-x-2 mb-6">
                    <div className="p-6 border border-gray-300 rounded-lg shadow-md">
                        <h4 className="text-2xl font-bold text-gray-800">Model Training</h4>
                        <p className="text-2xl font-semibold text-blue-600">₹150 (~$2)</p>
                        <p className="text-gray-600">One-time fee for training your model.</p>
                        <p className="text-gray-600 mt-4">
                            <strong>Training Time:</strong> <span className="text-blue-600">Only 30 minutes</span>
                        </p>
                    </div>
                    <div className="p-6 border border-gray-300 rounded-lg shadow-md">
                        <h4 className="text-2xl font-bold text-gray-800">Image Generation</h4>
                        <p className="text-2xl font-semibold text-blue-600">₹7 (~$0.09)</p>
                        <p className="text-gray-600">Per image generated from your model.</p>
                        <p className="text-gray-600 mt-4">
                            <strong>Speed:</strong> <span className="text-blue-600">Instant generation</span>
                        </p>
                    </div>
                </div>
                <div className="text-2xl font-semibold text-gray-800 mb-4">
                    <span className="text-lg font-medium">Total Pricing:</span> ₹157 (~$2.09)
                </div>
                <p className="text-gray-600 mb-6">
                    Start creating amazing AI headshots today!
                </p>
                <CreateHeadshotButton onClick={() => window.location.href = '/gender'} />
            </section>

            {/* Footer Section */}
            <Footer />

        </div>
    );
};

export default LandingPage;
