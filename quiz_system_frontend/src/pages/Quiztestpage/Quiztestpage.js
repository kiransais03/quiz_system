import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '@mui/joy/Button';
import Checkboxquestion from "../../components/Questiontypes/Checkboxquestion/Checkboxquestion"
import Freetypequestion from "../../components/Questiontypes/Freetypequestion/Freetypequestion";
import Fillquestion from "../../components/Questiontypes/Fillquestion/Fillquestion";
import Singlechoicequestion from "../../components/Questiontypes/Singlechoicequestion/Singlechoicequestion";
import Sortimagesquestion from "../../components/Questiontypes/Sortimagesquestion/Sortimagesquestion";
import Sorttextquestion from "../../components/Questiontypes/Sorttextquestion/Sorttextquestion";
import "./quiztestpage-styles.css"
import { toast } from 'react-toastify';
import completed from "../../audio/mixkit-festive-melody-audio-2985.wav";
import {useDispatch,useSelector} from "react-redux";
import { savedquesAdd, testprogressAdd } from '../../redux/actions/userActionstatus';

function Quiztestpage() {

  let {pathname} = useLocation();
  let dispatch = useDispatch();

  let reduxdata = useSelector((currState)=>{return currState});

  console.log("Reduxdata",reduxdata);
  
  let [currentquestionindex,setCurrentquestionindex] = useState(0);
  
  useEffect(()=>{
    if(localStorage.getItem('updatequesIndex'))
    {
      let tempind = localStorage.getItem('updatequesIndex')
       setCurrentquestionindex(tempind);
       localStorage.removeItem('updatequesIndex')
    }
  },[])

  
  
  let [prevButtondisabled,setPrevButtondisabled] = useState(true);
  
  let [nextButtondisabled,setNextButtondisabled] = useState(true);
  
  let [flagbuttonclicked,setFlagbuttonclicked] = useState(false);


  useEffect(()=>{
    let testobj = {location : pathname,quesno : currentquestionindex}
     localStorage.setItem('testprogress',JSON.stringify(testobj));
     dispatch(testprogressAdd(testobj))
  },[currentquestionindex])


  useEffect(()=>{
    if(localStorage.getItem('savedques'))
     {
        let savedquesobj = JSON.parse(localStorage.getItem('savedques'));
        if(savedquesobj.location === pathname && savedquesobj.pagenos.indexOf(currentquestionindex)!==-1)
        {
          setFlagbuttonclicked(true);
        }
     }
  },[pathname])

  function handleSaveforlater () {
    if(flagbuttonclicked === true)
    {
      setFlagbuttonclicked(false);
      let savedquesobj = JSON.parse(localStorage.getItem('savedques'));
      let index = savedquesobj.pagenos.indexOf(currentquestionindex);
      if(index!==-1)
      {
        savedquesobj.pagenos.splice(index,1);
        console.log(savedquesobj)
        if(savedquesobj.location !== pathname)
       {
        savedquesobj.pagenos = [];
       }
        dispatch(savedquesAdd(savedquesobj));
        let savequesstr = JSON.stringify(savedquesobj);
        localStorage.setItem('savedques',savequesstr)
      }
    }
    else {
      setFlagbuttonclicked(true);
      if(!localStorage.getItem('savedques')) {
      var pagenosarr = [] ;
      }
      else {
        var savedquesobj = JSON.parse(localStorage.getItem('savedques'));
        var pagenosarr = savedquesobj.pagenos;
      }
      pagenosarr.push(currentquestionindex)
      console.log("checking",savedquesobj)
      if(localStorage.getItem('savedques') && savedquesobj.location !== pathname)
      {
       savedquesobj.pagenos = [currentquestionindex];
       savedquesobj.location = pathname;
       console.log("saved",savedquesobj)
      }
      else {
      savedquesobj = {location:pathname,pagenos : pagenosarr }
      }
       console.log(savedquesobj,"pushed")
       dispatch(savedquesAdd(savedquesobj));
      let savequesstr = JSON.stringify(savedquesobj);
      localStorage.setItem('savedques',savequesstr)
    }
  }

  //Questions data array
let questionsarr =
[ {type : "freetype", q : "Q1. 5+4=?",ans : "9"},
  {type : "fill",q : "Q2. Complete the pattern",ask : [345,"","",350], ans :"calculate"},
  {type : "sortimages",q : "Q3. Sort the elements in correct order",ask : "Match images with names(drag and drop)",imagesarr : ["https://s3.amazonaws.com/media-p.slid.es/uploads/657563/images/3629725/react.png","https://ojt.com/wp-content/uploads/2021/08/python-programming-language.png","https://cdn.icon-icons.com/icons2/2108/PNG/512/java_icon_130901.png"],options:['Java','Python','React'],ans: ["React","Python","Java"]},
  {type : "sorttext", q : "Q4. Sort options in correct order",ask :["A.Are","B.How","C.You?"], ans:["B.How","A.Are","C.You?"] },
  {type : "singlechoice",q: "Q5. Choose the right option", ask:"Sun rises in East",ans : "correct"},
  {type : "checkbox",q : "Q6. Select the numbers that are divisible by 2?",ask : [3,4,12,59,64],ans : [4,12,64]}
]


const manageFlagstate = (nextIndex)=>{
  if(localStorage.getItem('savedques')) {
     var pagenosarr = JSON.parse(localStorage.getItem('savedques')).pagenos;
     if(pagenosarr.indexOf(nextIndex)!==-1)
     {
       setFlagbuttonclicked(true);
     }
     else {
      setFlagbuttonclicked(false);
     }
  }
}

const handlePreviousClick = () => {
  if (currentquestionindex > 0) {
    setCurrentquestionindex(currentquestionindex - 1);
    manageFlagstate(currentquestionindex - 1);
  }
  if((currentquestionindex-1)===0)
  {
    setPrevButtondisabled(true);
  }
  if((currentquestionindex-1)!==questionsarr.length-1)
  {
    setNextButtondisabled(false);
  }
};

const handleNextClick = () => {
  if (currentquestionindex < questionsarr.length - 1) {
    setCurrentquestionindex(currentquestionindex + 1);
    manageFlagstate(currentquestionindex + 1);
    setNextButtondisabled(true);
  }
  if((currentquestionindex+1)>0)
  {
    setPrevButtondisabled(false);
  }
  if((currentquestionindex+1) === questionsarr.length)
  {
    setNextButtondisabled(true);
    toast.success("Successfully completed Lesson Practice Test");
    localStorage.removeItem('testprogress');
    let audio1 = document.createElement('audio');
       document.body.appendChild(audio1);
       audio1.src=completed;
       audio1.play();
  }
};

function switchQuestioncomponent (currentquestionindex) {
   switch(questionsarr[currentquestionindex].type)
   {
    case "freetype" : return <Freetypequestion setNextButtondisabled={setNextButtondisabled} q={questionsarr[currentquestionindex].q} ans={questionsarr[currentquestionindex].ans} />
    case "fill"  : return <Fillquestion setNextButtondisabled={setNextButtondisabled} q={questionsarr[currentquestionindex].q} ask={questionsarr[currentquestionindex].ask} ans={questionsarr[currentquestionindex].ans}/>
    case "sortimages" : return <Sortimagesquestion setNextButtondisabled={setNextButtondisabled} imagesarr={questionsarr[currentquestionindex].imagesarr} options={questionsarr[currentquestionindex].options} q={questionsarr[currentquestionindex].q} ask={questionsarr[currentquestionindex].ask} ans={questionsarr[currentquestionindex].ans}/>
    case "sorttext" : return<Sorttextquestion setNextButtondisabled={setNextButtondisabled} q={questionsarr[currentquestionindex].q} ask={questionsarr[currentquestionindex].ask} ans={questionsarr[currentquestionindex].ans}/>
    case "singlechoice" : return <Singlechoicequestion setNextButtondisabled={setNextButtondisabled} q={questionsarr[currentquestionindex].q} ask={questionsarr[currentquestionindex].ask} ans={questionsarr[currentquestionindex].ans}/>
    case "checkbox" : return <Checkboxquestion setNextButtondisabled={setNextButtondisabled} q={questionsarr[currentquestionindex].q} ask={questionsarr[currentquestionindex].ask} ans={questionsarr[currentquestionindex].ans}/>
    default : return "wrong question type";
   }
}

  return (
    <div className='d-flex justify-content-center align-items-center' >

    <div className='questionblock d-flex flex-column row-gap-3' style={{maxWidth:"75vw"}}>

       <div className='headingline'>
          <h4 style={{textDecoration:"underline"}} className='heading1'>Lesson Pratice</h4>
          <div style={{marginLeft:"auto",cursor:"pointer"}} className='heading2' onClick={handleSaveforlater}><button className='flagbutton' style={flagbuttonclicked?{backgroundColor:"orange"}:{backgroundColor:"white"}}>🏳️</button>Flag for later</div>
       </div>

     <div className='questiondiv d-flex justify-content-between column-gap-5'>
         {/* <div> */}
           {currentquestionindex>=0 && switchQuestioncomponent(currentquestionindex)}
         {/* </div> */}
     </div>

     <div className='d-flex justify-content-between'>
      <Button onClick={handlePreviousClick} disabled={prevButtondisabled}>Previous</Button>
      <Button onClick={handleNextClick} disabled={nextButtondisabled}>{(currentquestionindex+1)===questionsarr.length ?"Finish":"Next"}</Button>
     </div>
    </div>

  </div>
  )
}

export default Quiztestpage
