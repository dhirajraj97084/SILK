import React from 'react'
import Layout from '../../component/layout/Layout'
import TextBox from './TextBox'
import Fixed_Image1 from './Fixed_Image1'


function Learn_mome_button() {
  return (
    <Layout>
       <div className="main flex justify-center items-center h-screen bg-no-repeat bg-cover bg-center bg-fixed  bg-[url('https://www.silkphotos.com/wp-content/uploads/2021/10/176-Preview-3-scaled-1.jpg')]">
        <div className="text">
            <h1 className='lg:text-4xl px-2 md:text-3xl text-xl font-serif text-center text-black underline underline-offset-2 '>Fine Art Prints And Wall Art</h1>
            
            <div className="button flex justify-center ">
            </div>
            <h2 className='lg:text-5xl md:text-4xl text-3xl font-serif text-center text-black font-bold pt-2 px-2'>A Family Legacy</h2>
        </div>
      </div>
      <TextBox/>
      <Fixed_Image1/>
    </Layout>
  )
}

export default Learn_mome_button
