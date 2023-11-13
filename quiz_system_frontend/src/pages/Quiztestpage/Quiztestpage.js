import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '@mui/joy/Button';
import Checkboxquestion from "../../components/Questiontypes/Checkboxquestion/Checkboxquestion"
import Freetypequestion from "../../components/Questiontypes/Freetypequestion/Freetypequestion";
import Fillquestion from "../../components/Questiontypes/Fillquestion/Fillquestion";
import Singlechoicequestion from "../../components/Questiontypes/Singlechoicequestion/Singlechoicequestion";
import Sortimagesquestion from "../../components/Questiontypes/Sortimagesquestion/Sortimagesquestion";
import Sorttextquestion from "../../components/Questiontypes/Sorttextquestion/Sorttextquestion";


function Quiztestpage() {

  let [currentquestionindex,setCurrentquestionindex] = useState(0);

let questionsarr =
[ {"q1":{type : "freetype", q : "Q1.5+4=?",ans : "9"}},
  {"q2":{type : "fill",     q : "Q2.Complete the pattern",ask : [345,"","",350], ans :"calculate"}},
  {"q3":{type : "sortimages",q : "Q3.Sort the elements in correct order",ask : "Match images with names(drag and drop)",ans : ["html","css","react"]}},
  {"q4":{type : "sorttext", q : "Q4.Sort options in correct order",ask :["A.Are","B.How","C.You?"], ans:["B.How","A.Are","C.You?"] }},
  {"q5":{type : "singlechoice",q: "Q5.Choose the right option", ask:"Sun rises in East",ans : "Correct"}},
  {"q6":{type : "checkbox",q : "Q6.Select the numbers that are divisible by 2?",ask : [3,4,12,59,64],ans : [4,12,64]}}
]

const handlePreviousClick = () => {
  if (currentquestionindex > 0) {
    setCurrentquestionindex(currentquestionindex - 1);
  }
};

const handleNextClick = () => {
  if (currentquestionindex < questionsarr.length - 1) {
    setCurrentquestionindex(currentquestionindex + 1);
  }
};

function switchQuestioncomponent (currentquestionindex) {
  

}

  return (
    <div className='d-flex justify-content-center align-items-center'>
    <div style={{backgroundColor:"white",marginTop:"25px",height:"60%",width:"80%"}} className='d-flex justify-content-center align-items-center flex-column'>
     <h3>Lesson Pratice Test</h3>
     <div className='questiondiv d-flex justify-content-between'>
         <div>
          {currentquestionindex && <Freetypequestion/>}
         </div>
         <div>
            <div>Flag for later</div>
            <Button style={{padding:"0 2rem",fontSize:"18px"}}>Check</Button>
            <p style={{color:"blue"}}>6 attempts left</p>
         </div>
     </div>
     <div className='d-flex justify-content-between'>
      <Button onClick={handlePreviousClick}>Previous</Button>
      <Button onClick={handleNextClick}>Next</Button>
     </div>
    </div>
    </div>
  )
}

export default Quiztestpage
