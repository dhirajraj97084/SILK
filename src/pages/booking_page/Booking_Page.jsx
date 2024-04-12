import React from 'react'
import Layout from '../../component/layout/Layout'
import {  FaFileAlt } from "react-icons/fa";
import { Button } from '@material-tailwind/react'
import Box1 from './Box1';

function Booking_Page() {
  return (
    <Layout>
      <div className="main flex justify-center items-center h-[35em] bg-no-repeat bg-cover bg-center bg-fixed  bg-[url('https://media.istockphoto.com/id/153938913/photo/indian-wedding-ceremony-details.jpg?s=612x612&w=0&k=20&c=U5Sg-FfWkyDEM6XvNmiZTNWOjMs8D3PcVvDkvYIbtPg=')]">
        <div className="text">
             <div className="logo">
             <FaFileAlt className='text-5xl text-white mx-auto mb-4' />
             </div>
            <h1 className='lg:text-5xl px-2 md:text-4xl text-3xl font-serif text-center  text-white '>BOOK YOUR DATE</h1>
            <h2 className='lg:text-3xl md:text-2xl text-xl font-serif text-center  text-white pt-5 px-2'>Fill the below form and we will be happy to send you a personalised quote</h2>
        </div>
      </div>
      <Box1/>
    </Layout>
  )
}

export default Booking_Page
