import React from 'react'
import { Link } from 'react-router-dom'

function Fiexedim() {
  return (
    <div>
        <div className="main flex justify-center items-center h-screen bg-no-repeat bg-cover bg-center bg-fixed  bg-[url('https://www.silkphotos.com/wp-content/uploads/2020/08/girls.jpg')]">
        <div className="box">
          <div className="heading">
            <Link to={'/learnmore'}>
            <h1 className="lg:text-3xl text-2xl text-white text-center  font-thin cursor-pointer">Fine Art Prints - A FAMILY HEIRLOOM</h1>
            </Link>
          </div>
          <div className="button my-5 gap-3  flex justify-center">
            <Link to={'/learnmore'}><button className=" py-2 px-5  border-2 border-white/75 hover:bg-green-600 border-t-4 text-white bg-transparent rounded-md cursor-pointer ">LEARN MORE</button></Link>
            </div>
            <div className="heading">
            <Link to={'/learnmore'}>
            <h1 className="lg:text-3xl text-2xl text-white/90 text-center  font-thin cursor-pointer">Because Some Deserve To Be Printed And Framed</h1>
            </Link>
          </div>
           
    
        </div>
      </div>
    </div>
  )
}

export default Fiexedim
