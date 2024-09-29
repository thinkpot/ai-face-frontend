import React, { useState } from 'react';
import axios from 'axios';


const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };


const PaymentModal = ({ isOpen, onClose, userId, onPaymentSuccess, charges }) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    const totalAmount = charges.modelTrainingCharge + charges.imageGenerationCharge; // Calculate total

    try {
      const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

      if (!res || typeof window.Razorpay === 'undefined') {
        alert('Razorpay SDK not loaded. Please check your internet connection.');
        return;
      }

      // Create Razorpay order
      const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/payment/create-order`, {
        amount: totalAmount, // Amount in paise (multiply by 100)
      });

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Razorpay key ID
        amount: data.order.amount,
        currency: 'INR',
        name: 'Your App Name',
        description: 'Model Training and Image Generation',
        order_id: data.order.id,
        handler: async function (response) {
          try {
            
            const verificationResponse = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/payment/verify-payment`, {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              userId: userId,
              amount: totalAmount,
            });

            if (verificationResponse.data.success) {
              onPaymentSuccess(verificationResponse.data.message);
              onClose(); // Close the modal on success
            }
          } catch (error) {
            console.error('Error during verification:', error);
          }
        },
        theme: {
          color: '#F37254',
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open(); // Open Razorpay payment modal
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed, please try again.');
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg p-8 w-96">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Confirm Payment</h2>
  
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-lg font-medium text-gray-600">Model Training Cost:</span>
              <span className="text-lg font-semibold text-gray-900">{charges.modelTrainingCharge} INR</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-medium text-gray-600">Image Generation Cost:</span>
              <span className="text-lg font-semibold text-gray-900">{charges.imageGenerationCharge} INR</span>
            </div>
            <div className="border-t border-gray-300 my-4"></div>
            <div className="flex justify-between">
              <span className="text-xl font-bold text-gray-800">Total:</span>
              <span className="text-xl font-bold text-green-600">{charges.modelTrainingCharge + charges.imageGenerationCharge} INR</span>
            </div>
          </div>
  
          <div className="mt-6 flex justify-between items-center space-x-4">
            <button
              onClick={handlePayment}
              className={`bg-gradient-to-r from-blue-500 to-blue-600 text-white w-full py-2 rounded-lg font-bold transition-opacity ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Pay Now'}
            </button>
            <button
              onClick={onClose}
              className="w-full py-2 rounded-lg font-bold text-red-600 border border-red-500 transition-colors hover:bg-red-500 hover:text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
  
  
};

export default PaymentModal;
