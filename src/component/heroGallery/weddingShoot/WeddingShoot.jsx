import React, { useState } from 'react';
import Layout from '../../layout/Layout';

const images = [
  '/img/we1.JPG',
  '/img/we2.JPG',
  '/img/we3.JPG',
  '/img/we4.JPG',
  '/img/we5.JPG',
  '/img/we6.JPG',
  '/img/we7.JPG',
  '/img/we8.JPG',
  '/img/we9.JPG',
  '/img/we10.JPG',
  '/img/we11.JPG',
  '/img/we12.JPG',
  '/img/we13.JPG',
  '/img/we14.JPG',
  
];

const WeddingShoot = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <Layout className="container mx-auto ">
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  gap-4 py-14 px-4 md:px-6 lg:px-10">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img 
              src={image} 
              alt={`Gallery Image ${index + 1}`} 
              className="w-full h-full object-cover cursor-pointer px-3"
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="fixed inset-0 px-3 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <img src={selectedImage} alt="Selected" className="lg:h-[40em] lg:w-[35em] md:w-[30em] px-3"/>
            <button 
              className="absolute top-2 right-2 text-white text-3xl"
              onClick={handleClose}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default WeddingShoot;
