import axios from 'axios';
import React, { useState, useEffect } from 'react';
import JSZip from 'jszip';
import { useLocation, useNavigate } from 'react-router-dom';
import { CloudUploadIcon } from '@heroicons/react/outline';
import LoginModal from './LoginModal'; // Importing the LoginModal component
import PaymentModal from './PaymentModal'; // Import the PaymentModal component


function UploadPage() {
  const [userId, setUserId] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [zipping, setZipping] = useState(false);
  const [progress, setProgress] = useState(0);
  const [progressText, setProgressText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // To control the login modal
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false); // To control the payment modal
  const [charges, setCharges] = useState({
    modelTrainingCharge: 0,
    imageGenerationCharge: 0,
  });

  const [credits, setCredits] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const { gender, style, modelName } = location.state || {};



  useEffect(() => {
    // Check if the user is logged in
    const token = localStorage.getItem('token');
    if (!token) {
      setIsModalOpen(true); // Open the modal if not logged in
    } else {
      verifyToken(token);
    }

    const fetchCharges = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/pricing`);
        console.log("Pricing ", response.data)
        setCharges(response.data.data); // Set the charges from the API response
      } catch (error) {
        console.error('Error fetching charges:', error);
      }
    };

    fetchCharges();

    

    

  }, []);

  const fetchCredits = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/get-credits`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      setCredits(response.data.credits);
    } catch (error) {
      console.error('Error fetching credits:', error);
    }
  };
  fetchCredits();
    console.log("Credits i have ", credits)

  const verifyToken = async (token) => {
    try {
      await axios.get(`${process.env.REACT_APP_BACKEND_URL}/verify-token`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      await fetchUserId(); // Fetch user ID if token is valid
    } catch (error) {
      console.log("Removing invalid token");
      localStorage.removeItem('token'); // Clear invalid token
      setIsModalOpen(true); // Open modal if token is invalid
    }
  };

  const fetchUserId = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserId(response.data.userId); // Set userId
    }
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setPhotos(prevPhotos => [...prevPhotos, ...files]);
  };

  const createZipFile = async () => {
    if (photos.length < 10) {
      alert('Please upload at least 10 photos.');
      return;
    }
    setZipping(true);
    setProgress(10);
    setProgressText("Creating ZIP...");

    const zip = new JSZip();
    photos.forEach(photo => zip.file(photo.name, photo));
    const content = await zip.generateAsync({ type: 'blob' });

    // Proceed to upload after payment
    handleUpload(content);
    setZipping(false);
  };

  const handleUpload = async (zipContent) => {
    setUploading(true);
    setProgressText("Uploading...");

    const formData = new FormData();
    formData.append('file', zipContent);
    formData.append('gender', gender);
    formData.append('style', style.image)
    formData.append('modelName', modelName)

    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/train`, formData, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(60 + percentCompleted * 0.4);
        },
      });

      setProgress(100);
      setProgressText("Upload successful!");
      navigate('/dashboard');
    } catch (error) {
      console.error('Error uploading:', error);
      setProgress(100);
      setProgressText("Failed to upload photos");
      alert('Failed to upload photos');
    } finally {
      setUploading(false);
      setZipping(false);
    }
  };

  const handleDeletePhoto = (indexToDelete) => {
    setPhotos(photos.filter((_, index) => index !== indexToDelete));
  };

  const handleLoginSuccess = (response) => {
    const token = response.credential; // Assuming Google returns a credential
    localStorage.setItem('token', token);
    setIsModalOpen(false); // Close the modal after successful login
    fetchUserId();
    
  };

  const handleLoginError = (error) => {
    console.error('Google login failed:', error);
    alert('Google login failed. Please try again.');
  };

  const handlePaymentSuccess = () => {
    // Call the function to create the ZIP file after payment is successful
    createZipFile();
    setIsPaymentModalOpen(false); // Close the payment modal
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <LoginModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        onLoginError={handleLoginError}
      />
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        userId={userId} // Pass userId here
        onPaymentSuccess={handlePaymentSuccess}
        charges={charges}
      />
      {!isModalOpen && !isPaymentModalOpen && (
        <div className="w-full max-w-4xl p-8 border-2 border-dashed border-gray-300 rounded-lg bg-white shadow-lg flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-4">Upload Your Photos</h1>

          <div className="flex flex-col items-center mb-8">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="flex flex-col items-center cursor-pointer hover:text-blue-600 transition"
            >
              <CloudUploadIcon className="h-10 w-10 text-blue-500 mb-2" />
              <span className="text-lg text-blue-500 font-semibold">Upload Photos</span>
            </label>
          </div>

          <button
            onClick={() => {
              if (photos.length < 10) {
                alert('Please upload at least 10 photos.');
              } 
              else if (userId) {
                if(credits < charges.modelTrainingCharge + charges.imageGenerationCharge){
                  setIsPaymentModalOpen(true);
                  // Proceed to payment if userId exists and enough photos are uploaded
                }else{
                  createZipFile();
                }
                 
              } else {
                alert('Please log in to proceed.');
                setIsModalOpen(true); // Open login modal if not logged in
              }
            }}
            className={`relative mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold hover:from-green-500 hover:to-blue-600 transition-transform transform hover:scale-105 focus:outline-none ${zipping || uploading ? 'cursor-wait' : ''}`}
            disabled={zipping || uploading}
          >
            {zipping ? (
              <span className="flex items-center space-x-2">
                <span className="spinner-border animate-spin inline-block w-4 h-4 border-4 border-t-transparent border-white rounded-full"></span>
                <span>Creating ZIP...</span>
              </span>
            ) : (
              <span className="flex items-center space-x-2">
                <CloudUploadIcon className="h-5 w-5 text-white" />
                <span>Generate ZIP & Upload</span>
              </span>
            )}
          </button>

          {(zipping || uploading) && (
            <div className="mt-4 w-full bg-gray-200 rounded-full h-4 overflow-hidden relative">
              <div
                style={{ width: `${progress}%` }}
                className="bg-blue-500 h-full transition-all"
              />
              <span className="absolute inset-0 flex items-center justify-center text-white font-semibold">{progressText} ({progress}%)</span>
            </div>
          )}

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="relative w-20 h-20 border border-gray-400 rounded-lg overflow-hidden"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={URL.createObjectURL(photo)}
                  alt={`Preview ${index}`}
                  className="object-cover w-full h-full"
                />
                {hoveredIndex === index && (
                  <button
                    className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full px-2"
                    onClick={() => handleDeletePhoto(index)}
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default UploadPage;

/* Working */