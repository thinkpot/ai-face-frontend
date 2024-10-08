import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CurrencyDollarIcon, MenuIcon, XIcon } from '@heroicons/react/solid';
import './Header.css';
import Button from './Button';
import logo from '../assets/logo5.png';
import CreditsModal from './CreditsModal'; // Import CreditsModal
import CreditsCashfreeModal from './CreditsCashfreeModal';
import axios from 'axios';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [credits, setCredits] = useState(0); // Add credits state
  const [isCreditsModalOpen, setIsCreditsModalOpen] = useState(false); // Control the modal
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Control mobile menu
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedProfilePic = localStorage.getItem('profilePic');

    if (token) {
      setIsAuthenticated(true);
      setProfilePic(storedProfilePic);

      // Fetch credits
      fetch(`${process.env.REACT_APP_BACKEND_URL}/user/get-credits`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setCredits(data.credits))
        .catch((err) => console.error('Error fetching credits:', err));

      const fetchUserId = async () => {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('response ', response.data);
        setUserId(response.data.userId); // Assuming API response has userId
      };
      fetchUserId();
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('profilePic');
    setIsAuthenticated(false);
    navigate('/'); // Redirect to home or login page
  };

  const handleLogoClick = () => {
    navigate('/'); // Redirect to the homepage when clicking the logo
  };

  const handleLoginClick = () => {
    navigate('/signup'); // Redirect to signup page
  };

  const handleCreditsClick = () => {
    setIsCreditsModalOpen(true); // Open the modal when clicking on credits
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="p-4 text-white flex justify-between items-center">
      <div className="flex items-center">
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

      {/* Burger Menu Icon for mobile */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <XIcon className="w-8 h-8 text-white" />
          ) : (
            <MenuIcon className="w-8 h-8 text-white" />
          )}
        </button>
      </div>

      {/* Main Menu */}
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } lg:flex lg:items-center lg:space-x-6 absolute lg:static top-16 left-0 right-0 bg-gray-800 lg:bg-transparent p-4 lg:p-0 z-50 flex-row justify-center space-x-4`}
      >
        {isAuthenticated ? (
          <>
            {/* Credits Section */}
            <button
              onClick={() => setIsCreditsModalOpen(true)}
              className="px-4 py-2 flex items-center bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg hover:shadow-md"
            >
              <CurrencyDollarIcon className="w-5 h-5 mr-1 text-white" />
              {credits}
            </button>

            <button
              onClick={() => navigate('/dashboard')}
              className="px-6 py-2 bg-blue-500 rounded-lg flex items-center dashboard-btn"
            >
              <img
                src={profilePic}
                alt="Profile"
                className="rounded-full w-6 h-6 mr-2"
              />
              Dashboard
            </button>

            <button
              onClick={handleLogout}
              className="px-2 py-2 rounded-lg logout-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                />
              </svg>
            </button>

            {/* Add the CreditsModal component */}
            <CreditsCashfreeModal
              isOpen={isCreditsModalOpen}
              onClose={() => setIsCreditsModalOpen(false)}
              userId={userId}
            />
          </>
        ) : (
          <Button
            onClick={handleLoginClick}
            className="px-8 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl"
          >
            Login
          </Button>
        )}
      </div>
      
    </header>
  );
};

export default Header;
