import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../../component/layout/Layout'

function LearnItem() {
  return (
    <>
      <div className="container mx-auto py-8 ">
       <div className="main grid grid-cols-1 md:grid-cols-2 gap-4 px-3">
        <div className="left">
            <img src="https://www.silkphotos.com/wp-content/uploads/2020/08/Behind-The-Indian-Veil-book_01.png" alt="" />
        </div>
        <div className="right my-auto">
           <h1 className='text-xl md:text-2xl pb-3 '>BEHIND THE INDIAN VEIL <span className='text-sm md:text-xl ml-2'>A JOURNEY THROUGH</span></h1>
           <h2 className='text-xl font-semibold mt-1 '>WEDDINGS IN INDIA</h2>
           <h3 className='text-xl font-semibold text-black/55 py-4'>by Sephi Bergerson</h3>
           <p className=' pb-4'>Hardcover | 9.25″ x 13″ | 136 pages <br /> First edition | AUGUST 2015 | 1/1,000</p>
             <p className=' py-4'>ISBN 978-93-5235-150-3 | MRP ₹2,150</p>
           <div className="buttons grid grid-cols-1 gap-y-6">
            <Link><button  className=' py-2 cursor-pointer hover:bg-indigo-500 px-6 text-white bg-indigo-400 rounded-md  ' >Buy The Book</button></Link>
            <Link ><button  className=' py-2 cursor-pointer hover:bg-[#D61F69] px-6 text-white bg-[#E74694] rounded-md ] ' >International-Buy on Amazon.com</button></Link>
           </div>
        </div>
       </div>
       <div className="text px-3 py-5">
          <p className='pb-3 text-balance'>Behind The Indian Veil chronicles award-winning photographer Sephi Bergerson’s extraordinary journey through uncharted wedding traditions in India. It reveals the differences and similarities in Indian wedding traditions, while seeking the common essence of this grand, colourful, fantastic celebration.</p>
          <p className='pb-3 text-balance' >After living in India for more than 13 years, with almost seven of which spent working on this project, Sephi has arguably experienced, witnessed and documented a greater variety of Indian weddings than any other person on earth. As he travelled the length and breadth of India, he was invited into sacred places and intimate moments normally inaccessible to outsiders, witnessing traditions buried so deep in the subconscious of the subcontinent that even people from India don’t necessarily know about them. This incredible array of stories he was able to capture reveals cultures, traditions, and legacies as complex and diverse as India herself.</p>
          <p className=' text-balance'>Behind The Indian Veil features images and written stories from a vast assortment of Indian communities: Tamil Brahmin, Bengali, Sikh, Hindu Punjabi, Hyderabadi Muslim, Rajput, Kashmiri Pandit, Ladakhi Buddhist, Goan Catholic, Syrian Christian, Zoroastrian Parsi, Dawoodi Bhora, and Kodava Coorg.</p>
       </div>
      </div>
    </>
  )
}

export default LearnItem
