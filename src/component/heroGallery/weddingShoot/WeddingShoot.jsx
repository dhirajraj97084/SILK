import React, { useState } from 'react';
import Layout from '../../layout/Layout';

const images = [
  'https://images.pexels.com/photos/8910396/pexels-photo-8910396.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
  'https://media.istockphoto.com/id/1127706607/photo/hindi-wedding-ceremony.jpg?s=612x612&w=0&k=20&c=SjBLUmakt651zYSNEOZqwROdZtbN8ScqVcVbGyu1iBY=',
  'https://media.istockphoto.com/id/1273494869/photo/beautiful-woman-with-diya-and-statue-of-lord-ganesha.jpg?s=612x612&w=0&k=20&c=0E4l4DorQUNlzGKvp3-_MZBOA2RLcHdtX9gfvBz_3CM=',
  'https://media.istockphoto.com/id/1939817022/photo/bride-hand-in-groom-hand-at-indian-wedding-bond-and-togetherness-concept.jpg?s=612x612&w=0&k=20&c=h2cJEV18hUmYxJa-GKJMZ4Psp0W1FyrdiBgrXkoKvGU=',
  'https://media.istockphoto.com/id/1314779334/photo/traditional-indian-wedding-ceremony-groom-holding-hand-in-bride-hand.jpg?s=612x612&w=0&k=20&c=RI2m45BK38Hvs03OweJDklzUfjqCeaxYVcrKOKSH7oE=',
  'https://media.istockphoto.com/id/1141906552/photo/indian-hindu-couple-holding-each-other-hands-during-their-marriage-symbolising-love-and.jpg?s=612x612&w=0&k=20&c=brG8OkGBo5-tIABHlnGtVMu9X4lAC8ebpqGA2Xire6E=',
  'https://media.istockphoto.com/id/1691793939/photo/the-beautiful-decorations-cultural-program-wedding-decorations-new-year-dj-night.jpg?s=612x612&w=0&k=20&c=qhaaBNRO_q8wzPUQsKC9dnQQsO5iCwbRDwMiXoFVJJI=',
  'https://media.istockphoto.com/id/866987706/photo/indian-wedding-hands.jpg?s=612x612&w=0&k=20&c=6L-u9qhFPv9MjDnF4UK4AqjVbDKM4_8Xad72IHhwPZE=',
  'https://media.istockphoto.com/id/536747691/photo/beach-wedding-pavilion-by-the-ocean.jpg?s=612x612&w=0&k=20&c=7XlMDpugZ0H3Kj61ZfgxWpbXg28tPbaxwc7ZOTahD2g=',
  'https://media.istockphoto.com/id/1334681862/photo/indian-couple-in-traditional-wedding-event-very-beautiful-moment.jpg?s=612x612&w=0&k=20&c=X3PZE5rwzv1e3322P8GLPMEdExVCbspAFQLIH9q0D0g='
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
      <div className="grid grid-cols-2  md:grid-cols-3  gap-4 py-14 px-4 md:px-6 lg:px-10">
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
            <img src={selectedImage} alt="Selected" className="max-w-full max-h-full px-3"/>
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
