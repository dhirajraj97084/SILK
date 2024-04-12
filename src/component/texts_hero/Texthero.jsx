import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Texthero() {
  return (
    <div className='h-fit  flex justify-center items-center pb-4 pt-6 '>
      <div className="container mx-auto">
           <div className="heading">
            <h1 className='flex justify-center text-2xl md:text-4xl lg:text-5xl lg:pb-4 text-center '>Wedding Photography In India</h1>
            <h2 className='flex justify-center pt-2 text-black/50 text-xl md:text-2xl lg:text-3xl '>For discerning couples in India & worldwide</h2>
            <p className='px-4  pt-2 text-start  '>In addition to his extraordinary coverage of luxury weddings, Sephi is a leading documentary and lifestyle photographer, and the author of the book <span className='text-indigo-400'> Behind The Indian Veil – A Journey Through Weddings in India</span> that explores the rich and beautiful traditions behind a wide range of Indian weddings. Sephi was also the director and mind behind SILK INSPIRE - India's first wedding photography festival.</p>
            <p className='px-4 text-start pt-2 '>When you commission Sephi for your wedding photography in India or anywhere else in the world, he creates the highest quality of work with no compromises. His commitment to outstanding photography and extraordinary customer service is his trademark, and he keeps his passport at the ready for one of a kind adventures and destinations weddings in India and around the world.</p>
            <p className='px-4 text-start  pt-2 '>To see Sephi’s work we welcome you to explore his galleries and blog posts, and to visit his documentary photography website where you will find numerous examples of his commercial, travel, and fine-art photography.</p>
           </div>
         {/* whatsappp */}
         <div className="container mx-auto">
        <div className="main flex justify-center">
          <Link to={'/booking'}>
          <button className='bg-[#FACA15] py-3 lg:py-5 px-8 rounded-md my-5 shadow-md  '>
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

      </div>
    </div>
  )
}

export default Texthero
