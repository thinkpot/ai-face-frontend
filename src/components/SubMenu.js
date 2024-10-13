// SubMenu.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubMenu = () => {
    const navigate = useNavigate();

    return (
        <nav className="w-full bg-gray-100 py-4 shadow-md">
            <ul className="flex justify-center space-x-8">
                <li 
                    className="text-gray-800 font-semibold cursor-pointer hover:text-blue-500 transition-colors"
                    onClick={() => navigate('/pricing')}
                >
                    Pricing
                </li>
                <li 
                    className="text-gray-800 font-semibold cursor-pointer hover:text-blue-500 transition-colors"
                    onClick={() => navigate('/dating-ai-photos')}
                >
                    Dating
                </li>
                <li 
                    className="text-gray-800 font-semibold cursor-pointer hover:text-blue-500 transition-colors"
                    onClick={() => navigate('/professional-ai-photos')}
                >
                    Professional
                </li>
                <li 
                    className="text-gray-800 font-semibold cursor-pointer hover:text-blue-500 transition-colors"
                    onClick={() => navigate('/contact')}
                >
                    Contact Us
                </li>
            </ul>
        </nav>
    );
};

export default SubMenu;
