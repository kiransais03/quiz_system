import React,{useState} from 'react';
import Button from '@mui/joy/Button';
import {toast} from "react-toastify";
import correct from "../../../audio/mixkit-positive-notification-951.wav"
import wrong from "../../../audio/mixkit-system-beep-buzzer-fail-2964.wav"
import noattempts from "../../../audio/mixkit-double-beep-tone-alert-2868.wav"
import "./sorttextquestion-styles.css"

function Sorttextquestion({q,ans,ask,setNextButtondisabled}) {

  let [attempts,setAttempts] = useState(6);

  let [checkedarr,setCheckedarr] = useState([]);

  function audioplayer (song) {
    let audio1 = document.createElement('audio');
    document.body.appendChild(audio1);
    audio1.src=song;
    audio1.play()
  }

  function getCurrentorder () {
    let elemCollection = document.getElementsByClassName('item');
    let arr = [];
    for(let x of elemCollection)
    {
      arr.push(x.innerText);
    }
    console.log(arr)
    return arr;
  }


  function handleCheck () {
    let currOderarr = getCurrentorder();
    if(attempts===0)
    {
       toast.error("No attempts left.Limit exceeded,Start test again.Go To Courses");
       audioplayer(noattempts)
       return ;
    }
    setAttempts((attempts)=>{return attempts-1});
    for(let i=0;i<ans.length;i++)
    {
      if(ans[i]!==currOderarr[i])
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


  //DOM event functions
  function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.className);
}

function drop(event) {
  event.preventDefault();
    const fetchData = event.dataTransfer.getData("text");
 let dragelem = document.getElementsByClassName(fetchData)[0];
 //swapping innerText
      let temptext=event.target.innerText;
      console.log(temptext,dragelem);
      event.target.innerText=dragelem.innerText;
      dragelem.innerText=temptext;
      //swapping classNames
      let tempcurrclass=event.target.className;
      event.target.className=dragelem.className;
      dragelem.className=tempcurrclass;
}

  return (
    <div>
     <div className='d-flex justify-content-between flex-column'>
    <div style={{width:"100%"}} className='questionandans'>
        <h2>{q}</h2>
    </div>

   <div className='d-flex justify-content-between column-gap-5' style={{width:"100%"}}>
      <div className='sortelementsdiv d-flex flex-column row-gap-3' style={{width:"50rem"}}>
          {ask.map((element,index)=>{
             return (
              <div class="item" key={index} id={index} draggable='true' onDragStart={drag} onDrop={drop} onDragOver={allowDrop}>{element}</div>  
             )
          })}

      </div>

      <div className='checkdiv d-flex flex-column align-items-between'>
        
        <Button style={{padding:"0 2rem",fontSize:"22px"}} onClick={handleCheck}>Check</Button>
        <p style={{color:"blue",textAlign:"center"}}>{attempts} attempts left</p>
      </div>
    </div>

</div>
    </div>
  )
}

export default Sorttextquestion
