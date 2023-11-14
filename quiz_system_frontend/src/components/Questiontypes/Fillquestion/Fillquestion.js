import React,{useEffect, useState} from 'react'
import Button from '@mui/joy/Button';
import {toast} from "react-toastify";
import correct from "../../../audio/mixkit-positive-notification-951.wav"
import wrong from "../../../audio/mixkit-system-beep-buzzer-fail-2964.wav"
import noattempts from "../../../audio/mixkit-double-beep-tone-alert-2868.wav"
import Mathfunctions from '../../Mathfunctions/Mathfunctions';
import "./fillquestion-styles.css"

function Fillquestion({q,ask,ans,setNextButtondisabled}) {

  let [ansobj,setAnsobj] = useState("");

  let [attempts,setAttempts] = useState(6);

  let [focusedBlank,setFocusedBlank] = useState("");

  function audioplayer (song) {
    let audio1 = document.createElement('audio');
    document.body.appendChild(audio1);
    audio1.src=song;
    audio1.play()
  }

  let [calstring,setCalstring]=useState("");

  // console.log(calstring,"fron math functions")

  function handleCheck () {

    for(let x in ansobj)
    {
      if(!ansobj[x])
      {
        toast.error("Answer should not be empty");
        audioplayer(wrong)
        return;
      }
    }
    if(attempts===0)
    {
       toast.error("No attempts left.Limit exceeded,Start test again.Go To Courses");
       audioplayer(noattempts)
       return ;
    }
    setAttempts((attempts)=>{return attempts-1});
    for(let x in ansobj)
    { 
      if(ans !=="calculate" || ansobj[x]<=ask[0] || ansobj[x]>=ask[ask.length-1] || ansobj[0]===ansobj[1])
      {
        toast.error("Entered answer is wrong");
        audioplayer(wrong)
         return ;
      }
    }
      setNextButtondisabled(false);
       toast.success("Answer is correct")
       audioplayer(correct)
       return ;
  }


  const handleChange = (e)=>{
    let {id,value} = e.target;
    if(ansobj==="")
    {
      setAnsobj({[id]:value})
    }
    else {
    setAnsobj((currState)=>{
      return ({...currState,[id]:value})
    })
  }
  }


  return (
    <div className='d-flex'>

    <div style={{width:"100%"}} className='questionandans'>
      <h2>{q}</h2>
       Answer <br/>
       {ask.map((elem,index)=>{
          if(elem ==="") {
          //  onBlur={()=>{setFocusedBlank("")}}
            return (<input type='text'  key={index} id={index} onFocus={()=>{console.log(index,"ind");setFocusedBlank(index)}} className='filltypeinput' value={ansobj[index]} onChange={handleChange}/>)
          }
          else {
            return(<h3 key={index} style={{display:"inline"}}>{elem}</h3>)
          }
       })}
      <h5 style={{marginTop:"10px"}}>[+] Math Functions</h5>
      <Mathfunctions calstring={calstring} setCalstring={setCalstring}/>
    </div>

    <div className='checkdiv d-flex flex-column align-items-between'>
      <br/><br/><br/>
    <Button style={{padding:"0 2rem",fontSize:"22px"}} onClick={handleCheck}>Check</Button>
    <p style={{color:"blue",textAlign:"center"}}>{attempts} attempts left</p>
 </div>
 </div>
  )
}

export default Fillquestion
