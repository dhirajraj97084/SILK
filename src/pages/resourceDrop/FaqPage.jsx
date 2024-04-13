import React from 'react'
import Questions from '../about/Questions'
import { FaQuoteLeft } from 'react-icons/fa'
import Layout from '../../component/layout/Layout'

function FaqPage() {
  return (
    <Layout>
       <div className="main flex justify-center items-center h-[38em]  bg-no-repeat bg-cover bg-center bg-fixed  bg-[url('https://www.silkphotos.com/wp-content/uploads/2020/07/wedding-photography-portfolio_Sephi-Bergerson-8.jpg')]">
        {/*  */}
      </div>
      <div className="boex container mx-auto py-8">
         <Questions/>

         <div className="box3">
            <div className="container mx-auto py-3 ">
           <div className="text flex gap-4 mx-4 shadow-md  bg-white py-12 md:px-12   ">
            <div className="logo"><FaQuoteLeft className='text-yellow-600 text-4xl ' /></div>
            <div className="box1">
            <h1 className='text-xl  text-gray-600 '>It was a complete dream. Such a pleasure to meet you, thank you for all you did for us. You are someone at the top of your game, great to see. Some of our family and friends have been asking about you too, saying they thought you were brilliant – the way you were shooting, how you cr rolex datejust 116243cdo rolex calibre 2836 2813 mens champagne dial took control, the whole thing.</h1>
            <h2 className='mt-2 text-gray-700'>NILESH & RONITA, UDAIPUR</h2>
            </div>
           </div>
      </div>
      </div>
      </div>
    </Layout>
  )
}

export default FaqPage
