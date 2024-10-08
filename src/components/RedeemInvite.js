import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LoginModal from '../components/LoginModalNoRedirect';

const RedeemInvite = () => {
  const { inviteCode } = useParams();
  const [message, setMessage] = useState('');
  const [creditsAmount, setCreditsAmount] = useState(null);
  const [isClaimed, setIsClaimed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInviteCodeDetails = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/invite-code/${inviteCode}`);
        const data = await response.json();

        if (response.ok) {
          setCreditsAmount(data.freeCreditsAmount);
          setMessage(`You can claim ${data.freeCreditsAmount} credits with this invite code.`);
        } else {
          setMessage(data.message || 'Failed to fetch invite code details.');
        }
      } catch (error) {
        console.error('Error fetching invite code details:', error);
        setMessage('An error occurred while fetching invite code details.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchInviteCodeDetails();
  }, [inviteCode]);

  const claimCredits = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setIsModalOpen(true);
        return;
      }

      setIsLoading(true);
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/invite-code/redeem-invite`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ inviteCode }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`Successfully added ${creditsAmount} credits!`);
        setIsClaimed(true);
        setTimeout(() => navigate('/gender'), 3000);
      } else {
        setMessage(data.message || 'Failed to redeem invite code.');
      }
    } catch (error) {
      console.error('Error redeeming invite code:', error);
      setMessage('An error occurred while redeeming the invite code.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginSuccess = () => {
    setIsModalOpen(false);
    claimCredits();
  };

  const handleLoginError = () => {
    console.error('Login failed');
    setMessage('Login failed. Please try again.');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full transform transition-all duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Invite Code Redemption</h2>
        {isLoading ? (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
              <p className="text-blue-700">{message}</p>
            </div>
            {creditsAmount !== null && !isClaimed && (
              <button
                onClick={claimCredits}
                className="w-full mt-4 bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span>Claim Your {creditsAmount} Credits</span>
                )}
              </button>
            )}
            {isClaimed && (
              <div className="mt-6 text-center">
                <svg className="mx-auto h-12 w-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p className="mt-2 text-lg font-semibold text-green-600">Your credits have been claimed!</p>
                <p className="mt-1 text-sm text-gray-500">Redirecting you shortly...</p>
              </div>
            )}
          </>
        )}
      </div>
      <LoginModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        onLoginError={handleLoginError}
      />
    </div>
  );
};

export default RedeemInvite;