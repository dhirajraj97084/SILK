import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Herobox2() {
  return (
    <div className='mainboxes py-6 bg-gray-50 '>
      <div className="container mx-auto py-3 ">
           <div className="text flex gap-4 mx-4 shadow-md bg-white py-12 md:px-12 px-6  ">
            <div className="logo"><FaQuoteLeft className='text-yellow-600 text-4xl ' /></div>
            <div className="box1">
            <h1 className='text-xl font-serif text-gray-600 '>Incredible experience! The photographer captured every special moment of our wedding with such creativity and precision. The photos are absolutely stunning and tell our story beautifully. Highly recommended.</h1>        
            </div>
           </div>
           <div className="text font-serif flex mx-4 gap-2 mt-3 shadow-md bg-white py-12 md:px-12 px-6  ">
            <div className="logo"><FaQuoteLeft className='text-yellow-600 text-4xl ' /></div>
            <div className="box2">
            <h1 className='text-xl  text-gray-600 '>We had our family portraits taken, and we couldn't be happier with the results. The photographer made us feel comfortable and truly captured our family's spirit. The pictures are now treasured memories on our walls</h1>
            </div>
           </div>
      </div>
      <div className="container mx-auto">
        <div className="main flex justify-center">
        <Link to={'/booking'} > <button className='bg-[#FACA15] py-3 lg:py-5 px-8 rounded-md my-5 shadow-md  '>
            <div className="item flex gap-3 hover:text-white items-center ">
                <div className="contact_icon">
                <FaWhatsapp className='text-xl md:text-3xl ' />
                </div>
                <h1 className='text-xl md:text-2xl '>Contact Us For A Free Quote</h1>
            </div>
        </button>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Herobox2
