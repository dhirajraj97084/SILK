import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import BookNow from './BookNow'
import Fiexedim from './Fiexedim'
import QuesFmaily from './QuesFmaily'

function Pricing() {
  return (
    <div>
      <div className="main">
        <div className="box py-4">
            <h1 className='text-2xl md:text-3xl text-block text-center pb-2'>FAMILY PORTRAIT PHOTOGRAPHY PRICING</h1>
            <h2 className=' pb-8 text-block/55 text-center'>FIND WHAT WORKS FOR YOU. FLEXIBLE PRICING. MAKE MAGIC</h2>
        </div>
        <div className="carts grid grid-cols-1 md:grid-cols-3">
              <div className="box1 bg-green-400 p-2 m-5 rounded-md ">
                <div className="subBox bg-gray-300 pb-8  rounded-md">
                  <h1 className='text-center text-2xl px-8 py-6'>JADE</h1> 
                  <h3 className='text-center text-2xl px-8 py-4 text-white bg-blue-400 '>₹ 29,995 </h3> 
                  <h1 className='flex items-center px-4  py-2 font-bold gap-2 '><FaCheck className='text-green-400 '/> Available Only in North Goa</h1>
                  <hr className=' bg-gray-500'/>
                  <h1 className='flex items-center px-4   py-2 font-bold gap-2 '><FaCheck className='text-green-400'/> Up to 2 hours</h1>
                  <hr className=' bg-gray-500' />  
                  <h1 className='flex  items-center px-4   py-2 font-bold gap-2 '><FaCheck className='text-green-400'/>  Up to 5 People Photographed</h1>
                  <hr className=' bg-gray-500' /> 
                  <h1 className='flex pb-4 items-center px-4   py-2 font-bold gap-2 '><FaCheck className='text-green-400'/>  High-res digital files shared</h1>
              <div className="button p-3">
              <Link to={'https://api.whatsapp.com/send/?phone=919823351221&text&type=phone_number&app_absent=0'}> <button className='bg-blue-400 w-full text-xl font-semibold py-2 rounded-md text-white '> Get it Now</button></Link>
              </div>
                            
                </div>                
              </div>
              <div className="box2 bg-green-400 p-2 m-5 rounded-md ">
                <div className="subBox bg-gray-300 rounded-md">
                  <h1 className='text-center text-2xl px-8 py-6'>SAPPHIRE</h1> 
                  <h3 className='text-center text-2xl px-8 py-4 text-white bg-blue-400 '>₹ 49,995  </h3> 
                  <h1 className='flex items-center px-4  py-2 font-bold gap-2 '><FaCheck className='text-green-400 '/> Available Only in North Goa</h1>
                  <hr className=' bg-gray-500'/>
                  <h1 className='flex items-center px-4   py-2 font-bold gap-2 '><FaCheck className='text-green-400'/> Up to 3 hours</h1>
                  <hr className=' bg-gray-500' />  
                  <h1 className='flex  items-center px-4   py-2 font-bold gap-2 '><FaCheck className='text-green-400'/>  Up to 8 People Photographed</h1>
                  <hr className=' bg-gray-500' /> 
                  <h1 className='flex pb-4 items-center px-4   py-2 font-bold gap-2 '><FaCheck className='text-green-400'/>  High-res digital files shared</h1>
                  <hr className=' bg-gray-500' /> 
                  <h1 className='flex  items-center px-4   py-2 font-bold gap-2 '><FaCheck className='text-green-400'/>One 12x18" Fine-Art Print</h1>
              <div className="button p-3">
              <Link to={'https://api.whatsapp.com/send/?phone=919823351221&text&type=phone_number&app_absent=0'}> <button className='bg-blue-500 w-full text-xl font-semibold py-2 rounded-md text-white '> Get it Now</button></Link>
              </div>
                            
                </div>                
              </div>
              <div className="box3 bg-green-400 p-2 m-5 rounded-md ">
                <div className="subBox bg-gray-300 rounded-md">
                  <h1 className='text-center text-2xl px-8 py-6'>EMERALD</h1> 
                  <h3 className='text-center text-2xl px-8 py-4 text-white bg-blue-400 '>₹ 79,995  </h3> 
                  <h1 className='flex items-center px-4  py-2 font-bold gap-2 '><FaCheck className='text-green-400 '/>Available all over Goa</h1>
                  <hr className=' bg-gray-500'/>
                  <h1 className='flex items-center px-4   py-2 font-bold gap-2 '><FaCheck className='text-green-400'/> Up to 6 hours</h1>
                  <hr className=' bg-gray-500' />  
                  <h1 className='flex  items-center px-4   py-2 font-bold gap-2 '><FaCheck className='text-green-400'/>More then 9 People Photographed</h1>
                  <hr className=' bg-gray-500' /> 

                  <h1 className='flex pb-4 items-center px-4   py-2 font-bold gap-2 '><FaCheck className='text-green-400'/>  High-res digital files shared</h1>
                  <hr className=' bg-gray-500' /> 
                  <h1 className='flex  items-center px-4   py-2 font-bold gap-2 '><FaCheck className='text-green-400'/>Two 12x18" Fine-Art Print</h1>
              <div className="button p-3">
              <Link to={'https://api.whatsapp.com/send/?phone=919823351221&text&type=phone_number&app_absent=0'}> <button className='bg-blue-400 w-full text-xl font-semibold py-2 rounded-md text-white '> Get it Now</button></Link>
              </div>
                            
                </div>                
              </div>
        </div>
        <BookNow/>
        <Fiexedim/>
        <QuesFmaily/>
        <BookNow/>
        <div className="main flex justify-center items-center h-screen bg-no-repeat bg-cover bg-center bg-fixed  bg-[url('https://images.pexels.com/photos/9374658/pexels-photo-9374658.jpeg?auto=compress&cs=tinysrgb&w=600')]">
       
       {/* blancks */}
     </div>
      </div>
    </div>
  )
}

export default Pricing
