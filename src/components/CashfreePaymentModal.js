import React, { useState, useEffect } from 'react';
import { load } from '@cashfreepayments/cashfree-js';
import axios from 'axios';

const CashfreePaymentModal = ({ isOpen, onClose, userId, onPaymentSuccess, charges }) => {
  const [loading, setLoading] = useState(false);
  const [cashfree, setCashfree] = useState(null);

  useEffect(() => {
    const initializeSDK = async () => {
      const sdk = await load({ mode: 'sandbox' });
      setCashfree(sdk);
    };
    initializeSDK();
  }, []);

  const doPayment = async () => {
    const totalAmount = charges.modelTrainingCharge + charges.imageGenerationCharge; // Calculate total

    try {
      setLoading(true);

      // Make API call to create a payment session
      const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/payment/create-cashfree-order`, {
        amount: totalAmount, // Amount in paise (multiply by 100)
        customerId: userId,
        customerEmail: "customerEmail@sdsd.com",
        customerName: "customerName",
        customerPhone: "+918888888888",
        userId:userId
      });

      let checkoutOptions = {
        paymentSessionId: data.payment_session_id, // Use session ID received from backend
        redirectTarget: '_modal',
      };

      cashfree.checkout(checkoutOptions).then(async (result) => {
        setLoading(false);
        if (result.error) {
          // Handle payment errors
          console.log("User has closed the popup or there is some payment error, Check for Payment Status");
          console.log(result.error);
        } else if (result.redirect) {
          // Handle redirection case
          console.log("Payment will be redirected");
        } else if (result.paymentDetails) {
          // Handle successful payment
          console.log("Payment has been completed, Check for Payment Status");
          console.log(result.paymentDetails.paymentMessage);

          console.log("Order ", data.orderId)
          // Verify payment with your backend
          const verificationResponse = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/payment/verify-cashfree-payment`, {
            order_id: data.orderId, // or the appropriate ID based on your backend logic
            userId: userId,
            amount: totalAmount,
          });

          if (verificationResponse.data.success) {
            onPaymentSuccess(verificationResponse.data.message);
            onClose(); // Close the modal on success
          }
        }
      });
    } catch (error) {
      console.error('Payment error:', error);
      setLoading(false);
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
              onClick={doPayment}
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

export default CashfreePaymentModal;
