import React, { useState } from "react";
import axios from "axios";
//import logo from "../../assets/images/hotellogo.png";
import { config } from "../../../constant";
import useAuth from "../../hooks/useAuth";
import { useNavigate, redirect } from "react-router-dom";
import { toast } from "react-toastify";
const URL = config.url;

const Login = () => {
  const { userLogin, loading, setLoading } = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [showPass, setShowPass] = useState(false);
  const showPassControl = () => {
    setShowPass(!showPass);
  };
  const contentFieldChanaged = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    //console.log(data)
  };
  const loginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { email, password } = data;
    const url = `${URL}/api/user/login`;
    try {
      const responce = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const json = await responce.json();
      //console.log(json)
      if (json.sucess) {
        //alert(json.sucess)
        //console.log(json.authTocken)
        localStorage.setItem("auth_tocken", json.authTocken);
        userLogin();
        setLoading(false);
        //console.log(isAuthenticated)
        navigate("/admin/");
      } else {
        toast.error("login with correct credentials");
      }
    } catch (error) {
      toast.error("Something went wrong, Please try later..");
    }
  };

  return (
    <>
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="hidden">
              <div className="flex flex-col justify-center items-center text-white">
                <img className="w-10" src={""} alt="logo" />
                <span className="font-bold pt-2 text-white text-lg font-libe-custom leading-tight">
                  Hotel Pinnacle
                </span>
              </div>
              </div>
              <div>
              <h2 class="text-center text-2xl font-bold leading-tight text-primary-red">
                Welcome Back
              </h2>
              <h2 class="text-center text-2xl font-bold leading-tight text-black">
                Sign in to your account
              </h2>
              </div>
              <form onSubmit={loginSubmit} class="space-y-4 md:space-y-6">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    onChange={contentFieldChanaged}
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    onChange={contentFieldChanaged}
                    type={showPass ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        onChange={showPassControl}
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label
                        for="remember"
                        class="text-gray-500 dark:text-gray-300"
                      >
                        Show Password
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-primary-red hover:scale-105 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 duration-300 ease-linear"
                >
                  Log in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Toaster />
    </>
  );
};

export default Login;
