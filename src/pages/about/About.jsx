import React from 'react'
import Layout from '../../component/layout/Layout'
import { Carousel } from '@material-tailwind/react'
import { FaQuoteLeft } from 'react-icons/fa'
import Questions from './Questions'

function About() {
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
            <h1 className='text-xl  text-gray-600 '>On behalf of the White family, I want to thank you for helping us navigate my stepson’s wedding with your warmth and engaging manner.  You and your team added personal interaction (which is immeasurably thoughtful to a mere American) with consummate professionalism. All the best to you, Sephi, your family and your cohort…warmest regards</h1>
            <h2 className='mt-2 text-gray-700'>JEANETTE WHITE - KHOSLA WEDDING , UDAIPUR</h2>
            </div>
           </div>
           <div className="text flex mx-4 gap-2 mt-3  bg-white py-12 md:px-12 px-6  ">
            <div className="logo"><FaQuoteLeft className='text-yellow-600 text-4xl ' /></div>
            <div className="box2">
            <h1 className='text-xl  text-gray-600 '>Alex and I were looking at our wedding pictures again the other day, and it was as though we were actually there, back in time again. We love the pictures, everyone looks so good, and the colours are just amazing. We have two of the pictures up on the wall here in our home in Bombay. We want to thank you for being a part of our wedding (both our weddings, actually), and tell you again how much we appreciate the fact that you could be there. We couldn’t have asked for anyone better.</h1>
            <h2 className='mt-2 text-gray-700'>VARSHINI & ALEX - MADURAI</h2>
            </div>
           </div>
      </div>
      </div>
      {/* box04_questions_ans */}
      <Questions/>
    </div>
    </Layout>
  )
}

export default About
