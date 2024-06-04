import React from 'react'
import Layout from '../../../component/layout/Layout'
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

function Gallery() {
  return (
    <Layout>
      <div className="div">
      <div className="content text-center bg-gray-100  h-80 flex justify-center items-center  ">
         <div className="div">
         <h1 className='text-center  text-3xl md:text-5xl font-black'>Indian Wedding  </h1>
          <p className='text-balance text-xl pt-8 text-start px-4 md:text-center md:mx-12'>Experience the vibrancy and grandeur of Indian weddings through our lens. We capture the intricate rituals, lively celebrations, and heartfelt moments that define your special day. Our photography preserves the rich tapestry of emotions and traditions, creating timeless memories you'll treasure forever.</p>
         </div>
        </div>
      
      <div className="container main mx-auto py-8">
      <div className="images grid md:grid-cols-2 grid-cols-1 px-4 gap-2">
         {imageList.map((item,index)=>(
            <div key={index} className="img">
                <img className='' src={item.image} alt="img1" />
            </div>
         ))}
      </div>
      </div>
      </div>
    </Layout>
  )
}

export default Gallery
