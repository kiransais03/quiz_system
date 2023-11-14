import React,{useState} from 'react';
import Button from '@mui/joy/Button';
import {toast} from "react-toastify";
import correct from "../../../audio/mixkit-positive-notification-951.wav"
import wrong from "../../../audio/mixkit-system-beep-buzzer-fail-2964.wav"
import noattempts from "../../../audio/mixkit-double-beep-tone-alert-2868.wav"
import "./sortimagesquestion-styles.css"

function Sortimagesquestion({q,ans,ask,imagesarr,options,setNextButtondisabled}) {

  let [attempts,setAttempts] = useState(6);

  let [checkedarr,setCheckedarr] = useState([]);

  function audioplayer (song) {
    let audio1 = document.createElement('audio');
    document.body.appendChild(audio1);
    audio1.src=song;
    audio1.play()
  }

  function getCurrentorder () {
    let arr = [];
    for(let i=0;i<3;i++)
    {
      try {
      let elemText = document.getElementsByClassName('imagenamedrop')[i].children[0].innerText
      console.log(elemText)
      arr.push(elemText);
      }
      catch(error) {
        console.log(error);
        return false;
      }
    }
    console.log(arr)
    return arr;
  }


  function handleCheck () {
    let currOderarr = getCurrentorder();
    if(currOderarr===false) {
      toast.error("All the names should be matched.");
       audioplayer(wrong)
       return ;
    }
    else if(attempts===0)
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
        toast.error("Matched answer is wrong,Retry");
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
  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  return (
    <div>
    <div className='d-flex justify-content-between flex-column'>
   <div style={{width:"100%",fontSize:"20px"}} className='questionandans'>
       <h2>{q}</h2>
       {ask}
   </div>

  <div className='d-flex justify-content-between column-gap-5' style={{width:"100%"}}>
    <div className='d-flex justify-content-between flex-column row-gap-3' >
     <div className='sortelementsdiv d-flex column-gap-3'>
         {options.map((element,index)=>{
            return (
             <div class="imageitems" key={index} id={`divi${index}`} onDrop={drop} onDragOver={allowDrop} ><span className='spanelements' id={`spani${index}`} draggable='true' onDragStart={drag}>{element}</span></div>  
            )
         })}
       </div> 
        <div className='d-flex flex-column row-gap-3'>
          {imagesarr.map((element,index)=>{
            return (
              <div key={index} className='d-flex imageandname'>
               <img class="images" width="80px" height="50px" key={index} id={`img${index}`}  src={element}/>  
               <div className='imagenamedrop' id={`divj${index}`} onDrop={drop} onDragOver={allowDrop} style={{width:"100%",height:"50px",textAlign:"center"}}></div>
             </div>
            )
         })}

     </div>
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

export default Sortimagesquestion
