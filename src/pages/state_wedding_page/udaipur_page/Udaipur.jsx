import React from 'react'
import Layout from '../../../component/layout/Layout'
import { Link } from 'react-router-dom';
const udaypur_list = [
  {
    image:
      "https://www.silkphotos.com/wp-content/uploads/bb-plugin/cache/Wedding-at-Leela-palace-Udaipur_Vidiya-and-Rezaul-29-landscape-b6f50e5f0ba5f4d550c907eb86cc5066-.jpg",
    name: "VIDIYA & REZAUL", 
    para:"The lavish Muslim wedding of this Bangladeshi couple, took place at the amazing Leela Palace hotel in Udaipur over three days of great celebration...",
    src:"/k",
  },
  {
    image:
      "https://www.silkphotos.com/wp-content/uploads/bb-plugin/cache/IMG_0273-copy-1-1067x800-landscape-7107766861ca02b4aa29740740ad8354-.jpg",
    name: "INDIAN WEDDING PHOTOGRAPHY ENTIRELY ON IPHONE",
    para:"For quite some time, my aspiration has been to undertake Indian wedding photography exclusively with an iPhone.",
    src:"/m",
  },
  {
    image:
      "https://www.silkphotos.com/wp-content/uploads/bb-plugin/cache/Udaipur_wedding-photographer-landscape-122669d0db0626c8d33eae1accd6043b-.jpg",
    name: "ALLIE & FLORIS",
    para:"Udaipur is quite possibly the most romantic city in India. I come to the ‘Venice of Rajasthan’ a few times a year and it always manages to surprise me and look different than it did before.",
    src:"/n",
  },
  {
    image:
      "https://www.silkphotos.com/wp-content/uploads/bb-plugin/cache/sikh-wedding-in-udaipur-sapna-and-rishi-20-landscape-053594954e83c945c715faec48d748d7-.jpg",
    name: " SAPNA & RISHI",
    para:"A wedding at the Leela palace Udaipur is always guaranteed to be a stunning experience. If there is one city in India that is truely romantic it is Udaipur and no matter...",
    src:"/o",
  },
  {
    image:
      "https://www.silkphotos.com/wp-content/uploads/bb-plugin/cache/Wedding-at-Devi-Garh_Geeta_Oliver-21-landscape-41d094a017ad71928af6c26d45e8ed17-.jpg",
    name: "GEETA & OLIVER",
    para:"Geeta and Oliver met almost ten years ago when both families went on a separate vacation to the Maldives...",
    src:"/p",
  },
  {
    image:
      "https://www.silkphotos.com/wp-content/uploads/bb-plugin/cache/wedding-photography-portfolio_Sephi-Bergerson-4-landscape-21b8c555e5e7480fbce7c5243d42d6af-.jpg",
    name: "CLAYTON & ANN",
    para:"If you are planing a church wedding in Goa there are quite a few places to hold the ceremony. There is a small chapel at the top of a hill which remains locked most of the time..",
    src:"/q",
  },
  {
      image:
        "https://www.silkphotos.com/wp-content/uploads/bb-plugin/cache/intimate-wedding-in-goa-7-landscape-d013c0b83b54cb582c17d976bda861f9-.jpg",
      name: "POOJA & NIKHIL",
      para:"The Leela Palace hotel was the stunning backdrop for Nikhil and Pooja’s wedding in Udaipur..",
      src:"/r",
    },
  ]

function Udaipur() {
  return (
    <Layout>
      <div className="box">
        <div className="carts py-4 ">
          <div className="box1 grid md:grid-cols-3 grid-cols-1">
            {udaypur_list.map((item, index) => {
              return (
                <Link key={index} to={""}>
                  <div className="main hover:bg-transparent  bg-gray-300 m-3">
                    <div className="img">
                      <img
                        className="h-[20em] w-full mx-auto"
                        src={item.image}
                        alt="img"
                      />
                    </div>
                    <div className="name text-center py-4 text-xl">
                      {item.name}
                    </div>
                    <div className="paragraph text-start px-2 pb-2">
                      {item.para}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Udaipur
