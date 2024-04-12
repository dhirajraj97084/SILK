import React from 'react'
import Layout from '../../../component/layout/Layout'
import { Link } from 'react-router-dom';
const jaipur_list = [
  {
    image:
      "https://www.silkphotos.com/wp-content/uploads/bb-plugin/cache/Jaipur-wedding-photogrpaher_114-landscape-576cbaa1cc39f2c7bdd0d5a8d6d68565-.jpg",
    name: "SUKRITI & PRAGUN",
    para:"Every now and then you come across a wedding that is just too fantastic to be described in words, and way too elaborate and grand to fit into a normal blog post..",
    src:"/k",
  },
  {
    image:
      "https://www.silkphotos.com/wp-content/uploads/bb-plugin/cache/Jaipur-Samode-palace-wedding_03-landscape-f5a19b4f92f7393e10d90923f8735518-.jpg",
    name: "RAHUL & REEMA",
    para:"The 16th century Samode palace lies a little more than an hour drive from the pink city of Jaipur, in the midst of ancient granite rock formation and away from the world we know..",
    src:"/m",
  },
  {
    image:
      "https://www.silkphotos.com/wp-content/uploads/bb-plugin/cache/Jaipur-palace-wedding_05-landscape-83e1c633f321ea0b765846bb56874930-.jpg",
    name: "ADITI & ADITYA",
    para:"Aditi and Aditya’s wedding in Jaipur was quite a spectacle and the venues were most probably the most beautifully decorated I have ever seen. ..",
    src:"/n",
  },
 
  ]

function Jaypur() {
  return (
    <Layout>
       <div className="box">
        <div className="carts py-4 ">
          <div className="box1 grid md:grid-cols-3 grid-cols-1">
            {jaipur_list.map((item, index) => {
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

export default Jaypur
