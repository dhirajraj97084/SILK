import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuth from "../../hooks/useAuth";
import { faAnglesRight, faCircleQuestion, faEnvelope, faHouse, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";

const AdminMain = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [profileMenu, setProfilemenu] = React.useState(false);
  const { userLogout, token, isAuthenticated } = useAuth();
  const handleLogout = (e) => {
    //localStorage.removeItem('token')
    //console.log(localStorage.getItem('token'))
    //navigate('/login')
    userLogout();
  };
  useEffect(()=>{
    if(!token){
      navigate('/login')
    }
  },[isAuthenticated])

  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className=" w-screen h-screen">
      <nav className="h-[58px]">
        <div className="relative w-full h-full bg-blue-gray-900 text-white">
          <div className="mx-auto h-full flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
            <div className="inline-flex items-center space-x-2">
              <p className="font-semibold text-lg">
                <Link to="/admin">Dashboard</Link>
              </p>
              <div
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-xl cursor-pointer md:hidden leading-tight"
              >
                {" "}
                <FontAwesomeIcon className={`duration-300 ease-linear ${isMenuOpen?"rotate-180":""}`}
                  icon={faAnglesRight}
                />
              </div>
            </div>
            <div
              className="relative flex flex-col justify-center cursor-pointer"
              onClick={() => setProfilemenu(!profileMenu)}
            >
              <FontAwesomeIcon icon={faUser} />

              {/* Dropdown menu */}
              {profileMenu && (
                <div
                  id="userDropdown"
                  className="z-10 absolute shadow-lg p-2 top-full right-0 float-end mt-2 bg-gray-100 divide-y divide-gray-100 rounded-lg w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div></div>
                    <div className="font-medium truncate"></div>
                  </div>
                  <ul
                    className="py-2 text-base text-gray-700 dark:text-gray-200"
                    aria-labelledby="avatarButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      ></a>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="block w-full font-medium hover:shadow-lg hover:bg-white px-4 py-2 rounded-lg dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        <FontAwesomeIcon icon={faRightFromBracket} className="pr-2" /> Logout
                      </button>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    ></a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <div className="relative h-[calc(100vh-58px)] w-full flex">
        <aside
          className={
            isMenuOpen
              ? `absolute -translate-x-0 ease-in-out duration-500 h-full max-w-72 w-full md:-translate-x-0 md:relative`
              : `-translate-x-[50rem] absolute h-full max-w-72 w-full md:-translate-x-0 md:relative ease-in-out duration-500`
          }
        >
          <div className=" bg-blue-gray-900 h-full p-4 flex flex-col justify-between text-white">
            <ul className="w-full grid grid-cols-1 gap-2">
            <li className=" text-base font-medium rounded-md hover:bg-white hover:text-blue-gray-900 hover:shadow-xl ease-linear duration-300">
                <Link onClick={() => setIsMenuOpen(!isMenuOpen)} className="block w-full p-2" to={"/admin/"}>
                <FontAwesomeIcon icon={faHouse} className="pr-2" />
                  Home
                </Link>
              </li>
              <li className=" text-base font-medium rounded-md hover:bg-white hover:text-blue-gray-900 hover:shadow-xl ease-linear duration-300">
                <Link onClick={() => setIsMenuOpen(!isMenuOpen)} className="block w-full p-2" to={"/admin/allenquiries"}>
                <FontAwesomeIcon icon={faCircleQuestion} className="pr-2"/>
                  Enquiries
                </Link>
              </li>
              <li className=" text-base font-medium rounded-md hover:bg-white hover:text-blue-gray-900 hover:shadow-xl ease-linear duration-300">
                <Link onClick={() => setIsMenuOpen(!isMenuOpen)} className="block w-full p-2" to={"/admin/allquries"}>
                <FontAwesomeIcon icon={faEnvelope} className="pr-2" />
                Queries
                </Link>
              </li>
            </ul>
            <div className="w-full grid grid-cols-1 gap-2">
              <button
                onClick={handleLogout}
                className="p-2 bg-primary-white text-primary-red rounded-md  hover:bg-primary-white/70"
              >
                <FontAwesomeIcon icon={faRightFromBracket} className="pr-2" /> Logout
              </button>
            </div>
          </div>
        </aside>
        <div className="h-full w-full bg-blue-gray-900">
          <div className="w-full h-full md:rounded-tl-md overflow-y-scroll bg-white">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMain;
