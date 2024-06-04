import React from 'react'
import Layout from '../../../component/layout/Layout'
import { Link } from 'react-router-dom'
import { Carousel, Typography } from '@material-tailwind/react'
import ImageScroll from '../../../component/photography_items/ImageScroll'
import BookNow from './BookNow'
import Pricing from './Pricing'

function Family() {
  return (
    <Layout>
      <Carousel
    loop={true}
    autoplay="true"
    navigation={false}
    transition={{type : "tween", duration : 2}}
    autoplayDelay={5000}
    className=" ">
        <div className="relative h-full w-full ">
        <img
          src="https://www.silkphotos.com/wp-content/uploads/2020/07/wedding-photography-portfolio_Sephi-Bergerson-79.jpg"
          alt="image 2"
          className="lg:h-[40em] h-[25em] md:h-[34em] md w-full object-cover"
        />
        <div className="box absolute inset-0 grid h-full w-full place-items-center my-auto bg-black/10 ">
        <div className="">
          <Link to={'/booking'}>
           <Typography
              variant="h1"
              color="white"
              className="my-4 text-xl md:text-2xl lg:text-4xl  text-center font-serif"
            >
    FAMILY PORTRAIT PHOTOGRAPHY
            </Typography>
           </Link>
            <Link to={'/booking'} >
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-center container mx-auto font-serif"
            >
        Capture the love and joy that bind your family together. Our family portrait sessions are designed to highlight each unique bond and personality, creating cherished images that tell your family's story. Let us help you preserve these special moments for generations to come
            </Typography> 
            </Link>             
          </div>
        </div>
      </div>
       
      <div className="relative h-full w-full">
        <img
          src="https://www.silkphotos.com/wp-content/uploads/2020/07/wedding-photography-portfolio_Sephi-Bergerson-82.jpg"
          alt="image 2"
          className=" lg:h-[40em] h-[25em] md:h-[34em] w-full object-cover"
        />
        
        <div className="box absolute inset-0 grid h-full w-full place-items-center my-auto bg-black/10 ">
        <div className="">
          <Link to={'/booking'}>
           <Typography
              variant="h1"
              color="white"
              className="my-4 text-xl md:text-2xl lg:text-4xl  text-center font-serif"
            >
          FAMILY PORTRAIT PHOTOGRAPHY
            </Typography>
           </Link>
            <Link to={'/booking'} >
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-center container mx-auto font-serif"
            >
              Capture the love and joy that bind your family together. Our family portrait sessions are designed to highlight each unique bond and personality, creating cherished images that tell your family's story. Let us help you preserve these special moments for generations to come
            </Typography> 
            </Link>             
          </div>
        </div>

      </div>
      <div className="relative h-full w-full">
        <img
          src="https://www.silkphotos.com/wp-content/uploads/2020/07/wedding-photography-portfolio_Sephi-Bergerson-41.jpg"
          alt="image 3"
          className=" lg:h-[40em] h-[25em] md:h-[34em] w-full object-cover"
        />
         <div className="box absolute inset-0 grid h-full w-full place-items-center my-auto bg-black/10 ">
        <div className="">
          <Link to={'/booking'}>
           <Typography
              variant="h1"
              color="white"
              className="my-4 text-xl md:text-2xl lg:text-4xl  text-center font-serif"
            >
       FAMILY PORTRAIT PHOTOGRAPHY
            </Typography>
           </Link>
            <Link to={'/booking'} >
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-center container mx-auto font-serif"
            >
         Capture the love and joy that bind your family together. Our family portrait sessions are designed to highlight each unique bond and personality, creating cherished images that tell your family's story. Let us help you preserve these special moments for generations to come
            </Typography> 
            </Link>             
          </div>
        </div>
      </div>
    </Carousel>
    <div className="container mx-auto">
        <div className="box px-3 py-6  font-serif">
           <h1 className='text-center text-2xl md:text-3xl text-black font-serif pb-2'>LUXURY FAMILY PORTRAIT PHOTOGRAPHY IN GOA</h1>
           <h2 className='text-center text-xl md:text-xl text-black/70 font-serif pb-2'>~ A FAMILY LEGACY ~</h2>
           <p className='pb-4'>Are you looking for a Family Portrait Photography during your visit to Goa? Envisioning a timeless portrayal of your family's unique bond, captured in the backdrop of luxurious settings? If you're seeking an exceptional photographer to freeze those cherished moments, look no further. Welcome to the world of luxury family portraits, where Sephi Bergerson, an acclaimed international photographer, brings his artistic prowess to craft exquisite visual narratives for your family.</p>
           <p className='pb-4'>Imagine your family framed against the lush landscapes of Goa, whether it's the picturesque beaches of South Goa or the quaint charm of a local villa. Sephi Bergerson, residing in the vibrant state of Goa, extends his expertise to create family portraits that are not just photographs but heartfelt stories frozen in time.</p>
           <p className='pb-4'>From the elegance of Udaipur's palaces to the sun-kissed beaches of Goa, Sephi Bergerson has been the trusted choice for a diverse and discerning clientele. Renowned as a master of his craft, Sephi's work has graced the pages of prestigious publications such as Rangefinder Magazine, The New York Times, Vogue, Marie Claire, Glamour, and many more.</p>
           <p className='pb-4'>Just as he has beautifully captured the essence of weddings in exotic locales, Sephi is equally adept at turning an ordinary family portrait photography session into extraordinary memories. Whether you prefer the intimacy of your hometown or the allure of a destination, Sephi Bergerson is ready to weave his magic and provide you with a collection of family portraits that will be treasured for generations.</p>
           <p className='pb-4'>Your family's story deserves to be told with the same passion and expertise that has made Sephi the go-to photographer for those seeking unparalleled excellence.</p>
           <p className='pb-4'>Contact us to discuss how we can transform your family's moments into timeless treasures, creating a visual legacy that will be cherished for a lifetime.</p>
        </div>
    </div>
     <div className="fixedimage">
     <div className="main flex justify-center items-center h-screen bg-no-repeat bg-cover bg-center bg-fixed  bg-[url('https://www.silkphotos.com/wp-content/uploads/2020/07/wedding-photography-portfolio_Sephi-Bergerson-82.jpg')]">
       
        {/* blancks */}
      </div>
     </div>
     <div className="scroolbox">
        <ImageScroll/>
     </div>
     <div className="fixedimage">
     <div className="main flex justify-center items-center h-screen bg-no-repeat bg-cover bg-center bg-fixed  bg-[url('https://www.silkphotos.com/wp-content/uploads/2020/07/wedding-photography-portfolio_Sephi-Bergerson-69-480x360.jpg')]">
       
        {/* blancks */}
      </div>
     </div>
     <div className="bookNow">
        <BookNow/>
     </div>
     <div className="fixedimage">
     <div className="main flex justify-center items-center h-screen bg-no-repeat bg-cover bg-center bg-fixed  bg-[url('https://www.silkphotos.com/wp-content/uploads/2020/07/wedding-photography-portfolio_Sephi-Bergerson-8.jpg')]">
       
        {/* blancks */}
      </div>
     </div>
     <div className="pricing">
        <Pricing/>
     </div>
     
    </Layout>
  )
}

export default Family
