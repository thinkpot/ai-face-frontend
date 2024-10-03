import React from "react";
import Footer from "./Footer"

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
          Refund Policy
        </h1>
        <p className="text-gray-700 mb-6 leading-relaxed">
          At <strong>Tasvir</strong>, we are committed to providing an excellent experience with our AI-powered image generation service. Your satisfaction is important to us, and we aim to ensure that all users receive the high-quality images they expect. However, if for any reason you are not satisfied with the results, we offer a straightforward refund policy for specific services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          1. Scope of Refund
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Our refund policy applies exclusively to <strong>image generation charges</strong>. This includes the cost of generating images using pre-trained models on our platform. Please note that model training fees are non-refundable, as significant computational resources are required to personalize these models based on user-uploaded data.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          2. Eligibility for Refund
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          To be eligible for a refund on image generation charges, users must submit a refund request within <strong>7 days</strong> of the transaction. Refunds may be considered under the following circumstances:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>The generated images are of unacceptable quality (e.g., unclear, distorted, or unusable).</li>
          <li>Technical issues occurred during the image generation process.</li>
          <li>There were errors with the service that prevented successful image generation.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          3. How to Request a Refund
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          If you believe you are eligible for a refund based on the above criteria, please contact our customer support team via email at <a href="mailto:tasvir.info.1@tasvir.tech" className="text-blue-600 hover:underline">tasvir.info.1@tasvir.tech</a>. In your request, please provide the following details:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Your account email or username</li>
          <li>Transaction ID or receipt of the image generation charge</li>
          <li>A description of the issue that led to the refund request</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          4. Refund Processing
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Once your refund request has been received, our team will review it and notify you of the approval or rejection of your claim within <strong>3-5 business days</strong>. If your refund is approved, it will be processed, and a credit will automatically be applied to your original payment method. Please allow up to <strong>7 business days</strong> for the refund to reflect in your account, depending on your bank or payment provider.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          5. Non-Refundable Charges
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Please note that <strong>model training fees</strong> are non-refundable. This fee covers the computational resources and processing required to train personalized models using your uploaded images. Due to the resource-intensive nature of this process, we cannot offer refunds for model training services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          6. Contact Information
        </h2>
        <p className="text-gray-700 leading-relaxed">
          If you have any questions about our refund policy, or if you need assistance with a specific refund request, please do not hesitate to contact us at <a href="mailto:tasvir.info.1t@tasvir.tech" className="text-blue-600 hover:underline">tasvir.info.1@tasvir.tech</a>. Our customer support team is available to help ensure your experience with Tasvir is a positive one.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
