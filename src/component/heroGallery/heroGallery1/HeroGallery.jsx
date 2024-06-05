// import React from 'react'
// import { Link } from 'react-router-dom';
// const cartItems = [
//     {
//       image:"https://images.pexels.com/photos/5729026/pexels-photo-5729026.jpeg?auto=compress&cs=tinysrgb&w=600",
//       name: "WEDDING SHOOT",
//       src:"/wedding"
//     },
//     {
//       image:
//         "https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg?auto=compress&cs=tinysrgb&w=600",
//       name: " PRE WEDDING SHOOT",
//       src:"/prewedding"
  
//     },
//     {
//       image:
//         "https://images.pexels.com/photos/5560472/pexels-photo-5560472.jpeg?auto=compress&cs=tinysrgb&w=600",
//       name: "BRIGHT SHOOT",
//       src:"/bright"
//     },
//     {
//       image:
//         "https://images.pexels.com/photos/11111870/pexels-photo-11111870.jpeg?auto=compress&cs=tinysrgb&w=600",
//       name: "COUPLE SHOOT",
//       src:"/couple"
//     },
//     {
//       image:
//         "https://media.istockphoto.com/id/1869912632/photo/multi-generational-family-coloring-the-coloring-book-during-christmas-celebration.jpg?s=612x612&w=0&k=20&c=8LYl2oJYgPsqFBcGE472sElEQchfENWAKi38wQNVWhY=",
//       name: "BIRTHDAY SHOOT",
//       src:"/birthday"
//     },
//     {
//       image:
//         "https://media.istockphoto.com/id/1149516194/photo/she-loves-being-playful-with-mom.jpg?s=612x612&w=0&k=20&c=M84KCjWBGshspeik5WhJcJdspom5SO2i2KpovUJ3OtQ=",
//       name: "BABY SHOOT",
//       src:"/baby"
//     },
//   ];

// function HeroGallery() {
//   return (
//     <div>
//       <div className="mainbox">
//       <div className="carts py-4 px-4 md:px-8 lg:px-20 ">
//             <div className="box1 grid md:grid-cols-3 grid-cols-1">
//               {cartItems.map((item, index) => {
//                 return (
//                   <Link key={index} to={item.src}>
//                   <div
//                     className="main hover:bg-transparent p-3 rounded-md shadow-md hover:bg-gray-300 m-3"
//                   >
//                     <div className="img">
//                       <img
//                         className="h-[20em] w-full mx-auto"
//                         src={item.image}
//                         alt="img"
//                       />
//                     </div>
//                     <div className="name text-center py-4 text-xl">{item.name}</div>
//                   </div>
//                   </Link>
//                 );
//               })}
//             </div>
//           </div>
//       </div>
//     </div>
//   )
// }

// export default HeroGallery


// import React from "react";
// import {
//   Button,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
//   Avatar,
//   IconButton,
//   Typography,
//   Card,
// } from "@material-tailwind/react";
 
// export default function HeroGallery() {
//   const [open, setOpen] = React.useState(false);
//   const [isFavorite, setIsFavorite] = React.useState(false);
 
//   const handleOpen = () => setOpen((cur) => !cur);
//   const handleIsFavorite = () => setIsFavorite((cur) => !cur);
 
//   return (
//     <>
//       <div className="boxes px-4 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//       <Card 
//         className="p-4 shadow-md  m-3 w-96 hover:bg-gray-100 cursor-pointer overflow-hidden "
//         onClick={handleOpen}
//       >
//         <img
//           alt="nature"
//           className="h-full w-full object-cover object-center"
//           src="https://images.pexels.com/photos/5729026/pexels-photo-5729026.jpeg?auto=compress&cs=tinysrgb&w=600"
//         />
//         <h1 className=" text-center py-2">WEDDING SHOOT</h1>
//       </Card>
//       <Card 
//         className="p-4 shadow-md  m-3 w-96 hover:bg-gray-100 cursor-pointer overflow-hidden "
//         onClick={handleOpen}
//       >
//         <img
//           alt="nature"
//           className="h-full w-full object-cover object-center"
//           src="https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg?auto=compress&cs=tinysrgb&w=600"
//         />
//         <h1 className=" text-center py-2">PRE WEDDING SHOOT</h1>
//       </Card>

//       <Card 
//         className="p-4 shadow-md  m-3 w-96 hover:bg-gray-100 cursor-pointer overflow-hidden "
//         onClick={handleOpen}
//       >
//         <img
//           alt="nature"
//           className="h-full w-full object-cover object-center"
//           src="https://images.pexels.com/photos/5560472/pexels-photo-5560472.jpeg?auto=compress&cs=tinysrgb&w=600"
//         />
//         <h1 className=" text-center py-2">BRIGHT SHOOT</h1>
//       </Card>

//       <Card 
//         className="p-4 shadow-md  m-3 w-96 hover:bg-gray-100 cursor-pointer overflow-hidden "
//         onClick={handleOpen}
//       >
//         <img
//           alt="nature"
//           className="h-full w-full object-cover object-center"
//           src="https://media.istockphoto.com/id/1869912632/photo/multi-generational-family-coloring-the-coloring-book-during-christmas-celebration.jpg?s=612x612&w=0&k=20&c=8LYl2oJYgPsqFBcGE472sElEQchfENWAKi38wQNVWhY="
//         />
//         <h1 className=" text-center py-2">BIRTHDAY SHOOT</h1>
//       </Card>

//       <Card 
//         className="p-4 shadow-md  m-3 w-96 hover:bg-gray-100 cursor-pointer overflow-hidden "
//         onClick={handleOpen}
//       >
//         <img
//           alt="nature"
//           className="h-full w-full object-cover object-center"
//           src="https://images.pexels.com/photos/11111870/pexels-photo-11111870.jpeg?auto=compress&cs=tinysrgb&w=600"
//         />
//         <h1 className=" text-center py-2">COUPLE SHOOT</h1>
//       </Card>

//       <Card 
//         className="p-4 shadow-md  m-3 w-96 hover:bg-gray-100 cursor-pointer overflow-hidden "
//         onClick={handleOpen}
//       >
//         <img
//           alt="nature"
//           className="h-full w-full object-cover object-center"
//           src="https://media.istockphoto.com/id/1149516194/photo/she-loves-being-playful-with-mom.jpg?s=612x612&w=0&k=20&c=M84KCjWBGshspeik5WhJcJdspom5SO2i2KpovUJ3OtQ="
//         />
//         <h1 className=" text-center py-2">BABY SHOOT</h1>
//       </Card>

//       </div>
//        <Dialog size="xl" open={open} handler={handleOpen}>        
//         <DialogBody>
//           <img
//             alt="nature"
//             className="h-[38rem] w-full rounded-lg object-cover object-center"
//             src="https://images.pexels.com/photos/5729026/pexels-photo-5729026.jpeg?auto=compress&cs=tinysrgb&w=600"
//           />
//         </DialogBody> 
                
//       </Dialog>
      
      
     
//     </>
//   );
// }

import React from 'react'
import WeddingShoot from '../weddingShoot/WeddingShoot'
import PreWedding from '../preWedding/PreWedding'
import BrightShoot from '../brightShoot/BrightShoot'
import CoupleShoot from '../coupleShoot/CoupleShoot'
import Birthday from '../birthday/Birthday'
import BabyShoot from '../babyShoot/BabyShoot'

function HeroGallery() {
  return (
    <div className='px-4 md:px-6 lg:px-14 gap-2 py-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
      <WeddingShoot/>
      <PreWedding/>
      <BrightShoot/>
      <CoupleShoot/>
      <Birthday/>
      <BabyShoot/>
    </div>
  )
}

export default HeroGallery
