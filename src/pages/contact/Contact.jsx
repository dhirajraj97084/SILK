import React from 'react'
import Layout from '../../component/layout/Layout'
import { FaQuoteLeft, FaRocket, FaWhatsapp } from 'react-icons/fa'
import Alternative_contact_page from '../booking_page/Alternative_contact_page'
import { Link } from 'react-router-dom'


function Contact() {
  return (
    <Layout>
     <div className="main flex justify-center items-center h-[35em] bg-no-repeat bg-cover bg-center bg-fixed bg-[url('https://images.pexels.com/photos/8528408/pexels-photo-8528408.jpeg?auto=compress&cs=tinysrgb&w=600')]">
        <div className="text">
             <div className="logo">
             <FaRocket className='text-7xl text-green-500 mx-auto mb-4' />
             </div>
            <h1 className='lg:text-5xl px-2 md:text-4xl text-3xl font-serif text-center underline   text-black  decoration-black/25 '>GET IN TOUCH</h1>
            <h2 className='lg:text-3xl md:text-2xl text-xl font-serif text-center  text-black pt-5 px-2 decoration-black/25 underline'>We would love to hear from you</h2>
        </div>
      </div>
      <Alternative_contact_page/>
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
        <div className="box">
        <div className="container mx-auto py-3 font-serif ">
           <div className="text flex gap-4 mx-4 shadow-md bg-white py-12 md:px-12 px-6  ">
            <div className="logo"><FaQuoteLeft className='text-yellow-600 text-4xl ' /></div>
            <div className="box1">
            <h1 className='text-xl  text-gray-600 '>Professional, friendly, and incredibly talented! The photographer made our portrait session enjoyable and relaxed, resulting in beautiful, natural shots. We are thrilled with the quality and artistry of the photos.</h1>
            <h2 className='mt-2 text-gray-700'>SACHI & VISHAL, TANZANIA</h2>
            </div>
           </div>
           <div className="text flex  mx-4 gap-2 mt-3 shadow-md bg-white py-12 md:px-12 px-6  ">
            <div className="logo"><FaQuoteLeft className='text-yellow-600 text-4xl ' /></div>
            <div className="box2">
            <h1 className='text-xl  text-gray-600 '>Our Indian wedding photos are a masterpiece! The vibrant colors, emotional moments, and traditional details were all perfectly captured. The photographer truly understood the essence of our cultural celebration.</h1>
            <h2 className='mt-2 text-gray-700'>AEKTA & NITIN , JAIPUR</h2>
            </div>
           </div>
      </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
