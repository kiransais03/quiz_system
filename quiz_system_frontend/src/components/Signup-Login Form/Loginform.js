import React,{useEffect, useState} from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useNavigate,useLocation } from "react-router-dom";
import {toast} from "react-toastify"
import axios from "axios";
import {useDispatch} from "react-redux"
import {usertokenAdd,emailAdd } from "../../redux/actions/userActionstatus";


const Loginform =()=>{

    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");

    let [loading,setLoading]=useState(false);

    let dispatch = useDispatch();

    let navigate1= useNavigate();

   async function handleLogin() {
       if(email && password && email.includes('@')) {
           try {
            console.log("Logging in....")
            setLoading(true);
            console.log(process.env.REACT_APP_URL)
            let loginUserdata = await axios.post(`${process.env.REACT_APP_URL}/user/login`,{"email" : email,
            "password" : password})
          
              console.log(loginUserdata.data.data.token);
              localStorage.setItem('token',loginUserdata.data.data.token);
              localStorage.setItem('email',loginUserdata.data.data.email);
              dispatch(usertokenAdd(loginUserdata.data.data.token));
              dispatch(emailAdd(loginUserdata.data.data.email));
              setLoading(false);
              toast.success('Login Successful');
              console.log("Login Successfull.")
             navigate1("/courses")
              
        }
        catch(error){
            setLoading(false);
            console.log("Some Error Occured :",error)
            if(!error.response)
             {
                  toast.error(`Error:${error.message}`);
            }
            else {
            toast.error(`Error:${error.response.data.message}`);
            setLoading(false);
            setPassword("")
            console.log("Some Error Occured :",error.response.data.message)
            }
        }
    }
    else {
        setLoading(false);
        if(!email || !password)
    {
        toast.error('All the fields are required!');
    }
    else if(!email.includes('@'))
    {
        toast.error("Please enter valid EmailId");
    }
        
      }
    }

    return(<>
            <Input type="text" placeholder="Email" state={email} setState={setEmail} required={true}/>
            <Input type="password" placeholder="Password" state={password} setState={setPassword} required={true}/>
{/* Button */}
            <Button text={loading ? 
            <div>
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow spinner-grow-sm" role="status">
                   <span className="visually-hidden">Loading...</span>
                </div>
              </div>: "Login"} onClick={handleLogin}/>
{/* Button End */}
        </>
    )
}

export default Loginform;