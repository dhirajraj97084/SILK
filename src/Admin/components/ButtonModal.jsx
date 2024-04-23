import React, { useState } from "react";
import { config } from "../../../constant";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Loader from "./Loader";
import { toast } from "react-toastify";
const URL = config.url;

const ButtonModal = (props) => {
  const { token } = useAuth();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const data = props.data;
  const dataType = props.dataType;
  let queryModal = false;
  if (dataType === "query") {
    queryModal = true;
  }
  function formatDate(date) {
    var newdate = new Date(date);
    var day = newdate.getDate();
    var month = newdate.getMonth() + 1;
    var year = newdate.getFullYear();
    var newdate = day + "-" + month + "-" + year;
    return newdate;
  }
  const deleteAppointmentData = async (id) => {
    setLoading(true);
    const url = `${URL}/api/getdata/deleteenquiry/?id=${id}&authTocken=${encodeURIComponent(
      token
    )}`;
    try {
      const responce = await axios.delete(url);
      if (responce.data.sucess) {
        setLoading(false);
        toast.success("Record has been deleted");
        setOpen(!open);
        window.location.reload();
      }
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong. Please Try later.");
    }
  };
  const deleteQueryData = async (id) => {
    setLoading(true);
    const url = `${URL}/api/getdata/deletequery/?id=${id}&authTocken=${encodeURIComponent(
      token
    )}`;
    try {
      const responce = await axios.delete(url);
      if (responce.data.sucess) {
        setLoading(false);
        toast.success("Record has been deleted");
        setOpen(!open);
        window.location.reload();
      }
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong. Please Try later.");
    }
  };
  {
    /**deleteappointment deletequery */
  }

  return (
    <div>
      <Toaster />
      <div className="">
        {/* Modal toggle */}
        <button
          onClick={() => setOpen(!open)}
          data-modal-target="authentication-modal"
          data-modal-toggle="authentication-modal"
          className=""
          type="button"
        >
          {props.children}
        </button>
        {/* Main modal */}
        {open && (
          <div
            id="authentication-modal"
            tabIndex={-1}
            aria-hidden="true"
            className="fixed bg-black/70 top-0  flex justify-center items-center  left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div className="relative w-full max-w-lg max-h-full">
              {/* Modal content */}
              <div className="relative border-2 border-primary-red bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  onClick={() => setOpen(!open)}
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="authentication-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close Form</span>
                </button>
                <div className="px-10 py-6 lg:px-8">
                  <div className="py-5">
                    {queryModal ? (
                      <div className="text-start">
                        <div className="flex justify-center pb-2">
                          <p className="text-lg px-2 border-b-2 text-primary-black border-b-primary-black font-semibold text-center py-2">
                            Query
                          </p>
                        </div>
                        <p className="py-2 text-base font-normal">
                          <span className="font-medium">Name : </span>
                          {data.name}
                        </p>
                        <p className="py-2 text-base font-normal">
                          <span className="font-medium">Email : </span>
                          {data.email}
                        </p>
                        <p className="py-2 text-base font-normal">
                          <span className="font-medium">Phone : </span>
                          {data.phone}
                        </p>
                        <p className="py-2 text-base font-normal">
                          <span className="font-medium">Date : </span>
                          {formatDate(data.datetime)}
                        </p>
                        <p className="py-2 text-base font-normal">
                          <span className="font-medium">Message :</span>
                        </p>
                        <p className="py-2 text-base pl-2 font-normal">
                          {data.message}
                        </p>
                        <div className="flex justify-center py-4">
                          {loading ? (
                            <Loader />
                          ) : (
                            <button
                              onClick={() => {
                                deleteQueryData(data._id);
                              }}
                              className="px-4 py-2 text-white text-base font-medium mx-2 rounded-sm bg-primary-red hover:scale-105 hover:shadow-lg hover:drop-shadow-lg ease-linear duration-300"
                            >
                              Delete
                            </button>
                          )}
                          <a
                            href=""
                            className="px-4 py-2 text-white text-base font-medium mx-2 rounded-sm bg-primary-red hover:scale-105 hover:shadow-lg hover:drop-shadow-lg ease-linear duration-300"
                          >
                            Reply on mail
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div className="text-start">
                        <div className="flex justify-center pb-2">
                          <p className="text-lg border-b-2 px-2 border-b-gray-800 font-semibold text-center py-2">
                            Room Enquiry
                          </p>
                        </div>
                        <p className="py-2 text-base font-normal">
                          <span className="font-medium">Name : </span>
                          {data.name}
                        </p>
                        <p className="py-2 text-base font-normal">
                          <span className="font-medium">Email : </span>
                          {data.email}
                        </p>
                        <p className="py-2 text-base font-normal">
                          <span className="font-medium">Phone : </span>
                          {data.phone}
                        </p>
                        <p className="py-2 text-base font-normal">
                          <span className="font-medium">Enquiry Date : </span>
                          {formatDate(data.datetime)}
                        </p>
                        <div className="overflow-hidden rounded-md border mb-4">
                          <table className="w-full ">
                            <thead>
                              <tr className="border-b bg-gray-50">
                                <th className="p-2">Adult</th>
                                <th className="p-2">Childs</th>
                              </tr>
                            </thead>
                            <tbody className="text-center">
                              <tr>
                                <td className="">{data.adultCount}</td>
                                <td className="">{data.childCount}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="overflow-hidden rounded-md border">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b bg-gray-50">
                                <th className="p-2">Check In</th>
                                <th className="p-2">Check Out</th>
                              </tr>
                            </thead>
                            <tbody className="text-center">
                              <tr>
                                <td className="">
                                  {formatDate(data.checkinDate)}
                                </td>
                                <td className="">
                                  {formatDate(data.checkoutDate)}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="flex pt-6 justify-center mx-2">
                          {loading ? (
                            <Loader />
                          ) : (
                            <button
                              onClick={() => {
                                deleteAppointmentData(data._id);
                              }}
                              className="px-4 py-2 text-white text-base font-medium mx-2 rounded-sm bg-primary-red hover:scale-105 hover:shadow-lg hover:drop-shadow-lg ease-linear duration-300"
                            >
                              Delete
                            </button>
                          )}
                          <a
                            href=""
                            className="px-4 py-2 text-white text-base font-medium mx-2 rounded-sm bg-primary-red hover:scale-105 hover:shadow-lg hover:drop-shadow-lg ease-linear duration-300"
                          >
                            Reply on mail
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ButtonModal;
