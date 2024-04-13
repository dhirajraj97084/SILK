import React from 'react'
import Layout from '../../../component/layout/Layout'
import { Link } from 'react-router-dom';
const couples_list = [
  {
    image:
      "https://www.silkphotos.com/wp-content/uploads/bb-plugin/cache/wedding-tradition-in-India-08-landscape-58dd37dcb1825465df5751b1c8da9aa3-.jpg",
    name: "WEDDING PHOTOGRAPHY TIPS | 10 MISTAKES WEDDING PHOTOGRAPHERS MAKE",
    para:"About a year ago I wrote a post titled 10 tips for an Indian wedding photographer which I though was a good.",
    src:"/one",
  },
  {
    image:
      "https://www.silkphotos.com/wp-content/uploads/bb-plugin/cache/wedding-photography-portfolio_Sephi-Bergerson-82-landscape-788fe5889029a79f44188c3d4b0e8a67-.jpg",
    name: "HOW TO BEHAVE WITH A PHOTOGRAPHER",
    para:"I usually write for photographers but this post might actually be slightly different in the sense that it..",
    src:"/two",
  },
  {
    image:
      "https://www.silkphotos.com/wp-content/uploads/bb-plugin/cache/wedding-photography-portfolio_Sephi-Bergerson-13-landscape-538a3f317ee4cbb0353051ad23a352ef-.jpg",
    name: "8 MISTAKES COUPLES MAKE WHEN THEY HIRE A WEDDING PHOTOGRAPHER",
    para:"Producing a wedding is an expensive thing. Having a budget is a very important aspect for this ..",
    src:"/three",
  },
  {
    image:
      "https://www.silkphotos.com/wp-content/uploads/bb-plugin/cache/SILK_118_2014.01_Udaipur_KP-landscape-be3ace83f6172441e221c4908f68532f-.jpg",
    name: "I DID NOT ENJOY MY INDIAN WEDDING, BUT THE PHOTOS ARE GREAT",
    para:"“I did not enjoy my own wedding, but I really loved the pictures taken by my wedding photographer” says 32 years old Priya.",
    src:"/four",
  },
 
  ]

function ForCouples() {
  return (
    <Layout>
     <div className="box">
        <div className="carts py-4 ">
          <div className="box1 grid md:grid-cols-3 grid-cols-1">
            {couples_list.map((item, index) => {
              return (
                <Link key={index} to={item.src}>
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

export default ForCouples
