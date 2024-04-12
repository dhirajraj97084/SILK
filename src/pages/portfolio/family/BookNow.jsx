import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function BookNow() {
  return (
    <div>
      <div className="container  mx-auto">
       <div className="box">
        <div className="inner_box grid grid-cols-1 md:grid-cols-2 bg-gray-100 px-4 py-8 border-2 border-gray-200 m-5 ">
            <div className="left ">
                <h1 className='text-black  pb-2 text-xl  '>BOOK YOUR FAMILY PORTRAIT PHOTOGRAPHY SESSION NOW!</h1>
                <h1 className='text-black/60  pb-2 '>Not ready to take the plunge? Get in touch and let's have a chat 🙂</h1>
            </div>
            <div className="right m-auto pt-4">
                <Link to={'https://api.whatsapp.com/send/?phone=919823351221&text&type=phone_number&app_absent=0'}>
                <button className=' px-6 py-2 flex items-center gap-4 text-white hover:bg-yellow-900 bg-yellow-800 rounded-md border-2 border-gray-100'>
                    <BsWhatsapp className='text-3xl'/>
                    <span className='text-2xl'>Book Now</span>
                </button>
                </Link>
            </div>
        </div>
       </div>
    </div>
    </div>
  )
}

export default BookNow
