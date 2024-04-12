import { Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import React from 'react'

function Fixed_herp() {
  return (
    <div>
      <div className="main flex justify-center items-center h-screen bg-no-repeat bg-cover bg-center bg-fixed  bg-[url('https://media.istockphoto.com/id/1130949625/photo/mount-fuji-and-the-long-bridge-of-japan.jpg?s=612x612&w=0&k=20&c=tVj8UjWIdS1QzQeDD8IM_lMCbiTRbLVWJAqlkW8v2uk=')]">
        <div className="text">
            <h1 className='lg:text-5xl px-2 md:text-4xl text-3xl font-serif text-center  text-white underline underline-offset-2'>FINAL ART PRINTS OF YOUR BEST WEDDING MEMORIES</h1>
            
            <div className="button flex justify-center mt-5">
            <Link to={'/learnmore'}>
            <Button className='hover:bg-[#03a9f4] text-black/45 border border-t-4 hover:text-white border-gray-200' size='lg' variant="outlined">LEARN MORE</Button>
            </Link>
            </div>
            <h2 className='lg:text-3xl md:text-2xl text-xl font-serif text-center  text-white pt-5 px-2'>Because Some Photos Deserve To Be Printed And Framed</h2>
        </div>

      </div>
    </div>
  )
}

export default Fixed_herp
