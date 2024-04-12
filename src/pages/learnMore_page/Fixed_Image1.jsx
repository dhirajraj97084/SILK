import React from 'react'
const imageList=[
    {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/girls.jpg"
    },
    {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/kerala-copy.jpg"
    },
    {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/adwaita-copy-596x800.jpg"
    },
    {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/groom-udaipur-596x800.jpg"
    },
]

function Fixed_Image1() {
  return (
    <div>
      <div className="main flex justify-center items-center h-[35em]  bg-no-repeat bg-cover bg-center bg-fixed  bg-[url('https://www.silkphotos.com/wp-content/uploads/2020/08/kerala-copy.jpg')]">
        {/*  */}
      </div>
      <div className="images grid md:grid-cols-2 grid-cols-1 px-4">
         {imageList.map((item,index)=>(
            <div key={index} className="img">
                <img src={item.image} alt="img1" />
            </div>
         ))}
      </div>
      {/* fixed_image2 */}
      <div className="main flex justify-center items-center h-[35em]  bg-no-repeat bg-cover bg-center bg-fixed  bg-[url('https://d2ajlz7o3p8ddv.cloudfront.net/media/members/E5D6620310/upload_images/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTMxMjkxfQ.TLd_xAh9t8MWu7Emt1KGFYshcWM_WlM1cJToeqH7lnQ_thumbnail_300x300.jpg')]">
        {/*  */}
      </div>
      {/* Photographs Are A Testimony To A Time That Will Become The Past */}
      <div className="container mx-auto py-6 px-3">
         <h1 className='text-xl md:text-2xl text-center pb-4 '>Photographs Are A Testimony To A Time That Will Become The Past</h1>
         <p className='pb-5'>I am an old-school photographer who used to print my B&W images in the darkroom. I have felt the magic and excitement of holding a great print, and I can promise you that it is an experience that cannot compare to seeing the same photo on the screen. As a visual artist, I want the images I create to stand the test of time – for you and your family. I am committed to preserving memories that can be seen, touched and felt every day as you relive them on your walls, in your hands and your heart.</p>
         <p className='pb-1'>The number one reason for investing in professional prints is the unsurpassed quality. All our prints are made on museum-quality fine art paper with the utmost care and attention. They will look completely different than anything you can expect.</p>
      </div>
      <div className="container mx-auto px-3">
        <div className="bold">
            <h3 className='font-semibold text-center md:text-start pb-6'>|“Four years ago our photographer sent me amazing JPEG files; what do I do with them now?!”</h3>
            <div className="imgages grid md:grid-cols-2 grid-cols-1 px-4">
                <img src="https://www.silkphotos.com/wp-content/uploads/2020/08/nose-copy-1.jpg" alt="" />
                <img src="https://www.silkphotos.com/wp-content/uploads/2020/08/udaipur-iphone-copy-3.jpg" alt="" />
            </div>
        </div>
        <p className='py-3'>Physical prints and albums are heirlooms to pass down for generations. We feel it is our duty to guide our clients to see the value in print, bringing more joy into their lives and future generations’ with memories otherwise forgotten. We are creating an impact that will far outlast us.</p>
        <p className='pb-4'>If you need our help in the selection of images for print or advice on framing and placement, please feel free to send us a photo of the room where you envision hanging prints. We will create mock-ups of different options for you so you can get a great visual of the work in your home!</p>
      </div>
      <div className="imgages grid md:grid-cols-2 grid-cols-1 m-3 gap-6 px-4">
                <img src="https://www.silkphotos.com/wp-content/uploads/2021/10/176-Preview-3-scaled-1.jpg" alt="" />
                <img src="https://www.silkphotos.com/wp-content/uploads/2021/10/191-Preview-3-scaled-copy-2.jpg" alt="" />
            </div>
    </div>
  )
}

export default Fixed_Image1
