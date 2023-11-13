import React, { useState } from 'react'
import Mathfunctions from '../../Mathfunctions/Mathfunctions';
import "./freetypequestion-styles.css";
import Button from '@mui/joy/Button';
import {toast} from "react-toastify";
import correct from "../../../audio/mixkit-positive-notification-951.wav"
// import completed from "../../../audio/mixkit-festive-melody-audio-2985.wav"
import wrong from "../../../audio/mixkit-system-beep-buzzer-fail-2964.wav"
import noattempts from "../../../audio/mixkit-double-beep-tone-alert-2868.wav"

function Freetypequestion({q,ans,setNextButtondisabled}) {

  let [calstring,setCalstring] = useState("");
  let [attempts,setAttempts] = useState(6);


  function handleCheck () {
    if(calstring === "")
    {
      toast.error("Answer should not be empty");
      let audio1 = document.createElement('audio');
      document.body.appendChild(audio1);
      audio1.src=wrong;
      audio1.play()
      return;
    }
    else if(attempts===0)
    {
       toast.error("No attempts limit exceeded,Start test again.Go To Courses");
       let audio1 = document.createElement('audio');
      document.body.appendChild(audio1);
      audio1.src=noattempts;
      audio1.play()
       return ;
    }
    setAttempts((attempts)=>{return attempts-1});
    if(calstring === ans)
    {
       setNextButtondisabled(false);
       toast.success("Answer is correct")
       let audio1 = document.createElement('audio');
       document.body.appendChild(audio1);
       audio1.src=correct;
       audio1.play()
    }
    else {
      toast.error("Entered answer is wrong");
      let audio1 = document.createElement('audio');
       document.body.appendChild(audio1);
       audio1.src=wrong;
       audio1.play();
       return ;
    }
  }

  return (<div className='d-flex'>

    <div style={{width:"100%"}} className='questionandans'>
      <h2>{q}</h2>
       Answer <br/>
      <input type='text' className='freetypeinput' value={calstring} onChange={(e)=>{setCalstring(e.target.value)}}/>
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

export default Freetypequestion
