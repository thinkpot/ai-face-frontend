import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DownloadIcon } from '@heroicons/react/solid'
import { TrashIcon } from '@heroicons/react/solid'

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [models, setModels] = useState([]);
  const [images, setImages] = useState([]); // State to store fetched images
  const [filteredModels, setFilteredModels] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [selectedModel, setSelectedModel] = useState(null); // State for the selected model
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loadingImage, setLoadingImage] = useState(false);
  const [filter, setFilter] = useState('all'); // Filter for models
  const [activeTab, setActiveTab] = useState('models'); // State to switch between models and images
  const [noImagesMessage, setNoImagesMessage] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);

        const modelResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/models`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setModels(modelResponse.data);
        setFilteredModels(modelResponse.data); // Set the filtered models initially to all models
      } catch (err) {
        setError('Error fetching data');
        console.error('Error fetching data:', err);
      }
    };

    fetchUserData();    
  }, []);

  useEffect(() => {
    // Filter models based on selected filter status
    if (filter === 'all') {
      setFilteredModels(models);
    } else {
      setFilteredModels(models.filter((model) => model.status === filter));
    }
  }, [filter, models]);

  const fetchImages = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/images`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.model && response.data.models.length === 0) {
        setNoImagesMessage("No images found for the user.");
        setImages([]); // Clear images if no images found
      } else {
        setImages(response.data.models);
        console.log("Images ", response.data)
        setNoImagesMessage(''); // Clear the message if images are found
      }
    } catch (err) {

      console.error('Error fetching images:', err);
    }
  };

  // This function handles the click event on a model card to open the modal
  const handleRowClick = (model) => {
    setSelectedModel(model);  // Set the clicked model
    setShowModal(true);       // Show the modal
  };

  const handleModalClose = () => {
    setShowModal(false);      // Close the modal
    setSelectedModel(null);   // Reset the selected model
    setPrompt('');
    setImageUrl('');
  };

  const handleGenerateImage = async () => {
    try {
      const token = localStorage.getItem('token');
      setLoadingImage(true);

      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/generate/generate-image`,
        {
          version: selectedModel.version,
          prompt: prompt,
          trigger_word: selectedModel.trigger_word,
          modelId: selectedModel.modelId
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        }
      );
      setImageUrl(response.data.imageUrl);
      setLoadingImage(false);
    } catch (err) {
      console.error('Error generating image:', err);
      alert('Failed to generate image.');
      setLoadingImage(false);
    }
  };

  const downloadImage = async () => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'generated_image.jpg';  // Set the filename for the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Revoke the object URL after download
      URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error('Error downloading image:', err);
    }
  };



  const downloadImage2 = async (url) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'generated_image.jpg';  // Set the filename for the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Revoke the object URL after download
      URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error('Error downloading image:', err);
    }
  };


  const renderStatusBadge = (status) => {
    switch (status) {
      case 'succeeded':
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">Succeeded</span>;
      case 'progress':
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">In Progress</span>;
      case 'processing':
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">Running</span>;
      case 'starting':
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">Starting</span>;
      case 'canceled':
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">Cancelled</span>;
      default:
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">Unknown</span>;
    }
  };

  const deleteImage = async (modelId, imageUrl) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/delete-image`,
        {
          modelId: modelId,
          imageUrl: imageUrl
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        }
      );
      // Update state to remove the deleted image
      setImages(prevImages =>
        prevImages.map(model =>
          model.modelId === modelId
            ? { ...model, images: model.images.filter(img => img !== imageUrl) }
            : model
        )
      );

    } catch (error) {
      console.error("Error deleting image:", error);
      // Optionally show an error message to the user
    }
  };


  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'images') {
      fetchImages(); // Fetch images when switching to the images tab
    }
  };

  if (error) {
    return <div className="text-red-600 text-center">{error}</div>;
  }

  if (!user) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Tabs for Models and Images */}
        <div className="border-b border-gray-200">
          <div className="flex">
            <a
              href="#"
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors duration-300 ease-in-out ${activeTab === 'models' ? 'text-blue-600 border-blue-600' : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'}`}
              onClick={() => handleTabChange('models')}
            >
              Models
            </a>
            <a
              href="#"
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors duration-300 ease-in-out ${activeTab === 'images' ? 'text-blue-600 border-blue-600' : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'}`}
              onClick={() => handleTabChange('images')}
            >
              Images
            </a>
          </div>
        </div>


        {activeTab === 'models' && (
          <>
            <div className="flex justify-between items-center mb-4 mt-4">
              <h2 className="text-2xl font-semibold">Your Training Models</h2>
              {/* Filter Dropdown */}
              <div className="relative">
                <select
                  className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="succeeded">Succeeded</option>
                  <option value="progress">In Progress</option>
                  <option value="processing">Running</option>
                  <option value="canceled">Cancelled</option>
                </select>
              </div>
            </div>

            {/* Card Container for Models */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredModels.length > 0 ? (
                filteredModels.map((model) => (
                  <div
                    key={model.trainModelId}
                    className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleRowClick(model)}  // Handle click to open modal
                  >
                    <h3 className="text-lg font-semibold mb-2 truncate">
                      Model Name: <span className="break-words text-blue">{model.modelName}</span>
                    </h3>
                    {/* <p className="text-gray-600 mb-2">
                      Model ID: <span className="break-words">{model.modelId}</span>
                    </p> */}
                    <p className="text-gray-600 mb-2">
                      Trigger Word: <span className="break-words">{model.trigger_word}</span>
                    </p>
                    <div>{renderStatusBadge(model.status)}</div>
                  </div>
                ))
              ) : (
                <p className="text-center col-span-full">No models found for this status</p>
              )}
            </div>
          </>
        )}

        {activeTab === 'images' && (
          <>
            
            {images.map((model) => (
              <div key={model.modelId} className="mb-4">
                <h3 className="p-4 mt-2 mb-2 text-2xl font-bold text-black tracking-wide">
                  {model.modelName}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {model.images && model.images.length > 0 ? (
                    model.images.map((image, index) => (
                      <div key={index} className="relative bg-white relative p-4 rounded-lg shadow-md">
                        <img
                          src={image}  // Updated to directly reference the image URL
                          alt={`Generated Image ${index + 1}`}
                          className="w-full h-auto rounded-lg aspect-square object-contain"
                        />

                        <DownloadIcon className="m-5 cursor-pointer absolute top-2 right-2 bg-blue-500 text-white py-1 px-3 rounded w-10"
                          onClick={() => downloadImage2(image)} />

                        <TrashIcon className='m-5 cursor-pointer absolute top-2 right-14 bg-red-500 text-white py-1 px-3 rounded w-10'
                          onClick={() => deleteImage(model.modelId, image)} />

                      </div>
                    ))
                  ) : (
                    <p className="text-center col-span-full">No images found</p>
                  )}
                </div>
              </div>
            ))}

          </>
        )}

        {/* Modal for Viewing Model Details */}
        {showModal && selectedModel && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md">
              <button
                className="absolute top-0 right-0 m-2 text-gray-600 hover:text-gray-800"
                onClick={handleModalClose}  // Close the modal
              >
                &times;
              </button>
              <h2 className="text-xl font-semibold mb-4">Generate Image</h2>
              <p className="text-sm text-gray-500 mb-2">
                Model ID: {selectedModel.modelId}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Trigger Word: {selectedModel.trigger_word}
              </p>

              <input
                type="text"
                placeholder="Enter prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg"
                onClick={handleGenerateImage}
                disabled={loadingImage}
              >
                {loadingImage ? 'Generating...' : 'Generate Image'}
              </button>

              {imageUrl && (
                <div className="relative mt-4">
                  <img src={imageUrl} alt="Generated" className="w-full h-auto rounded-lg" />
                  {/* <button
                    className="absolute top-2 right-2 bg-green-500 text-white py-1 px-3 rounded-lg"
                    onClick={downloadImage}
                  >
                    Download
                  </button> */}
                  <DownloadIcon className="m-2 cursor-pointer absolute top-2 right-2 bg-blue-500 text-white py-1 px-3 rounded w-10"
                    onClick={downloadImage} />
                </div>
              )}

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;


/* Working */