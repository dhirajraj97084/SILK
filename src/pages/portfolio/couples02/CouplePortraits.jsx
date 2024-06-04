import Layout from "../../../component/layout/Layout"

const imageList=[
    {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/07/wedding-photography-portfolio_Sephi-Bergerson-79.jpg"
    },
    {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/07/wedding-photography-portfolio_Sephi-Bergerson-23.jpg"
    },
    {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/07/wedding-photography-portfolio_Sephi-Bergerson-80-534x800.jpg"
    },
    {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-38.jpg"
    },
    {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-29.jpg"
    },
    {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/07/wedding-photography-portfolio_Sephi-Bergerson-79.jpg"
    },
    {
      image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-23.jpg"
    },
    {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-22.jpg"
      },
      {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/07/wedding-photography-portfolio_Sephi-Bergerson-22.jpg"
      },
      {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-17.jpg"
      },
      {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-28.jpg"
      },
      {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/07/wedding-photography-portfolio_Sephi-Bergerson-17.jpg"
      },
      {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-31.jpg"
      },
      {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-34.jpg"
      },
      {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-36.jpg"
      },
      {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-21.jpg"
      },{
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-26.jpg"
      },{
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-12.jpg"
      },{
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-11.jpg"
      },{
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-08.jpg"
      },{
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-09.jpg"
      },{
        image:"https://www.silkphotos.com/wp-content/uploads/2024/03/Indian_wedding_tradition_01.jpg"
      },
      {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-01.jpg"
      },
      {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-13.jpg"
      },
      {
        image:"https://www.silkphotos.com/wp-content/uploads/2020/08/wedding-tradition-in-India-05.jpg"
      },
]

function CouplePortraits() {
  return (
    <Layout>
      <div className=" main font-serif ">
        <div className="box">
        <div className="content text-center bg-gray-100  h-80 flex justify-center items-center  ">
         <div className="div">
         <h1 className='text-center  text-3xl md:text-5xl font-black'>Couples and Portraits </h1>
          <p className='text-balance text-xl pt-8 text-start px-4 md:text-center'>Discover the beauty of togetherness through our captivating couples and portraits sessions. Whether it's the tender embrace of lovebirds or the individual essence of a portrait, we specialize in crafting timeless images that reflect your unique connection and personality. Let us create stunning portraits that freeze moments in time, celebrating your love story with every click of the shutter.</p>
         </div>
        </div>
        </div>
      <div className="images grid  md:grid-cols-2 grid-cols-1 py-4  px-4 gap-2">
         {imageList.map((item,index)=>(
            <div key={index} className="img">
                <img className='' src={item.image} alt="img1" />
            </div>
         ))}
      </div>
      </div>
      </Layout>
  )}

  export default CouplePortraits