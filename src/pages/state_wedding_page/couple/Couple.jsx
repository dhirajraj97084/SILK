import React from 'react'
import Layout from '../../../component/layout/Layout'
import { Link } from 'react-router-dom';
const couple_list = [
  {
    image:
      "https://www.silkphotos.com/wp-content/uploads/bb-plugin/cache/couple-shoot-in-Goa-benny_cathy-5-landscape-4a801aa920d44da8efd57836c82ea241-.jpg",
    name: "BENNY & CATHY ~ COUPLE SHOOT",
    para:"Last June I had the pleasure of covering the wedding of Singer Benny Dayal and model-actress Catherine Thangam in Bangalore....",
    src:"/k",
  },
  {
    image:
      "https://www.silkphotos.com/wp-content/uploads/bb-plugin/cache/Goa-wedding-photographer-2520160412-1200x800-landscape-14327ab731041fafaf7e49b5bb04d75f-.jpg",
    name: "DINA & CARL",
    para:"I met Dina and Carl a few months ago when they came to visit and finalise the arrangements for their Goa beach wedding at the Taj Exotica resort in south Goa.....",
    src:"/m",
  },
  {
    image:
      "https://www.silkphotos.com/wp-content/uploads/bb-plugin/cache/857_SILK_Sephi_20151106-2-landscape-b387f0f16d48f8be44dcf9ae5c8a38cc-.jpg",
    name: "RAAHIL & PIA (PART 2)",
    para:"Last post was all about the first part of Raahil & Pia’s stunning destination wedding in Goa; the Champaign lunch at the forest, the Teeka and engagement on the beach, and the after party....",
    src:"/n",
  },
  {
    image:
      "https://www.silkphotos.com/wp-content/uploads/bb-plugin/cache/Destination-wedding-Goa-Park-Hyatt__001-3-landscape-bfaf74f3d8356d7e6a8f19eed18d819f-.jpg",
    name: " RAAHIL & PIA (PART 1)",
    para:"The season is back in Goa and the weather is great again. Time for the first destination wedding of the season, and this one is one of those weddings that one posts is not enough to cover....",
    src:"/o",
  },
  {
    image:
      "https://www.silkphotos.com/wp-content/uploads/bb-plugin/cache/goa-wedding-photography_vivek_sarah-Sephi-Bergerson-6-1-landscape-04be3541ed994739247e96ed930bbd45-.jpg",
    name: "SARAH & VIVEK",
    para:"Being based in Goa it is a bit surprising that I actually do not get to cover a destination wedding in Goa all that often. However, the ones I do get to attend usually turn out to be quite fantastic....",
    src:"/p",
  },
  {
    image:
      "https://www.silkphotos.com/wp-content/uploads/bb-plugin/cache/christian-wedding-in-south-goa-13-landscape-bcca12b1c455dc9c8d581fc95e493b0d-.jpg",
    name: "CLAYTON & ANN",
    para:"If you are planing a church wedding in Goa there are quite a few places to hold the ceremony. There is a small chapel at the top of a hill which remains locked most of the time..",
    src:"/q",
  },
  {
      image:
        "https://www.silkphotos.com/wp-content/uploads/bb-plugin/cache/intimate-wedding-in-goa-7-landscape-d013c0b83b54cb582c17d976bda861f9-.jpg",
      name: "LINDA & JÖERG",
      para:"Linda and Jöerg (pronounced like York) are both graphic designers based in Berlin and nothing about their wedding in Goa was ordinary in the way we might imagine it..",
      src:"/r",
    },
    {
      image:
        "https://www.silkphotos.com/wp-content/uploads/bb-plugin/cache/Beach-wedding-in-Goa_101210_SB20916-1-1200x800-landscape-c1a7708f9ae8036911e6ecf14b3f51d7-.jpg",
      name: "UDIT & SHIVANI",
      para:"There are really only two kinds of weddings that happen in Goa: a traditional Christian church wedding or destination weddings. The first type of wedding, as beautiful as it can be..",
      src:"/z"
    },
  
    {
      image:
        "https://www.silkphotos.com/wp-content/uploads/bb-plugin/cache/Traditional-Catholic-wedding-in-Goa-12-landscape-9e0116ca66a6a4ca5f6273f292f4a753-.jpg",
      name: "ANALISA & JAYDEV",
      para:"When one thinks of a wedding in Goa it is very likely that the first thing that comes to mind would be a beach wedding somewhere under the coconut trees..",
      src:"/x"
    },
    {
      image:
        "https://www.silkphotos.com/wp-content/uploads/bb-plugin/cache/wedding-photography-portfolio_Sephi-Bergerson-1-landscape-84349c1db83e29c0bd0d9633a0925881-.jpg",
      name: "KEVIN & JEANNINE",
      para:"It was not what you would call a beach wedding in Goa, but we did make it to the beach of course! Right after the church wedding – which was my first Roman Catholic wedding,..",
      src:"/y"
    },]

function Couple() {
  return (
    <Layout>
       <div className="box">
        <div className="carts py-4 ">
          <div className="box1 grid md:grid-cols-3 grid-cols-1">
            {couple_list.map((item, index) => {
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

export default Couple
