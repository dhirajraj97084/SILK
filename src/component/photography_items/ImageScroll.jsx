import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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


export default function ImageScroll() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <div className="slider-container py-6">
    <Slider {...settings}>
    {scrollList.map((items,indexs)=>{
                    return( <div key={indexs} className="img ">
                        <img className=" w-[18em] p-2 cursor-pointer " src={items.image} alt="" />
                    </div> )
                })}
    </Slider>
  </div>
  )
}
