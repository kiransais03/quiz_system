import React,{useEffect,useState} from "react";
import { toast } from "react-toastify";
import {Outlet, useNavigate,Navigate} from "react-router-dom";

let ct;

function Privateroutes () {

  useEffect(()=>{ct=0;},[])
  const [showToast, setShowToast] = useState(true);

    if(!localStorage.getItem('token'))
    {
      if (showToast && ct===0) {
        toast.error("Please Login in to your account");
        setShowToast(false);
        ct++;
    }
        console.log("hi")
        return(<Navigate to="/login" replace/>)
    }
    else {
        console.log("hello")
      }
      return (
        <Outlet/>
      )
    
}


export default Privateroutes;