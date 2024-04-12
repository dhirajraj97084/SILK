import React from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { IoEllipsisHorizontalSharp } from 'react-icons/io5'
import { MdOutlineMailOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Alternative_contact_page() {
  return (
    <div>
      <div className="container mx-auto">
      <div className="main  py-4">
        <IoEllipsisHorizontalSharp className="text-5xl mx-auto text-black " />
      </div>
      <div className="heading">
        <h1 className='text-xl md:text-2xl flex justify-center font-serif pb-5 underline text-center'>ALTERNATIVELY YOU MAY ALWAYS EMAIL OR CALL US</h1>
      </div>
      <div className="mainbox grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 ">
        <div className="left">
            {/* logo */}
            <div className="logo">
            <MdOutlineMailOutline className=' mx-auto size-10 mb-2' />
            </div>
            <h1 className='text-center'>EMAIL US</h1>
            <p className='text-center'>An email is a very good first contact. Please let us know a little bit about you and your plan and we will get back to you with more information. We usually answer within 24hr.</p>
            <div className="link_item email py-4">
                <Link to={'https://docs.google.com/forms/d/e/1FAIpQLSeacAKWWw8-sHvRW_X1HEuus7Wga87toEZkIfYE4Pqj8hajug/viewform'} className='cursor-pointer'>
                <div className="box flex items-center text-cyan-500 justify-center gap-2">
                <MdOutlineMailOutline className=' size-6 ' />
                <h2 className=''>Email</h2>
                </div>
                </Link>
            </div>
        </div>
        <div className="right">
              {/* logo */}
              <div className="logo">              
              <FaWhatsapp className='mx-auto size-10 mb-2' />
              </div>
              <h1 className='text-center'>CALL OR WHATSAPP</h1>
               <p className='text-center'>If you are not an email person, or for any reason you feel you want to chat on WhatsApp or catch up on the phone first, please drop a message.</p>
            <p className='text-center'>Chat on WhatsApp</p>
            <div className="link_item whatsapp py-4">
            <Link to={'https://api.whatsapp.com/send/?phone=%2B919823351221&text&type=phone_number&app_absent=0'} className='cursor-pointer'>
                <div className="box flex items-center text-cyan-500 justify-center gap-2">
                <FaWhatsapp className=' size-6' />
                <h2 className=''>Chat On WhatsApp</h2>
                </div>
                </Link>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Alternative_contact_page
