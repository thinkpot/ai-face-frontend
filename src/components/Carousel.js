import React, { useEffect, useState } from 'react';

const images = [
  'actors_1.webp',
  'actors_2.webp',
  'actors_3.webp',
  'actors_4.webp',
  'actors_5.webp',
  'actors_6.webp',
  'actors_7.webp',
  'actors_8.webp',
  'actors_9.webp',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Automatically scroll every 3 seconds
    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex * 100) / 9}%)`,
          width: `${(totalImages + 5) * 20}%`, // Adjust width to accommodate duplicated images
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 px-1" style={{width:"10%"}}> {/* Smaller size */}
            <img
              src={image}
              alt={`Image ${index}`}
              className="w-auto h-auto object-cover rounded-lg" // Keep aspect ratio and rounded corners
              style={{ aspectRatio: '3 / 4' }} // Maintain portrait aspect ratio
            />
          </div>
        ))}
        {/* Duplicate the first few images for seamless scrolling */}
        {images.slice(0, 9).map((image, index) => (
          <div key={`dup-${index}`} className="flex-shrink-0 px-1" style={{width:"10%"}}>
            <img
              src={image}
              alt={`Image ${index}`}
              className="w-auto h-auto object-cover rounded-lg"
              style={{ aspectRatio: '3 / 4' }}
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={() => setCurrentIndex((currentIndex - 1 + totalImages) % totalImages)}
        className="absolute left-0 bg-blue-600 text-white p-2 rounded-full z-10"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 bg-blue-600 text-white p-2 rounded-full z-10"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
