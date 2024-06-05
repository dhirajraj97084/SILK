

 import React, { useState } from 'react';
import Layout from '../../layout/Layout';

const images = [
  'https://media.istockphoto.com/id/1128914829/photo/fashion-pretty-woman-with-headphones-listening-to-music-over-neon-background.jpg?b=1&s=612x612&w=0&k=20&c=OlOEcYMnw9Qxlje--HBjYg5FAfzprIFdV8tJIYotWnk=',

  'https://media.istockphoto.com/id/514466938/photo/beauty-in-composition-frame.jpg?b=1&s=612x612&w=0&k=20&c=BsGvcR93j09Ty6W9S85biK9WBV1l6VF6IgRwL-ZfXsc=',

  'https://images.pexels.com/photos/12093848/pexels-photo-12093848.jpeg?auto=compress&cs=tinysrgb&w=600',

  'https://media.istockphoto.com/id/1085625462/photo/wheat-crop-field-nature-landscape.jpg?b=1&s=612x612&w=0&k=20&c=1jnrjGkoSqE8DbaoJlMrNcdZHl-WR6dTRRD98e6eSgw=',

  'https://images.pexels.com/photos/20471208/pexels-photo-20471208/free-photo-of-hands-with-henna-drawings.jpeg?auto=compress&cs=tinysrgb&w=600',

  'https://media.istockphoto.com/id/1141906552/photo/indian-hindu-couple-holding-each-other-hands-during-their-marriage-symbolising-love-and.jpg?s=612x612&w=0&k=20&c=brG8OkGBo5-tIABHlnGtVMu9X4lAC8ebpqGA2Xire6E=',

  'https://media.istockphoto.com/id/1458751444/photo/two-vibrant-young-women-having-fun-holding-makeup-brushes-in-a-studio.jpg?s=612x612&w=0&k=20&c=Qpy9h8dCPb1nmLE1rL5bU3FDcfoHcDsPg-3ExFd9g4o=',

  'https://media.istockphoto.com/id/1171091745/photo/portrait-of-smiling-handsome-male-holding-smart-phone-and-listening-music-with-headphones.jpg?s=612x612&w=0&k=20&c=FALe8Xbs0fc7cPsVfQt6e11ZRCfaIn2YAGNOSeJ-wv8=',

  'https://media.istockphoto.com/id/1344653532/photo/preparing-for-christmas.jpg?s=612x612&w=0&k=20&c=9yptamCOajHkMKFVf41RGmfDWByb7HMRwRe7Oe5Fac0=',

  'https://media.istockphoto.com/id/1256667201/photo/winning-online-millennial-guy-in-headphones-celebrates-win-holding-tablet.jpg?s=612x612&w=0&k=20&c=RNJWAXyWRYsYc9R0FNP1naRqwSZgGzW1olXgBODZ2QU='
];

const  BrightShoot = () => {
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

export default BrightShoot;

