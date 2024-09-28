import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CurrencyDollarIcon } from '@heroicons/react/solid';
import './Header.css';
import Button from './Button';
import logo from '../assets/logo.png';
import CreditsModal from './CreditsModal'; // Import CreditsModal
import axios from 'axios';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [credits, setCredits] = useState(0); // Add credits state
  const [isCreditsModalOpen, setIsCreditsModalOpen] = useState(false); // Control the modal
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedProfilePic = localStorage.getItem('profilePic');


    if (token) {
      setIsAuthenticated(true);
      setProfilePic(storedProfilePic);

      // Fetch credits
      fetch('http://localhost:5000/user/get-credits', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setCredits(data.credits))
        .catch((err) => console.error('Error fetching credits:', err));


      const fetchUserId = async () => {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:5000/user/profile`, {
          headers: {
            Authorization: `Bearer ${token}`, // Add your JWT or any other token here
          },
        });
        console.log("response ", response.data)
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
          className="text-2xl font-bold ml-4 cursor-pointer"
          onClick={handleLogoClick}
        >
          Faceshot Ai
        </h1>
      </div>
      <div className="flex">
        {isAuthenticated ? (
          <>
            {/* Credits Section */}
            <button
              onClick={() => setIsCreditsModalOpen(true)}
              className="ml-4 px-4 py-2 flex items-center bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg hover:shadow-md mr-3"
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
              className="ml-4 px-2 py-2 rounded-lg logout-btn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
              </svg>
            </button>

            {/* Add the CreditsModal component */}
            <CreditsModal
              isOpen={isCreditsModalOpen}
              onClose={() => setIsCreditsModalOpen(false)}
              userId={userId}
            />
          </>
        ) : (
          <Button
            onClick={handleLoginClick}
            className=" px-8 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl"
          >
            Login
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
