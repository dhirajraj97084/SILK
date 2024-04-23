import React, { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, Outlet, useNavigate } from "react-router-dom";
//import useAuth from "../../hooks/useAuth";
import AdminMain from "./AdminMain";

const Admin = () => {
  
  const navigate = useNavigate()
  //const {isAuthenticated, token} = useAuth();
  /**const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(()=>{
    if (!localStorage.getItem('tocken')){
      setIsAuthenticated(true)
    }
  })*/
  /**if(!localStorage.getItem('token')){
    navigate('/login')
  }
  return (
    <AdminNav/>
  )*/
  /**
   * useEffect(()=>{
    if(!token){
      return navigate('/login')
    }
    if(!isAuthenticated){
      return navigate('/login')
    }
  }, [isAuthenticated])
   */
  return (
    //isAuthenticated?(<AdminMain/>):""
    <AdminMain/>
  )
};

export default Admin;
