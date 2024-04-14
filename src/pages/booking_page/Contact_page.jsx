import React from "react";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import Alternative_contact_page from "./Alternative_contact_page";

function Contact_page() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="main py-4">
          <IoEllipsisHorizontalSharp className="text-5xl mx-auto " />
        </div>
        <div className="contact">
          <div className="heading">
            <h1 className="px-4 text-2xl  lg:text-3xl lg:pb-4 text-center md:text-start ">
              WEDDING PHOTOGRAPHY - ENQUIRY FORM
            </h1>
            <p className="px-4  pt-4 text-start font-normal  ">
              Just like every other element of our service even our quotation is
              completely personalised. The idea behind this is to accommodate
              different styles, approaches, couples and budgets and make it
              work!
            </p>
            <p className="px-4  pt-4 text-start  font-normal ">
              Request you to kindly fill out this questionnaire and we will
              share with you a custom quotation in the next 48 hours.
            </p>
          </div>
        </div>
        <div className="inputs_items">
          <div className=" first6_input py-4 grid grid-cols-1 md:grid-cols-2  ">
            <div className="input1 px-4 m-3">
              <h1 className="pb-1 text-xl font-semibold">Email</h1>
              <input
                type="email"
                className="py-2 px-2 outline-none   bg-white shadow-md rounded-md w-full"
              />
            </div>
            <div className="input2 px-4 m-3">
              <h1 className="pb-1 text-xl font-semibold">
                Your Name, and relationship with the couple{" "}
              </h1>
              <input
                type="email"
                className="py-2 px-2 outline-none   bg-white shadow-md rounded-md w-full"
              />
            </div>
            <div className="input3 px-4 m-3">
              <h1 className="pb-1 text-xl font-semibold">Bride's Name </h1>
              <input
                type="email"
                className="py-2 px-2 outline-none   bg-white shadow-md rounded-md w-full"
              />
            </div>
            <div className="input4 px-4 m-3">
              <h1 className="pb-1 text-xl font-semibold">Groom's Name </h1>
              <input
                type="email"
                className="py-2 px-2 outline-none   bg-white shadow-md rounded-md w-full"
              />
            </div>
            <div className="input5 px-4 m-3">
              <h1 className="pb-1 text-xl font-semibold">Wedding Date </h1>
              <input
                type="date"
                name=""
                id=""
                className="py-2 px-2 outline-none   bg-white shadow-md rounded-md w-full"
              />
            </div>
            <div className="input6 px-4 m-3">
              <h1 className="pb-1 text-xl font-semibold">
                Wedding Location / Venue{" "}
              </h1>
              <input
                type="email"
                className="py-2 px-2 outline-none  bg-white shadow-md rounded-md w-full"
              />
            </div>
          </div>
          <div className="inputs3_col grid grid-cols-1 md:grid-cols-3">
            <div className="input1 px-4 m-3">
              <h1 className="pb-1 text-xl font-semibold">Number of Days </h1>
              <input
                type="email"
                className="py-2 px-2 outline-none   bg-white shadow-md rounded-md w-full"
              />
            </div>
            <div className="input1 px-4 m-3">
              <h1 className="pb-1 text-xl font-semibold">No. of functions </h1>
              <input
                type="email"
                className="py-2 px-2 outline-none   bg-white shadow-md rounded-md w-full"
              />
            </div>
            <div className="input1 px-4 m-3">
              <h1 className="pb-1 text-xl font-semibold">
                Expected number of guest{" "}
              </h1>
              <input
                type="number"
                name=""
                id=""
                className="py-2 px-2 outline-none   bg-white shadow-md rounded-md w-full"
              />
            </div>
          </div>
          <div className="radio_buttons">
            <div className="radio1 p-6 ">
              <h1 className="text-xl font-semibold mb-2">Requirement </h1>
              <div className="parall_radio  gap-6 ml-4 grid grid-cols-1 md:grid-cols-2 ">
                <div className="first flex gap-3  ">
                  <input
                    type="checkbox"
                    className=" size-6 checked:bg-blue-500 ..."
                  />
                  <div className="text-xl">Photography</div>
                </div>
                <div className="second flex gap-3 ">
                  <input
                    type="checkbox"
                    className=" size-6 checked:bg-blue-500 ..."
                  />
                  <div className="text-xl">Cinematography</div>
                </div>
              </div>
            </div>

            <div className="radio2_col px-6 pb-4 ">
              <h1 className="text-xl font-semibold mb-2">
                Additional requirements{" "}
              </h1>
              <div className="parall_radio ml-4">
                <div className="first flex gap-3  ">
                  <input
                    type="checkbox"
                    className=" size-6 checked:bg-blue-500 ..."
                  />
                  <div className="text-xl">Fun Couple Shoot</div>
                </div>
                <div className="second flex gap-3 ">
                  <input
                    type="checkbox"
                    className=" size-6 checked:bg-blue-500 ..."
                  />
                  <div className="text-xl">Wedding Album 12"x15"</div>
                </div>
                <div className="third flex gap-3 ">
                  <input
                    type="checkbox"
                    className=" size-6 checked:bg-blue-500 ..."
                  />
                  <div className="text-xl">
                    Wedding Album 9"x11" (Two Parents copies)"
                  </div>
                </div>
                <div className="forth flex gap-3 ">
                  <input
                    type="checkbox"
                    className=" size-6 checked:bg-blue-500 ..."
                  />
                  <div className="text-xl">Fine-Art Prints and Wall Art</div>
                </div>
                <div className="forth flex gap-3 ">
                  <input
                    type="checkbox"
                    className=" size-10 md:size-6 checked:bg-blue-500 ..."
                  />
                  <div className=" font-normal text-xl ">
                    Social Media Concierge (To handle your social media handles
                    during the event)
                  </div>
                </div>              
              </div>

               {/* third */}
               <div className="radio3_col  pb-4 ">
              <h1 className="text-xl font-semibold my-2">
              Video Requirement {" "}
              </h1>
              <div className="parall_radio ml-4 grid grid-cols-1 md:grid-cols-3 gap-y-2">
                <div className="first flex gap-3  ">
                  <input
                    type="checkbox"
                    className=" size-6 checked:bg-blue-500 ..."
                  />
                  <div className="text-xl">Trailer (4 - 5 mins)</div>
                </div>
                <div className="second flex gap-3 ">
                  <input
                    type="checkbox"
                    className=" size-6 checked:bg-blue-500 ..."
                  />
                  <div className="text-xl">Long film (15 - 20 mins)</div>
                </div>
                <div className="third flex gap-3 ">
                  <input
                    type="checkbox"
                    className=" size-6 checked:bg-blue-500 ..."
                  />
                  <div className="text-xl">
                  Teaser ( 1-2 mins)
                  </div>
                </div>
                <div className="forth flex gap-3 ">
                  <input
                    type="checkbox"
                    className=" size-6 checked:bg-blue-500 ..."
                  />
                  <div className="text-xl">Per function - Insta Teaser (1min)</div>
                </div>
                <div className="forth flex gap-3 ">
                  <input
                    type="checkbox"
                    className=" size-6 checked:bg-blue-500 ..."
                  />
                  <div className="text-xl">
                  Same day edit
                  </div>
                </div>              
              </div>
              </div>
              {/* radio_end */}

              <div className="inputs">
              <div className="input1  m-3">
              <h1 className="pb-1 text-xl font-semibold">If you have an approximate budget that you are working with, please share it with us. </h1>
              <input
                type="email"
                className="py-2 px-4 outline-none bg-white shadow-md rounded-md md:w-[30em]  w-full lg:w-[45em]"
              />
            </div>
            <div className="input1  m-3">
              <h1 className="pb-1 text-xl font-semibold">Email Address for communication  </h1>
              <input
                type="email"
                className="py-2 px-4 outline-none md:w-[30em]  w-full bg-white shadow-md rounded-md lg:w-[45em] "
              />
            </div>
              </div>
              <div className="last_input flex items-center">
                <h1 className="text-xl text-wrap ">WhatsApp number (If you wish to receive the quote on WhatsApp)  </h1>
              </div>
              <div className="box grid md:grid-cols-2 grid-cols-1">
              <div className="input1  m-3">
              <h1 className="pb-1 text-xl font-semibold"> Country code </h1>

              <div className="in flex">
                <button className="px-4 py-2 bg-gray-300 rounded-l-md"><FaPlus /></button>
              <input
                type="email"
                className="py-2 px-4 outline-none bg-white shadow-md rounded-r-md "
              />
              </div>
            </div>
            <div className="input1  m-3">
              <h1 className="pb-1 text-xl font-semibold">Phone number </h1>
              <input
                type="email"
                className="py-2 px-4 outline-none bg-white w-full shadow-md rounded-md md:w-[400px]"
              />
            </div>
              </div>
              <div className="send flex justify-center py-8">
                <button className="px-7 py-3 text-xl font-semibold cursor-pointer hover:bg-cyan-600 bg-cyan-500 rounded-md text-white">SEND</button>
              </div>
            </div>
          </div>
        </div>
        <Alternative_contact_page/>
      </div>
    </div>
  );
}

export default Contact_page;
