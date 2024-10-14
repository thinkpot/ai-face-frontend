import React from 'react';
import { Camera, Mail, Image, Linkedin } from 'lucide-react';

const TasvirFeatures = () => {
  const features = [
    {
      title: 'Professional Portraits',
      description: 'Capture stunning professional portraits with our AI headshot generator',
      icon: <Camera className="h-6 w-6" />
    },
    {
      title: 'Email Signature Creator',
      description: 'Generate polished email signatures featuring your new portrait.',
      icon: <Mail className="h-6 w-6" />
    },
    {
      title: 'Background Customization',
      description: 'Choose from a variety of backgrounds to personalize your photos.',
      icon: <Image className="h-6 w-6" />
    },
    {
      title: 'LinkedIn Optimization',
      description: 'Preview and optimize your portrait for LinkedIn profiles.',
      icon: <Linkedin className="h-6 w-6" />
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 mt-5">
      <h1 className="text-3xl font-bold text-center mb-8">Enhance Your Professional Image with Tasvir</h1>
      <p className="text-center mb-8">Your portrait session includes access to a suite of powerful image enhancement tools.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="text-blue-500 mr-3">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasvirFeatures;