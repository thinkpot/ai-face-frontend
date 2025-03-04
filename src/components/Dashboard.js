import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DownloadIcon } from '@heroicons/react/solid'
import { TrashIcon } from '@heroicons/react/solid'
import PromptGenerator from './PromptGenerator';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import StyleSelectionModal from './StyleSelectionModal';

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
  const [selectedImageModel, setSelectedImageModel] = useState('all');
  const [showPromptGenerator, setShowPromptGenerator] = useState(false);
  const [isGenerateModalOpen, setIsGenerateModalOpen] = useState(false);
  const [isStyleModalOpen, setIsStyleModalOpen] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const navigate = useNavigate();


  const handleCreateModel = () => {
    navigate('/gender');
  }

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
    console.log('Selected Model Data:', model); // Log entire model data
    console.log('Model Gender:', model.gender); // Log specifically the gender field
    
    setSelectedModel({
      ...model,
      gender: model.gender || 'male'
    });
    setShowModal(true);
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

      const requestData = {
        version: selectedModel.version,
        prompt: prompt,
        trigger_word: selectedModel.trigger_word,
        modelId: selectedModel.modelId,
        ...(selectedStyle && { styleUrl: selectedStyle.url })
      };

      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/generate/generate-image`,
        requestData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        }
      );
      setImageUrl(response.data.imageUrl);
      setLoadingImage(false);
      setSelectedStyle(null);
      setPrompt('');
      setIsGenerateModalOpen(false);
    } catch (err) {
      console.error('Error generating image:', err.response.data.message);
      alert(err.response.data.message);
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
      setSelectedImageModel('all');
    }
  };

  const handlePromptGenerated = (generatedPrompt) => {
    setPrompt(generatedPrompt);
    setShowPromptGenerator(false);
  };

  const handleStyleSelect = (style) => {
    setSelectedStyle(style);
    // You can use the selected style URL here for your image generation
    console.log('Selected style:', style);
  };

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  if (error) {
    return <div className="text-red-600 text-center">{error}</div>;
  }

  if (!user) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 bg-gradient-to-br from-blue-100 to-purple-100">
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
              <div className="flex items-center gap-2">

                <button onClick={handleCreateModel} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                  Create Model
                </button>

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
            </div>

            <div class="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">

              <span class="font-medium">Alert! Model training will take approximately 30 minutes Check out on image tab after 30 minutes</span>.
            </div>


            {/* Card Container for Models */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredModels.length > 0 ? (
                filteredModels.map((model) => (
                  <div
                    key={model.trainModelId}
                    className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleRowClick(model)} // Handle click to open modal
                  >
                    {/* Display Model Image */}
                    <img
                      src={model.generatedImageUrl ? model.generatedImageUrl : 'default_model.png'} // Assuming generatedImageUrl is available in the model object
                      alt={model.modelName}
                      className="w-full h-auto rounded-lg aspect-square object-contain" // Adjust size as needed
                    />
                    <h3 className="text-lg font-semibold mb-2 truncate">
                      Model Name: <span className="break-words text-blue">{model.modelName}</span>
                    </h3>
                    {/* Optional: Display Model ID if needed */}
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
            <div className="flex justify-between items-center mb-4 mt-4">
              <h2 className="text-3xl font-bold text-gray-800">Generated Images</h2>
              <div className="relative">
                <select
                  className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  value={selectedImageModel}
                  onChange={(e) => setSelectedImageModel(e.target.value)}
                >
                  <option value="all">All Models</option>
                  {models.map((model) => (
                    <option key={model.modelId} value={model.modelId}>
                      {model.modelName}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {images
              .filter((model) => selectedImageModel === 'all' || model.modelId === selectedImageModel)
              .map((model) => (
                <div key={model.modelId} className="mb-4">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-700 border-b pb-2">
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
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md max-h-[90vh] overflow-y-auto">
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 z-10"
                onClick={handleModalClose}
              >
                ✕
              </button>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Generate Image</h2>
                <p className="text-sm text-gray-500">
                  Model ID: {selectedModel.modelId}
                </p>
                <p className="text-sm text-gray-500">
                  Trigger Word: {selectedModel.trigger_word}
                </p>
                <div className="mb-4">
                  <button
                    onClick={() => setIsStyleModalOpen(true)}
                    className="w-full px-4 py-2 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 transition-colors mb-4"
                  >
                    Choose Style Reference
                  </button>

                  {selectedStyle && (
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">Selected Style:</p>
                      <img
                        src={selectedStyle.url}
                        alt="Selected style"
                        className="w-20 h-20 object-cover rounded-md"
                      />
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Enter your prompt"
                    className="w-full p-2 border rounded-md mb-4"
                    value={prompt}
                    onChange={handlePromptChange}
                  />

                  <button
                    className="mt-2 text-blue-500 underline"
                    onClick={() => setShowPromptGenerator(!showPromptGenerator)}
                  >
                    {showPromptGenerator ? 'Hide Prompt Generator' : 'Use Automatic Prompt Generator'}
                  </button>
                </div>
                {showPromptGenerator && (
                  <PromptGenerator onPromptGenerated={handlePromptGenerated} />
                )}


                <button
                  className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  onClick={handleGenerateImage}
                  disabled={loadingImage}
                >
                  {loadingImage ? 'Generating...' : 'Generate Image'}
                </button>

                {loadingImage && (
                  <div className="mt-4 flex justify-center items-center">
                    <div className="loader"></div>
                    <span className="ml-2 text-gray-600">Generating image...</span>
                  </div>
                )}

                {imageUrl && !loadingImage && (
                  <div className="relative mt-4">
                    <img src={imageUrl} alt="Generated" className="w-full h-auto rounded-lg" />
                    <DownloadIcon className="m-5 cursor-pointer absolute top-2 right-2 bg-blue-500 text-white py-1 px-3 rounded w-10"
                      onClick={() => downloadImage(imageUrl)} />
                  </div>
                )}
              </div>
            </div>

            <style jsx>{`
        .loader {
          border: 3px solid #f3f3f3;
          border-top: 3px solid #3498db;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
          </div>
        )}

        {/* Style Selection Modal */}
        <StyleSelectionModal
          isOpen={isStyleModalOpen}
          onClose={() => setIsStyleModalOpen(false)}
          gender={selectedModel?.gender || 'male'} // Pass the gender from selected model
          onStyleSelect={handleStyleSelect}
        />
      </div>
    </div>
  );
};

export default Dashboard;


/* Working */