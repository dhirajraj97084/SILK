import React from 'react'
import Layout from '../../../component/layout/Layout'
import { Link } from 'react-router-dom';
const chenni_list = [
  {
    image:"https://www.silkphotos.com/wp-content/uploads/bb-plugin/cache/Chennai-wedding-photographer-4-1200x800-landscape-8ece94a3f39ff2891d33aea4c2a151d7-.jpg",

    name: "JANANI & HARISH – CHENNAI WEDDING PHOTOGRAPHER",
    para:"Janani and Harish’s traditional Hindu wedding in Chennai proved to be one of the most exhilarating mandap experiences I’ve encountered. ...",
    src:"/k",
  },
  {
    image:"https://www.silkphotos.com/wp-content/uploads/bb-plugin/cache/Chennai-wedding-photographer-TamBrahm-wedding-014_2016-1200x800-landscape-f118e3f6510767bd8c6585519029bc65-.jpg",
    name: "SHIVA & PRIYADARSHINI",
    para:"Shiva and Priyadarshini’s traditional wedding in Chennai...",
    src:"/m",
  },
  
  ]

function Chennai() {
  return (
    <Layout>
       <div className="box">
        <div className="carts py-4 ">
          <div className="box1 grid md:grid-cols-3 grid-cols-1">
            {chenni_list.map((item, index) => {
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

export default Chennai
