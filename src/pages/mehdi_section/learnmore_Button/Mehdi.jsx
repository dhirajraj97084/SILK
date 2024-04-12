import { Carousel, Typography, Button } from "@material-tailwind/react"; 
import LearnItem from "./LearnItem";
import Layout from "../../../component/layout/Layout";
import Fixed_im from "./Fixed_im";
export default function Mehdi() {
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
          src="https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-24.jpg"
          alt="image 2"
          className="lg:h-[35em] h-[36em] md w-full object-cover"
        />
      </div>
       
      <div className="relative h-full w-full">
        <img
          src="https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-10.jpg"
          alt="image 2"
          className=" lg:h-[35em] h-[36em] w-full object-cover"
        />
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-08.jpg"
          alt="image 3"
          className=" lg:h-[35em] h-[36em] w-full object-cover"
        />
      </div>
    </Carousel>
    <LearnItem/>
    <Fixed_im/>
    </Layout>
  );
}