import React from 'react';
import Lessonscard from '../Lessonscard/Lessonscard';

function Lessonspagedisplay({currpageLocation}) {

    let lessonsarr = ['Lesson1','Lesson2','Lesson3','Lesson4','Lesson5','Lesson6','Lesson7','Lesson8','Lesson9','Lesson10',]
    console.log("lessongs fsafas")
  return (
    <div className='d-flex flex-wrap row-gap-3 column-gap-4 justify-content-center'>
      {lessonsarr.map((element,index)=>{
        return (<Lessonscard key={index} lessonname={element} type={currpageLocation}/>)
      })}
    </div>
  )
}

export default Lessonspagedisplay;
