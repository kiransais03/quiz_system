import React,{useState} from 'react'
import "./singlechoicequestions-styles.css";
import Button from '@mui/joy/Button';
import {toast} from "react-toastify";
import correct from "../../../audio/mixkit-positive-notification-951.wav"
import wrong from "../../../audio/mixkit-system-beep-buzzer-fail-2964.wav"
import noattempts from "../../../audio/mixkit-double-beep-tone-alert-2868.wav"

function Singlechoicequestion({q,ask,ans,setNextButtondisabled}) {

  let [attempts,setAttempts] = useState(6);

  let [radioval,setRadioval] = useState("");


  function handleCheck () {
    if(radioval === "")
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
       toast.error("No attempts left.Limit exceeded,Start test again.Go To Courses");
       let audio1 = document.createElement('audio');
      document.body.appendChild(audio1);
      audio1.src=noattempts;
      audio1.play()
       return ;
    }
    setAttempts((attempts)=>{return attempts-1});
    if(radioval === ans)
    {
       setNextButtondisabled(false);
       toast.success("Answer is correct")
       let audio1 = document.createElement('audio');
       document.body.appendChild(audio1);
       audio1.src=correct;
       audio1.play();
       return ;
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

  return (
    <div className='d-flex justify-content-between flex-column'>
        <div style={{width:"100%"}} className='questionandans'>
            <h2>{q}</h2>
              <br/>
            <h5>{ask}</h5>
        </div>

       <div className='d-flex justify-content-between column-gap-5' style={{width:"100%"}}>
          <div className='d-flex flex-column row-gap-3'>
            <form onChange={(e)=>{setRadioval(e.target.value)}}>
              <div className='radiobuttons'>
                <input type='radio' id="correct" name='validate' value="correct" className='singlechoicetype'/>
                <label htmlFor='correct'>Correct</label>
              </div>
              <div className='radiobuttons'>
                <input type='radio' id="incorrect" name='validate' value="incorrect" className='singlechoicetype'/>
                <label htmlFor='incorrect'>Incorrect</label>
              </div>
              </form>
          </div>

          <div className='checkdiv d-flex flex-column align-items-between'>
            
            <Button style={{padding:"0 2rem",fontSize:"22px"}} onClick={handleCheck}>Check</Button>
            <p style={{color:"blue",textAlign:"center"}}>{attempts} attempts left</p>
          </div>
        </div>

    </div>

 )
}

export default Singlechoicequestion
