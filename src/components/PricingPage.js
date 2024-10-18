import React from "react";
import CreateHeadshotButton from "./CreateHeadshotButton";

const PricingPage = () => {
  return (
    <div className="mt-10 py-12 bg-white rounded-lg max-w-5xl mx-auto px-8 text-center">
      <h3 className="text-3xl font-semibold mb-4 text-gray-800">Affordable Pricing</h3>
      <p className="text-gray-600 mb-6">
        At <strong>Tasvir</strong>, we pride ourselves on offering the <strong>cheapest and fastest</strong> AI image generation services in the market. Not only do we offer exceptional quality, but our model training process also takes just <strong>30 minutes</strong>!
      </p>
      <p className="text-gray-600 mb-6">
        Whether you're an artist, content creator, or business, we provide competitive pricing that fits your needs:
      </p>
      <div className="flex justify-center space-x-4 mb-8">
        <div className="p-6 border border-gray-300 rounded-lg shadow-md">
          <h4 className="text-2xl font-bold text-gray-800">Model Training</h4>
          <p className="text-2xl font-semibold text-blue-600">₹349 (~$4)</p>
          <p className="text-gray-600">One-time fee for training your personalized AI model.</p>
          <p className="text-gray-600 mt-4">
            <strong>Training Time:</strong> <span className="text-blue-600">Only 30 minutes</span>
          </p>
        </div>
        <div className="p-6 border border-gray-300 rounded-lg shadow-md">
          <h4 className="text-2xl font-bold text-gray-800">Image Generation</h4>
          <p className="text-2xl font-semibold text-blue-600">₹7 (~$0.09)</p>
          <p className="text-gray-600">Per image generated from your trained model.</p>
          <p className="text-gray-600 mt-4">
            <strong>Speed:</strong> <span className="text-blue-600">Instant generation</span>
          </p>
        </div>
      </div>
      <div className="text-2xl font-semibold text-gray-800 mb-4">
        <span className="text-lg font-medium">Total Pricing:</span> ₹307 (~$4.09)
      </div>
      <p className="text-gray-600 mb-6">
        You won't find a faster or more affordable service. Get started today and create stunning AI-generated images in no time!
      </p>
      <CreateHeadshotButton onClick={() => window.location.href = '/gender'} />
    </div>
  );
};

export default PricingPage;
