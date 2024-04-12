import { Carousel, Typography, Button } from "@material-tailwind/react"; 
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <>

    <Carousel 
    loop={true}
    autoplay="true"
    navigation={false}
    transition={{type : "tween", duration : 2}}
    autoplayDelay={5000}
    className=" ">
        <div className="relative h-full w-full">
        <img
          src="https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-22.jpg"
          alt="image 2"
          className="lg:h-[30em] h-[25em] md:h-[34em] md w-full object-cover"
        />
        <div className="box absolute inset-0 grid h-full w-full place-items-center my-auto bg-black/10 ">
        <div className="">
          <Link to={'/booking'}>
           <Typography
              variant="h1"
              color="white"
              className="my-4 text-xl md:text-2xl lg:text-4xl  text-center"
            >
            WEDDING PHOTOGRAPHY IN INDIA
            </Typography>
           </Link>
            <Link to={'/booking'} >
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-center"
            >
              Best Wedding Photographers in India & Worldwide
            </Typography> 
            </Link>             
          </div>
        </div>
      </div>
       
      <div className="relative h-full w-full">
        <img
          src="https://images.pexels.com/photos/4121047/pexels-photo-4121047.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="image 2"
          className=" lg:h-[30em] h-[25em] md:h-[34em] w-full object-cover"
        />
        
        <div className="box absolute inset-0 grid h-full w-full place-items-center my-auto bg-black/10 ">
        <div className="">
          <Link to={'/booking'}>
           <Typography
              variant="h1"
              color="white"
              className="my-4 text-xl md:text-2xl lg:text-4xl  text-center"
            >
            WEDDING PHOTOGRAPHY IN INDIA
            </Typography>
           </Link>
            <Link to={'/booking'} >
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-center"
            >
              Best Wedding Photographers in India & Worldwide
            </Typography> 
            </Link>             
          </div>
        </div>

      </div>
      <div className="relative h-full w-full">
        <img
          src="https://www.silkphotos.com/wp-content/uploads/2020/07/wedding-photography-portfolio_Sephi-Bergerson-27-480x360.jpg"
          alt="image 3"
          className=" lg:h-[30em] h-[25em] md:h-[34em] w-full object-cover"
        />
         <div className="box absolute inset-0 grid h-full w-full place-items-center my-auto bg-black/10 ">
        <div className="">
          <Link to={'/booking'}>
           <Typography
              variant="h1"
              color="white"
              className="my-4 text-xl md:text-2xl lg:text-4xl  text-center"
            >
            WEDDING PHOTOGRAPHY IN INDIA
            </Typography>
           </Link>
            <Link to={'/booking'} >
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-center"
            >
              Best Wedding Photographers in India & Worldwide
            </Typography> 
            </Link>             
          </div>
        </div>
      </div>
    </Carousel>
    </>
  );
}