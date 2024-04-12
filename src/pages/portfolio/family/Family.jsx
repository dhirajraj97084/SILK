import React from 'react'
import Layout from '../../../component/layout/Layout'
import { Link } from 'react-router-dom'
import { Carousel, Typography } from '@material-tailwind/react'

function Family() {
  return (
    <Layout>
      <Carousel
    loop={true}
    autoplay="true"
    navigation={false}
    transition={{type : "tween", duration : 2}}
    autoplayDelay={5000}
    className=" ">
        <div className="relative h-full w-full">
        <img
          src="https://www.silkphotos.com/wp-content/uploads/2020/07/wedding-photography-portfolio_Sephi-Bergerson-79.jpg"
          alt="image 2"
          className="lg:h-[40em] h-[25em] md:h-[34em] md w-full object-cover"
        />
        <div className="box absolute inset-0 grid h-full w-full place-items-center my-auto bg-black/10 ">
        <div className="">
          <Link to={'/booking'}>
           <Typography
              variant="h1"
              color="white"
              className="my-4 text-xl md:text-2xl lg:text-4xl  text-center"
            >
    FAMILY PORTRAIT PHOTOGRAPHY
            </Typography>
           </Link>
            <Link to={'/booking'} >
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-center"
            >
         Preserving Your Family Legacy
            </Typography> 
            </Link>             
          </div>
        </div>
      </div>
       
      <div className="relative h-full w-full">
        <img
          src="https://www.silkphotos.com/wp-content/uploads/2020/07/wedding-photography-portfolio_Sephi-Bergerson-82.jpg"
          alt="image 2"
          className=" lg:h-[40em] h-[25em] md:h-[34em] w-full object-cover"
        />
        
        <div className="box absolute inset-0 grid h-full w-full place-items-center my-auto bg-black/10 ">
        <div className="">
          <Link to={'/booking'}>
           <Typography
              variant="h1"
              color="white"
              className="my-4 text-xl md:text-2xl lg:text-4xl  text-center"
            >
          FAMILY PORTRAIT PHOTOGRAPHY
            </Typography>
           </Link>
            <Link to={'/booking'} >
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-center"
            >
              Preserving Your Family Legacy
            </Typography> 
            </Link>             
          </div>
        </div>

      </div>
      <div className="relative h-full w-full">
        <img
          src="https://www.silkphotos.com/wp-content/uploads/2020/07/wedding-photography-portfolio_Sephi-Bergerson-41.jpg"
          alt="image 3"
          className=" lg:h-[40em] h-[25em] md:h-[34em] w-full object-cover"
        />
         <div className="box absolute inset-0 grid h-full w-full place-items-center my-auto bg-black/10 ">
        <div className="">
          <Link to={'/booking'}>
           <Typography
              variant="h1"
              color="white"
              className="my-4 text-xl md:text-2xl lg:text-4xl  text-center"
            >
       FAMILY PORTRAIT PHOTOGRAPHY
            </Typography>
           </Link>
            <Link to={'/booking'} >
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-center"
            >
          Preserving Your Family Legacy
            </Typography> 
            </Link>             
          </div>
        </div>
      </div>
    </Carousel>
    </Layout>
  )
}

export default Family
