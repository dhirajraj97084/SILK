import React from 'react'
import Layout from '../../../component/layout/Layout'
import { Link } from 'react-router-dom';
const kerla_list = [
  {
    image:
      "https://www.silkphotos.com/wp-content/uploads/bb-plugin/cache/kumarakom_lake_resort_wedding_sephi_bergerson-35-landscape-a144180d50cc7d9f7758cd0a2c3bb985-.jpg",
    name: "SYLVIE & AARON",
    para:"Kumarakom Lake Resort, in the backwater of Kerala, is definitely one of the most gorgeous venues for a destination wedding in Kerala..",
    src:"/k",
  },
  {
    image:
      "https://www.silkphotos.com/wp-content/uploads/bb-plugin/cache/Muslim-wedding-photographer_05-landscape-f82803fb1305872fa115a96d6be07d3e-.jpg",
    name: "NAWAS & FATHIMA",
    para:"Muslim weddings are not easy to photograph. I can tell you that for sure. I mean, if you are a muslim than this might sounds strange, after all a wedding is a wedding...",
    src:"/m",
  },
  {
    image:
      "https://www.silkphotos.com/wp-content/uploads/bb-plugin/cache/FotoWala_062_2014.01.17-Edit-1200x798-landscape-7abed876d787489a4f1b3cacfc62be09-.jpg",
    name: "NANDINI & MICHAEL",
    para:"I have already covered a Kerala backwater wedding before. It is definitely one of my favourite locations for a destination wedding so I was not so sad (!) when Nandini...",
    src:"/n",
  },
  {
    image:
      "https://www.silkphotos.com/wp-content/uploads/bb-plugin/cache/wedding-tradition-in-India-23-landscape-3baf9b2aec153ca06a61d507ec3d4c33-.jpg",
    name: "MATHEW & SHILPA",
    para:"What is a Syrian Christian wedding in Kerala, and why is it unique? A few months ago I photographed a wedding in south India and wrote a post about it..",
    src:"/o",
  },
 
  ]

function Kerala() {
  return (
    <Layout>
     <div className="box">
        <div className="carts py-4 ">
          <div className="box1 grid md:grid-cols-3 grid-cols-1">
            {kerla_list.map((item, index) => {
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

export default Kerala
