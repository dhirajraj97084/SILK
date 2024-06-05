

import React, { useState } from 'react';
import Layout from '../../layout/Layout';

const images = [
  'https://images.pexels.com/photos/24238570/pexels-photo-24238570/free-photo-of-baby-photography-by-anil-sharma.jpeg?auto=compress&cs=tinysrgb&w=400',

  'https://images.pexels.com/photos/24238584/pexels-photo-24238584/free-photo-of-baby-photography-by-anil-sharma.jpeg?auto=compress&cs=tinysrgb&w=400',

  'https://images.pexels.com/photos/12093848/pexels-photo-12093848.jpeg?auto=compress&cs=tinysrgb&w=600',

  'https://images.pexels.com/photos/13677063/pexels-photo-13677063.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',

  'https://images.pexels.com/photos/20719588/pexels-photo-20719588/free-photo-of-a-baby-sleeping-in-bucket-photoshoot.jpeg?auto=compress&cs=tinysrgb&w=400',

  'https://images.pexels.com/photos/5804893/pexels-photo-5804893.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',

  'https://media.istockphoto.com/id/1458751444/photo/two-vibrant-young-women-having-fun-holding-makeup-brushes-in-a-studio.jpg?s=612x612&w=0&k=20&c=Qpy9h8dCPb1nmLE1rL5bU3FDcfoHcDsPg-3ExFd9g4o=',

  'https://images.pexels.com/photos/24238648/pexels-photo-24238648/free-photo-of-baby-photography-by-anil-sharma.jpeg?auto=compress&cs=tinysrgb&w=400',

  'https://images.pexels.com/photos/24238650/pexels-photo-24238650/free-photo-of-baby-photography-by-anil-sharma.jpeg?auto=compress&cs=tinysrgb&w=400',

  'https://images.pexels.com/photos/20553933/pexels-photo-20553933/free-photo-of-a-man-holding-a-baby-in-his-arms.jpeg?auto=compress&cs=tinysrgb&w=400'
];

const   BabyShoot= () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <Layout className="container mx-auto ">
      <div className="grid grid-cols-2  md:grid-cols-3  gap-4 py-14 px-4 md:px-6 lg:px-10">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img 
              src={image} 
              alt={`Gallery Image ${index + 1}`} 
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <img src={selectedImage} alt="Selected" className="max-w-full max-h-full"/>
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

export default BabyShoot;


