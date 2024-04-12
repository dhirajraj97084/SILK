import React from "react";
import { Link } from "react-router-dom";
function Mehdi_hero() {
  return (
    <div>
      <div className="main flex justify-center items-center h-screen bg-no-repeat bg-cover bg-center bg-fixed  bg-[url('https://img.freepik.com/premium-photo/indian-bridal-hand-with-mehandi-design_54391-1872.jpg')]">
        <div className="box">
          <div className="heading">
            <h1 className="lg:text-5xl text-white/90 text-center  font-thin">BEHIND THE INDIAN VEIL <br /> A JOURNEY THROUGH WEDDINGS IN INDIA</h1>
          </div>
          <div className="button flex justify-center my-5 gap-3">
            <Link to={'/learn'}><button className=" py-2 px-5  border-2 border-white/75 hover:bg-green-600 border-t-4 text-white bg-transparent rounded-md cursor-pointer">LEARN MORE</button></Link>
            <Link to={'/gallery'}>
            <button className=" py-2 px-5  border-2 border-white/75 bg-green-600 border-t-4 text-white  rounded-md cursor-pointer"> SEE GALLERY</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mehdi_hero;
