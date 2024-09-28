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
      const { data } = await axios.post('http://localhost:5000/api/payment/create-order', {
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
            const verificationResponse = await axios.post('http://localhost:5000/api/payment/verify-payment', {
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
        <div className="bg-white rounded-lg p-6 w-96">
          <h2 className="text-xl font-bold mb-4">Confirm Payment</h2>
          <p>Model Training: {charges.modelTrainingCharge} INR</p>
          <p>Image Generation: {charges.imageGenerationCharge} INR</p>
          <p className="font-bold mt-4">Total: {charges.modelTrainingCharge + charges.imageGenerationCharge} INR</p>

          <button
            onClick={handlePayment}
            className={`bg-blue-500 text-white px-4 py-2 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Pay Now'}
          </button>
          <button onClick={onClose} className="mt-4 text-red-500 underline">
            Cancel
          </button>
        </div>
      </div>
    )
  );
};

export default PaymentModal;
