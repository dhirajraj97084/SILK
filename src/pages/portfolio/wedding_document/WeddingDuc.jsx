import React from 'react'
import Layout from '../../../component/layout/Layout'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const imageList=[
    {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-40.jpg"
    },
    {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-39.jpg"
    },
    {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-38.jpg"
    },
    {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-04.jpg"
    },
    {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-35.jpg"
    },
    {
      image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-23.jpg"
    },
    {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-22.jpg"
      },
      {
        image:"https://d2ajlz7o3p8ddv.cloudfront.net/media/members/E5D6620310/upload_images/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTMxMjgwfQ.as-W-dfJpAcTijvpRQ9EZOhcNAhFdzyQDpRRra4yRpo_1200x2400.jpg"
      },
      {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-17.jpg"
      },
      {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-28.jpg"
      },
      {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-29.jpg"
      },
      {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-31.jpg"
      },
      {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-34.jpg"
      },
      {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-36.jpg"
      },
      {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-21.jpg"
      },{
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-26.jpg"
      },{
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-12.jpg"
      },{
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-11.jpg"
      },{
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-08.jpg"
      },{
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-09.jpg"
      },{
        image:"https://www.silkphotos.com/wp-content/uploads/2024/03/Indian_wedding_tradition_01.jpg"
      },
      {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-01.jpg"
      },
      {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-13.jpg"
      },
      {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-05.jpg"
      },
]

function WeddingDuc() {
  return (
    <Layout>
      <div className="  font-serif  ">
        <div className="content text-center bg-gray-100  h-80 flex justify-center items-center  ">
         <div className="div">
         <h1 className='text-center  text-3xl md:text-5xl font-black'>Wedding Documentary </h1>
          <p className='text-balance text-xl pt-8 text-start px-4 md:text-center'>Step into a world where every moment tells a story. Our wedding documentaries preserve the magic of your special day, capturing the emotions, traditions, and unique details that make your celebration unforgettable. Let us turn your wedding into a timeless film that you'll cherish forever.</p>
         </div>
        </div>
      <div className="images grid md:grid-cols-2 py-3  grid-cols-1 lg:grid-cols-3 px-4 gap-2 container main mx-auto">
         {imageList.map((item,index)=>(
            <div key={index} className="img">
                <img className='' src={item.image} alt="img1" />
            </div>
         ))}
      </div>
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
    </Layout>
  )
}

export default WeddingDuc
