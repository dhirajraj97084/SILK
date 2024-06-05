

import React, { useState } from 'react';
import Layout from '../../layout/Layout';

const images = [
  'https://images.pexels.com/photos/1793037/pexels-photo-1793037.jpeg?auto=compress&cs=tinysrgb&w=600',

  'https://images.pexels.com/photos/1405528/pexels-photo-1405528.jpeg?auto=compress&cs=tinysrgb&w=600',

  'https://images.pexels.com/photos/12093848/pexels-photo-12093848.jpeg?auto=compress&cs=tinysrgb&w=600',

  'https://images.pexels.com/photos/13677063/pexels-photo-13677063.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',

  'https://images.pexels.com/photos/4868786/pexels-photo-4868786.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',

  'https://images.pexels.com/photos/5804893/pexels-photo-5804893.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',

  'https://media.istockphoto.com/id/1458751444/photo/two-vibrant-young-women-having-fun-holding-makeup-brushes-in-a-studio.jpg?s=612x612&w=0&k=20&c=Qpy9h8dCPb1nmLE1rL5bU3FDcfoHcDsPg-3ExFd9g4o=',

  'https://media.istockphoto.com/id/1171091745/photo/portrait-of-smiling-handsome-male-holding-smart-phone-and-listening-music-with-headphones.jpg?s=612x612&w=0&k=20&c=FALe8Xbs0fc7cPsVfQt6e11ZRCfaIn2YAGNOSeJ-wv8=',

  'https://images.pexels.com/photos/10024303/pexels-photo-10024303.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',

  'https://images.pexels.com/photos/8910396/pexels-photo-8910396.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
];

const   Birthday = () => {
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

export default Birthday;


