import React from 'react';
import logo from '../assets/logo5.png';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate('/'); // Redirect to the homepage when clicking the logo
    };

    return (
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
                <a href="/privacy-policy" className="mx-4 hover:underline">Privacy Policy</a>
                <a href="/terms-conditions" className="mx-4 hover:underline">Terms & Conditions</a>
                <a href="/refund-policy" className="mx-4 hover:underline">Refund Policy</a>
                <a href="/contact" className="mx-4 hover:underline">Contact Us</a>
                <a href="/about" className="mx-4 hover:underline">About Us</a>

            </div>
            <p className="mt-4 text-sm">© 2024 Tasvir. All rights reserved.</p>
        </footer>
    )
}

export default Footer;