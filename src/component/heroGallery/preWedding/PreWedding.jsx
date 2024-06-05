import React, { useState } from 'react';
import Layout from '../../layout/Layout';

const images = [
  'https://images.pexels.com/photos/2402239/pexels-photo-2402239.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/6914621/pexels-photo-6914621.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/12093848/pexels-photo-12093848.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://media.istockphoto.com/id/1939817022/photo/bride-hand-in-groom-hand-at-indian-wedding-bond-and-togetherness-concept.jpg?s=612x612&w=0&k=20&c=h2cJEV18hUmYxJa-GKJMZ4Psp0W1FyrdiBgrXkoKvGU=',
  'https://images.pexels.com/photos/20471208/pexels-photo-20471208/free-photo-of-hands-with-henna-drawings.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://media.istockphoto.com/id/1141906552/photo/indian-hindu-couple-holding-each-other-hands-during-their-marriage-symbolising-love-and.jpg?s=612x612&w=0&k=20&c=brG8OkGBo5-tIABHlnGtVMu9X4lAC8ebpqGA2Xire6E=',
  'https://media.istockphoto.com/id/1691793939/photo/the-beautiful-decorations-cultural-program-wedding-decorations-new-year-dj-night.jpg?s=612x612&w=0&k=20&c=qhaaBNRO_q8wzPUQsKC9dnQQsO5iCwbRDwMiXoFVJJI=',
  'https://media.istockphoto.com/id/866987706/photo/indian-wedding-hands.jpg?s=612x612&w=0&k=20&c=6L-u9qhFPv9MjDnF4UK4AqjVbDKM4_8Xad72IHhwPZE=',
  'https://media.istockphoto.com/id/1344653532/photo/preparing-for-christmas.jpg?s=612x612&w=0&k=20&c=9yptamCOajHkMKFVf41RGmfDWByb7HMRwRe7Oe5Fac0=',
  'https://media.istockphoto.com/id/1174365894/photo/soon-your-wife-will-help-you-with-this.jpg?s=612x612&w=0&k=20&c=3tkLiIupjSosNMiwIBtIRj0J65aaVi1k6PGOr2yZvJY='
];

const PreWeddingShoot = () => {
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

export default PreWeddingShoot;
