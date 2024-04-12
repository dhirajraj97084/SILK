import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import Contact_page from "./Contact_page";

function Box1() {
  return (
    <div className="bg-gray-100">
    <div className="container mx-auto">
      <div className="main  py-4">
        <IoEllipsisHorizontalSharp className="text-5xl mx-auto " />
      </div>
      <div className="boxes">
        <div className="text flex gap-4 mx-4 shadow-md bg-white py-12 md:px-12 px-6  ">
          <div className="logo">
            <FaQuoteLeft className="text-yellow-600 text-4xl " />
          </div>
          <div className="box1">
            <h1 className="text-xl  text-gray-600 ">
            I am so grateful that we had the opportunity to choose Sephi for our wedding photographer. Sephi, your photography style and your eye for details, your talent for compositions - I can't possibly imagine a more premium experience from a wedding photographer. It's well beyond what anyone could expect for event photography, and your style fits Indian weddings so well. Even 15 years later, the images I have from you hold up as the best of my lifetime. I mean this sincerely - it is legitimately a privilege and honor to have had you as a wedding photographer!
            </h1>
            <h2 className="mt-2 text-gray-700">SARAH & SAMEER</h2>
          </div>
        </div>
        <div className="text flex gap-4 mx-4 shadow-md bg-white py-12 md:px-12 px-6 my-3  ">
          <div className="logo">
            <FaQuoteLeft className="text-yellow-600 text-4xl " />
          </div>
          <div className="box1 ">
            <h1 className="text-xl  text-gray-600 ">
            Dear Sephi, We wanted to say a big big big thank you for being at our wedding. Of course your photos are amazing – we all know that, but what we really wanted to thank you for is being at the wedding as part of the family. From the first day we met you I felt an instant connection warmth and love for you and Shefi and that was the most important for us as it felt totally natural and normal to have you at the wedding.
            </h1>
            <h2 className="mt-2 text-gray-700">NATASHA & NICK</h2>
          </div>
        </div>
      </div>
      <div className="secondbox">
      <div className="main  py-4">
        <IoEllipsisHorizontalSharp className="text-5xl mx-auto " />
      </div>
        <div className="texes">
        <div className="heading">
            <h1 className='px-4 text-2xl  lg:text-3xl lg:pb-4 text-center md:text-start '>HELLO AND CONGRATULATIONS ON YOUR UPCOMING WEDDING!</h1>
            <p className='px-4  pt-2 text-start  '>We're thrilled that you've taken the time to explore our website. Your wedding day is a special occasion, and we would be honored to capture those beautiful moments for you. To ensure that we tailor our services to meet your unique needs, we'd love to learn more about your vision and expectations for the photography.</p>

            <p className='px-4 text-start pt-2 '>To provide you with a personalized proposal, we need a bit more information about your specific requirements. While our packages typically start from ₹2L/day, please keep in mind that pricing may vary based on factors such as team size and services needed.</p>

            <p className='px-4 text-start  pt-2  '>If our starting pricing aligns with your budget, we're excited to take the next steps with you. To help us gain a deeper understanding of your wedding plans, could you spare a moment to fill out this brief form? It will give us the insights we need to create a customized quotation just for you..</p>
            <p className='px-4 text-start  pt-2  mb-3 '>Thank you in advance for sharing these details, and we look forward to the possibility of being a part of your special day!</p>
            <p className='px-4 text-start  pt-2  mb-3 '>Best wishes,</p>
            <p className='px-4 text-start  pt-2  mb-3 '>Sephi and the SILK team</p>
            <Contact_page/>
           </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Box1;
