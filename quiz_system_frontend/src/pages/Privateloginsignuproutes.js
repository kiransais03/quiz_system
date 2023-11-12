import React,{useEffect,useState} from "react";
import { Outlet, useNavigate,Navigate } from "react-router-dom";
import {toast} from "react-toastify";

let ct;

function Privatelogin_signuproutes () {

   useEffect(()=>{ct=0;},[])
   const [showToast, setShowToast] = useState(true);


   if(localStorage.getItem('token'))
   {
      if (showToast && ct===0) {
         toast.info("Please logout if you want to login with different account");
         setShowToast(false);
         ct++;
     }
    return (<Navigate to="/dashboard" replace/>)
   }
   else {
      return(<Outlet/>)
   }
}


export default Privatelogin_signuproutes