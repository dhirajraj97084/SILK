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
      <div className="container main mx-auto py-8">
      <div className="images grid md:grid-cols-3 lg:grid-cols-4  grid-cols-2 px-4 gap-2">
         {imageList.map((item,index)=>(
            <div key={index} className="img">
                <img className='h-[15em]' src={item.image} alt="img1" />
            </div>
         ))}
      </div>
      </div>
    </Layout>
  )
}

export default Gallery
