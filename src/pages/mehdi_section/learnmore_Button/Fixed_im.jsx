import React from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Fixed_im() {
  return (
    <div>
      <div className="main flex justify-center items-center h-[35em] bg-no-repeat bg-cover bg-center bg-fixed  bg-[url('https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-04.jpg')]">
        <div className="text">
            <h1 className='lg:text-5xl px-2 md:text-4xl text-3xl font-serif text-center  text-gray-300 '>INDIAN WEDDING TRADITIONS</h1>
            <h2 className='lg:text-3xl md:text-2xl text-xl font-serif text-center  text-gray-200 pt-5 px-2'>SEE IMAGE GALLERY FROM THE BOOK</h2>
            <div className="box flex justify-center pt-4">
            <Link to={'/gallery'}>
            <button className=" py-2 px-5 flex items-center gap-2 border-2 border-white/75 bg-transparent border-t-4 text-white  rounded-md cursor-pointer"> <FaArrowAltCircleRight /> SEE THE GALLERY</button>
            </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Fixed_im
