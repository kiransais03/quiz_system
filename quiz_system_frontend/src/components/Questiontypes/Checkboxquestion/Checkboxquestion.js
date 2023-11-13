import React,{useState} from 'react'
import Button from '@mui/joy/Button';
import {toast} from "react-toastify";
import correct from "../../../audio/mixkit-positive-notification-951.wav"
import wrong from "../../../audio/mixkit-system-beep-buzzer-fail-2964.wav"
import noattempts from "../../../audio/mixkit-double-beep-tone-alert-2868.wav"
import "./checkboxquestion-styles.css"

function Checkboxquestion({q,ask,ans,setNextButtondisabled}) {

  let [attempts,setAttempts] = useState(6);

  let [checkedarr,setCheckedarr] = useState([]);


  function boxChecked(val)
  {
    let isChecked = checkedarr.includes(val);
    if(isChecked)
    {
      setCheckedarr(checkedarr.filter((ele,ind)=>{if(ele !== val) {return ele;}}))
    }
    else {
      setCheckedarr([...checkedarr,val])
    }
  }


  function handleCheck () {
    if(checkedarr.length === 0)
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
    if(checkedarr.length !== ans.length)
    {
      toast.error("Entered answer is wrong");
      let audio1 = document.createElement('audio');
       document.body.appendChild(audio1);
       audio1.src=wrong;
       audio1.play();
       return ;
    }
    for(let i=0;i<ans.length;i++)
    {
      if(!ans.includes(checkedarr[i]))
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
       audio1.play();
       return ;
  }

  return (
    <div className='d-flex justify-content-between flex-column'>
    <div style={{width:"100%"}} className='questionandans'>
        <h2>{q}</h2>
    </div>

   <div className='d-flex justify-content-between column-gap-5' style={{width:"100%"}}>
      <div className='d-flex flex-column row-gap-3' style={{width:"50rem"}}>
        <form>
          {ask.map((element,index)=>{
             return (<div key={index} className='checkboxbuttons checkbox-wrapper-48'>
               <label>
                <input type="checkbox" id={index} name="cb" onChange={()=>{boxChecked(element)}}/> {element}
              </label>
             </div>)
          })}
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

export default Checkboxquestion
