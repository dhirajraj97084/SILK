import React, { useState } from 'react';
import Layout from '../../layout/Layout';

const images = [
  'https://media.istockphoto.com/id/1291682560/photo/young-couple-taking-break-from-sightseeing-for-selfie.jpg?b=1&s=612x612&w=0&k=20&c=5VbHm7RMZTnNa3HZbwFylNC8NivzWw_AdnbAk3nBKlY=',

  'https://media.istockphoto.com/id/938524880/photo/the-perfect-backdrop-for-our-love.jpg?b=1&s=612x612&w=0&k=20&c=j0P2G_TUsgJ2y8Dt1TV3W6LCMO8qFYt3XpM6nSdFVRg=',
  
  'https://media.istockphoto.com/id/1273494869/photo/beautiful-woman-with-diya-and-statue-of-lord-ganesha.jpg?s=612x612&w=0&k=20&c=0E4l4DorQUNlzGKvp3-_MZBOA2RLcHdtX9gfvBz_3CM=',

  'https://media.istockphoto.com/id/943005118/photo/happy-couple-of-tourists-taking-selfie-in-old-city.jpg?b=1&s=612x612&w=0&k=20&c=kfVgGyjly0A6u_XvDuztnS-XStLTNBmk3Pc4SKPSfgA=',
  'https://media.istockphoto.com/id/1314779334/photo/traditional-indian-wedding-ceremony-groom-holding-hand-in-bride-hand.jpg?s=612x612&w=0&k=20&c=RI2m45BK38Hvs03OweJDklzUfjqCeaxYVcrKOKSH7oE=',
  'https://media.istockphoto.com/id/1141906552/photo/indian-hindu-couple-holding-each-other-hands-during-their-marriage-symbolising-love-and.jpg?s=612x612&w=0&k=20&c=brG8OkGBo5-tIABHlnGtVMu9X4lAC8ebpqGA2Xire6E=',

  'https://media.istockphoto.com/id/1094338224/photo/our-seaside-escape.jpg?b=1&s=612x612&w=0&k=20&c=VH5Hc8STaVL3rtkzQAPd1Vll3PUObTWiPlUnyhCAU8w=',

  'https://media.istockphoto.com/id/866987706/photo/indian-wedding-hands.jpg?s=612x612&w=0&k=20&c=6L-u9qhFPv9MjDnF4UK4AqjVbDKM4_8Xad72IHhwPZE=',
  'https://media.istockphoto.com/id/1175841945/photo/the-couple-travels-the-world-a-couple-in-love-travels-to-sri-lanka-the-couple-travels-to-asia.jpg?b=1&s=612x612&w=0&k=20&c=HEsRJIj9fwXFbQtJ_MIa0Okqyq4JUKoJMqRYsTdyJSE=',
  'https://media.istockphoto.com/id/1009987674/photo/mixed-raced-couple-of-students-taking-mobile-phones-caucasian-girl-and-her-african-boyfriend.jpg?b=1&s=612x612&w=0&k=20&c=Ux4cU2eF7viBg9-ZRaoyiK3Q5NXbQjf_ZaUYe1HsMSE='
];

const CoupleShoot = () => {
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

export default CoupleShoot;
