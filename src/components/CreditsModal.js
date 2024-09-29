import React, { useState } from 'react';
import axios from 'axios';

const CreditsModal = ({ isOpen, onClose, userId }) => {
  const [creditsToAdd, setCreditsToAdd] = useState('');

  const handlePayment = async () => {
    if (!creditsToAdd || creditsToAdd <= 0) {
      alert('Please enter a valid amount.');
      return;
    }

    try {
      const res = await loadRazorpayScript();
      if (!res) {
        alert('Razorpay SDK failed to load. Check your connection.');
        return;
      }

      const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/payment/create-order1`, {
        amount: parseInt(creditsToAdd), // amount in paise
      });

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: data.order.amount,
        currency: data.order.currency,
        name: 'Add Credits',
        description: `Add ${creditsToAdd} credits`,
        order_id: data.order.id,
        handler: async function (response) {
          const verify = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/payment/verify-payment`, {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            userId: userId,
            amount: parseInt(creditsToAdd),
          });

          if (verify.data.success) {
            alert(`${creditsToAdd} credits added to your account.`);
            onClose();
          }
        },
        theme: {
          color: '#3399cc',
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error('Error during payment:', error);
    }
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
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

export default CreditsModal;
