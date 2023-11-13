import React,{useEffect, useState} from 'react'
import Button from '@mui/joy/Button';
import {toast} from "react-toastify";
import correct from "../../../audio/mixkit-positive-notification-951.wav"
import wrong from "../../../audio/mixkit-system-beep-buzzer-fail-2964.wav"
import noattempts from "../../../audio/mixkit-double-beep-tone-alert-2868.wav"
import Mathfunctions from '../../Mathfunctions/Mathfunctions';
import "./fillquestion-styles.css"

function Fillquestion({q,ask,ans,setNextButtondisabled}) {

  let [ansobj,setAnsobj] = useState({});


  let [attempts,setAttempts] = useState(6);

  let [focusedBlank,setFocusedBlank] = useState("");

  let [calstring,setCalstring]=useState("");


  // useEffect(()=>{
  //   console.log("focused",calstring,focusedBlank)
  //   if(focusedBlank>=0 && focusedBlank<ask.length)
  //   {
  //     console.log("hih")
  //     let str = calstring;
  //     setAnsobj((currState)=>{return({...currState,[focusedBlank]:calstring})})
  //     setCalstring("")
  //     console.log(ansobj,"ansobj")
  //   }

  // },[calstring])


  function handleCheck () {

    for(let x in ansobj)
    {
      if(!ansobj[x])
      {
        toast.error("Answer should not be empty");
        let audio1 = document.createElement('audio');
        document.body.appendChild(audio1);
        audio1.src=wrong;
        audio1.play()
        return;
      }
    }
    if(attempts===0)
    {
       toast.error("No attempts left.Limit exceeded,Start test again.Go To Courses");
       let audio1 = document.createElement('audio');
      document.body.appendChild(audio1);
      audio1.src=noattempts;
      audio1.play()
       return ;
    }
    setAttempts((attempts)=>{return attempts-1});
    for(let x in ansobj)
    { 
      if(ans !=="calculate" || ansobj[x]<=ask[0] || ansobj[x]>=ask[ask.length-1])
      {
        toast.error("Entered answer is wrong");
        let audio1 = document.createElement('audio');
         document.body.appendChild(audio1);
         audio1.src=wrong;
         audio1.play();
         return ;
      }
    }
      setNextButtondisabled(false);
       toast.success("Answer is correct")
       let audio1 = document.createElement('audio');
       document.body.appendChild(audio1);
       audio1.src=correct;
       audio1.play()
       return ;
  }


  const handleChange = (e)=>{
    let {id,value} = e.target;
    setAnsobj((currState)=>{
      return ({...currState,[id]:value})
    })
  }


  return (
    <div className='d-flex'>

    <div style={{width:"100%"}} className='questionandans'>
      <h2>{q}</h2>
       Answer <br/>
       {ask.map((elem,index)=>{
          if(elem ==="")
          {
            return (<input type='text' onFocus={()=>{console.log(index,"ind");setFocusedBlank(index)}} onBlur={()=>{setFocusedBlank("")}} key={index} id={index} className='filltypeinput' value={ansobj[index]} onChange={handleChange}/>)
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
