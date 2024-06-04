import React, { useState } from 'react'
import Layout from '../../component/layout/Layout'
import { Carousel } from '@material-tailwind/react'
import { FaQuoteLeft } from 'react-icons/fa'
import Questions from './Questions'
import Faq from '../faq/Faq'

function About() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: ' 1. What makes Jatin Photography one of the best photographers in Dehradun?',
      answer: 'At Jatin Photography, we pride ourselves on capturing timeless moments with a creative and personalized approach. Our attention to detail and commitment to excellence have earned us a reputation as one of the best photographers in Dehradun.',
    },
    {
      question: '2. What types of photography services do you offer? ',
      answer: 'Jatin Photography offers a wide range of services, including wedding photography, family portraits, couple sessions, event photography, and more. We tailor our services to meet your specific needs and ensure a memorable experience.',
    },
    {
      question: '3. How can I book a session with Jatin Photography?',
      answer: 'To book a session with Jatin Photography, you can contact us through our website or call us directly. We recommend booking in advance to secure your preferred date and time with the best photographers in Dehradun.',
    },
    {
      question: '4. What should I expect during a wedding photography session with Jatin Photography?',
      answer: 'During a wedding photography session, our team will capture every significant moment of your special day, from candid shots to posed portraits. We strive to document the essence of your celebration with stunning, high-quality images.',
    },
    {
      question: '5. How long will it take to receive my photos?',
      answer: ' The delivery time for your photos depends on the type of session and the volume of images. Typically, you can expect to receive your edited photos within 2-4 weeks. Jatin Photography ensures timely delivery without compromising on quality.',
    },
    {
      question: '6. Can I see examples of your previous work?',
      answer: 'Yes, you can view our portfolio on the Jatin Photography website. We showcase a variety of projects, including weddings, portraits, and events, highlighting why we are considered among the best photographers in Dehradun',
    },
    {
      question: '7. Do you offer customized photography packages?',
      answer: 'Absolutely! Jatin Photography offers customized packages to suit your unique requirements and budget. Contact us to discuss your needs, and we will create a personalized package just for you',
    },
    {
      question: '8. What should I wear for my portrait session?',
      answer: 'We recommend wearing comfortable, coordinated outfits that reflect your personal style. For family portraits, consider choosing complementary colors. Our team at Jatin Photography can provide additional guidance based on the location and theme of the shoot.',
    },
    {
      question: '9. How do you ensure the quality of your photos?',
      answer: 'Jatin Photography uses state-of-the-art equipment and professional editing software to ensure the highest quality photos. Our expertise and attention to detail guarantee stunning results that you',
    },
    {
      question: '10. Do you travel for destination weddings and events?',
      answer: 'Yes, Jatin Photography is available for destination weddings and events. We love capturing beautiful moments in new and exciting locations. Contact us to discuss travel arrangements and availability.',
    },
  ];
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <Layout>
      {/* carousal */}
    <Carousel 
    loop={true}
    autoplay="true"
    navigation={false}
    transition={{type : "tween", duration : 2}}
    autoplayDelay={5000}
    className=" ">
        <div className="relative h-full w-full">
        <img
          src="https://d2ajlz7o3p8ddv.cloudfront.net/media/members/E5D6620310/upload_images/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTMxMjgwfQ.as-W-dfJpAcTijvpRQ9EZOhcNAhFdzyQDpRRra4yRpo_1200x2400.jpg"
          alt="image 2"
          className="lg:h-[30em] h-[25em] md:h-[34em]  w-full object-cover"
        />
      </div>
       
      <div className="relative h-full w-full">
        <img
          src="https://www.silkphotos.com/wp-content/uploads/2020/07/wedding-photography-portfolio_Sephi-Bergerson-41.jpg"
          alt="image 2"
          className=" lg:h-[30em] h-[25em] md:h-[34em] w-full object-cover"
        />
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-38.jpg"
          alt="image 3"
          className=" lg:h-[30em] h-[25em] md:h-[34em] w-full object-cover"
        />
      </div>
    </Carousel>
    {/* items01 */}
    <div className="container mx-auto">
      <div className="box1 py-3">
        <h1 className='text-xl md:text-2xl lg:text-3xl font-serif  text-center pb-2'>TRUE DOCUMENTARY WEDDING PHOTOGRAPHY</h1>
        <p className='text-sm md:text-xl lg:text-xl pb-8 text-black/65 font-serif text-center '>FOR COUPLES SEEKING MORE THAN JUST BUZZWORDS AND TRENDY LABELS</p>
      </div>
      {/* left_right_flex */}
      <div className="box2 grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
        <div className="left px-4">
            <img src="https://www.silkphotos.com/wp-content/uploads/2020/03/IMG_3393-900px-1.jpg" alt="" />
        </div>
        <div className="right px-3 my-auto">
             <h1 className='py-4 text-2xl md:text-4xl font-serif '>Hi. I'm Sephi Bergerson</h1>
             <p className='pb-2 text-balance'>I am not going to write about my awards, mention the lists of “10 best wedding photographers” I have been a part of and the publications that have featured my work. I feel it is a lot more important that my images should resonate with you, that you understand my perspective and then trust me to do what I do best.</p>
             <p className='pb-2 text-balance'>I have been a photographer for more than 30 years and my point of view is of a world traveller who’s been living in India for almost two decades.</p>
             <p className='pb-2 text-balance'>As an experienced photographer specialising in documentary wedding photography, I bring a unique perspective to capturing your special day. While many may label themselves as "visual storytellers" or "candid photographers," my approach goes beyond mere trends. With years of expertise in documentary photography, I blend photojournalistic techniques with a deep understanding of true visual storytelling.</p>
             <p className='pb-2 text-balance'>Unlike those who simply adopt trendy labels, my work is rooted in genuine experience and a commitment to authentically capturing the moments that matter most. From the smallest details to the grandest emotions, I strive to tell your wedding story with honesty, depth, and a genuine connection to the essence of your day.</p>
             <p className='pb-2 text-balance'>So, if you're seeking more than just buzzwords and trendy labels, but rather a seasoned professional who truly understands the art of visual storytelling, look no further. Let me document your wedding day in a way that reflects its true beauty and significance, with the skill and insight that only comes from years of dedicated practice and passion.</p>
             <p className='pb-2 text-balance'>I work with a select set of freelancers whom I know and trust, each great at what they do, and we always form an amazing team that delivers outstanding photography.</p>
             <p className='pb-2 text-balance'>I am glad you took the time to see my work, and I do hope we can work together. I am always humbled when trusted to create memories of some of the greatest moments in a couple’s life</p>
             <p className='pb-2 text-balance'>I’m currently based in Goa, and available for commission all over India and worldwide. Let’s talk.</p>
        </div>

      </div>
      {/* items_box03 */}
      <div className="box3">
      <div className="container mx-auto py-3 ">
           <div className="text flex gap-4 mx-4  bg-white py-12 md:px-12   ">
            <div className="logo"><FaQuoteLeft className='text-yellow-600 text-4xl ' /></div>
            <div className="box1">
            <h1 className='text-xl  text-gray-600 '>Outstanding service and breathtaking photos! Our couples session was so much fun, and the final images were beyond our expectations. The photographer has an amazing eye for detail and composition.</h1>
            <h2 className='mt-2 text-gray-700'>JEANETTE WHITE - KHOSLA WEDDING , UDAIPUR</h2>
            </div>
           </div>
           <div className="text flex mx-4 gap-2 mt-3  bg-white py-12 md:px-12 px-6  ">
            <div className="logo"><FaQuoteLeft className='text-yellow-600 text-4xl ' /></div>
            <div className="box2">
            <h1 className='text-xl  text-gray-600 '>We had our family portraits taken, and we couldn't be happier with the results. The photographer made us feel comfortable and truly captured our family's spirit. The pictures are now treasured memories on our walls.</h1>
            <h2 className='mt-2 text-gray-700'>VARSHINI & ALEX - MADURAI</h2>
            </div>
           </div>
      </div>
      </div>
      {/* box04_questions_ans */}
      {/* <Questions/> */}
      <div className="boxes">
      <div className="max-w-2xl mx-auto p-4  mt-14">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-4 bg-gray-100 rounded-lg shadow-md focus:outline-none"
            >
              <span className="font-semibold">{faq.question}</span>
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
            >
              <div className="p-4 bg-gray-50 rounded-lg shadow-inner">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
     
    </div>
    </Layout>
  )
}

export default About
