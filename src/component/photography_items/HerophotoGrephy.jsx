import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import ImageScroll from "./ImageScroll";
const cartItems = [
  {
    image:"https://images.pexels.com/photos/11055562/pexels-photo-11055562.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "WEDDING IN GOA",
    src:"/goa"
  },
  {
    image:
      "https://images.pexels.com/photos/13078094/pexels-photo-13078094.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    name: "WEDDING IN UDAIPUR",
    src:"/udaipur"

  },
  {
    image:
      "https://images.pexels.com/photos/8908599/pexels-photo-8908599.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    name: "WEDDING IN KERALA",
    src:"/kerala"
  },
  {
    image:
      "https://images.pexels.com/photos/13856390/pexels-photo-13856390.jpeg",
    name: " JAIPUR WEDDING PHOTOGRAPHER",
    src:"/jaipur"
  },
  {
    image:
      "https://images.pexels.com/photos/247958/pexels-photo-247958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "WEDDING IN CHENNAI",
    src:"/chennai"
  },
  {
    image:
      "https://images.pexels.com/photos/1385478/pexels-photo-1385478.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "COUPLE SHOOT",
    src:"/couple"
  },
];
const scrollList=[
    {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/Featured.jpg"
    },
    {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/silver-1.jpg"
    },
    {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/sony-artisan.jpg"
    },
    {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/Asian-Photography-Top-10-430.jpg"
    },
    {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wbwp-2020-artist-250x250-1.png"
    },
    {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/sony-artisan.jpg"
    },
    {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/430-badge-rank1.jpg"
    },
    {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/430-badge-bronze.jpg"
    },

]

function HerophotoGrephy() {
  return (
    <div>
      <div className="main bg-gray-50">
        <div className="container mx-auto">
          <div className="heading">
            <h1 className="text-2xl lg:text-4xl text-gray-800 font-normal text-center mb-2">
              Wedding Photography In India & Worldwide
            </h1>
            <h2 className="text-xl lg:text-3xl text-gray-600 text-center px-2">
              Check out some our award-winning wedding photos in these galleries
            </h2>
          </div>
          {/* carts */}
          <div className="carts py-4 ">
            <div className="box1 grid md:grid-cols-3 grid-cols-1">
              {cartItems.map((item, index) => {
                return (
                  <Link key={index} to={item.src}>
                  <div
                    className="main hover:bg-transparent  bg-gray-300 m-3"
                  >
                    <div className="img">
                      <img
                        className="h-[20em] w-full mx-auto"
                        src={item.image}
                        alt="img"
                      />
                    </div>
                    <div className="name text-center py-4 text-xl">{item.name}</div>
                  </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="about py-3">
            <div className="text flex gap-4 mx-4 shadow-md bg-white py-12 md:px-12 px-6  ">
              <div className="logo">
                <FaQuoteLeft className="text-yellow-600 text-4xl " />
              </div>
              <div className="box1">
                <h1 className="text-xl font-serif text-gray-600 ">
                Our Indian wedding photos are a masterpiece! The vibrant colors, emotional moments, and traditional details were all perfectly captured. The photographer truly understood the essence of our cultural celebration.
                </h1>
              
              </div>
            </div>
          </div>
          {/* <ImageScroll/> */}
        </div>
      </div>
    </div>
  );
}

export default HerophotoGrephy;
