import React from 'react';
import CreateHeadshotButton from './CreateHeadshotButton';

const Gallery = () => {
    const images = [
        'ai_generated_images/ai_actors_1.jpeg',
        'ai_generated_images/ai_actors_2.jpeg',
        'ai_generated_images/ai_actors_3.jpeg',
        'ai_generated_images/ai_actors_4.jpeg',
        'ai_generated_images/ai_actors_5.jpeg',
        'ai_generated_images/ai_actors_6.jpeg',
        'ai_generated_images/ai_actors_7.jpeg',
        'ai_generated_images/ai_actors_8.jpeg',
        'ai_generated_images/ai_actors_9.jpeg',
        'ai_generated_images/ai_actors_10.jpeg',
        'ai_generated_images/ai_actors_11.jpeg',
        'ai_generated_images/ai_actors_12.jpeg',
        // Add more image URLs here
    ];

    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-4xl font-extrabold mb-8 text-center text-gray-900 tracking-tight">
                    Explore Our AI-Crafted Masterpieces
                </h3>
                <p className="text-center text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
                    Discover a collection of stunning AI-generated images, each crafted uniquely by our powerful models.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                        >
                            <img
                                src={image}
                                alt={`AI Generated ${index + 1}`}
                                className="object-cover w-full h-64 transition-opacity duration-300 opacity-90 group-hover:opacity-100"
                            />
                            {/* <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                                <span className="text-white text-lg font-semibold">
                                    AI Image {index + 1}
                                </span>
                            </div> */}
                        </div>
                    ))}
                </div>
                <div className="mt-10 text-center">
                    <CreateHeadshotButton onClick={() => window.location.href = '/gender'} />
                </div>
            </div>
        </section>
    );
};

export default Gallery;
