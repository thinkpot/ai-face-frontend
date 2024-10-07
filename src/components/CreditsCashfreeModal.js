import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { load } from '@cashfreepayments/cashfree-js'; // Import Cashfree SDK

const CreditsCashfreeModal = ({ isOpen, onClose, userId }) => {
  const [creditsToAdd, setCreditsToAdd] = useState('');
  const [cashfree, setCashfree] = useState(null);

//   const initializeCashfreeSDK = async () => {
//     try {
//       const cashfreeSDK = await load({ mode: 'sandbox' }); // Load Cashfree in sandbox mode
//       setCashfree(cashfreeSDK);
//     } catch (error) {
//       console.error('Error loading Cashfree SDK:', error);
//     }
//   };

  useEffect(() => {
    const initializeSDK = async () => {
      const sdk = await load({ mode: 'sandbox' });
      setCashfree(sdk);
    };
    initializeSDK();
  }, []);


  const handlePayment = async () => {
    if (!creditsToAdd || creditsToAdd <= 0) {
      alert('Please enter a valid amount.');
      return;
    }

    try {
      // Load Cashfree SDK only once
    //   if (!cashfree) {
    //     await initializeCashfreeSDK();
    //   }

      // Create a payment session on your backend
      const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/payment/create-cashfree-order`, {
        amount: parseInt(creditsToAdd), // Amount in INR
        customerEmail: "customerEmail@sdsd.com",
        customerName: "customerName",
        customerPhone: "+918888888888",
        customerId: userId,
        userId:userId
      });

      if (!data.payment_session_id) {
        alert('Failed to create payment session.');
        return;
      }

      const checkoutOptions = {
        paymentSessionId: data.payment_session_id, // Use the session ID received from your backend
        redirectTarget: '_modal', // Open payment in a modal
      };

      cashfree.checkout(checkoutOptions).then(async (result) => {
        // Handle the result of the payment
        if (result.error) {
          console.error('Payment error:', result.error);
          alert('Payment failed. Please try again.');
        } else if (result.paymentDetails) {
          // Payment completed
          const verify = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/payment/verify-cashfree-payment`, {
            order_id: data.orderId, // or the appropriate ID based on your backend logic
            userId: userId,
            amount:  parseInt(creditsToAdd),
          });

          if (verify.data.success) {
            alert(`${creditsToAdd} credits added to your account.`);
            onClose();
          } else {
            alert('Failed to verify payment. Please try again.');
          }
        }
      });
    } catch (error) {
      console.error('Error during payment:', error);
      alert('An error occurred during the payment process. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" style={{margin:0}}>
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Add Credits</h2>
          <button className="text-gray-600 hover:text-gray-800" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="">
          <p className="text-lg mb-4 text-gray-600">How many credits would you like to add?</p>
          <input
            type="number"
            min="0"
            value={creditsToAdd}
            onChange={(e) => setCreditsToAdd(e.target.value)}
            className="w-full text-black p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter credits"
          />
        </div>

        <div className="mt-6 flex justify-between items-center">
          <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg" onClick={onClose}>
            Cancel
          </button>
          <button
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg"
            onClick={handlePayment}
          >
            Add Credits
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreditsCashfreeModal; // Updated export statement
