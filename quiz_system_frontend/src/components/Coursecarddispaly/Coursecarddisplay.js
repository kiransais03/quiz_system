import React from 'react';
import Coursecard from '../Coursecard/Coursecard';

function Coursecarddisplay() {

    let coursesarr = ['SaxonMath','DrillTeam','Mathematics','Science','Economics','Biology','Ancient History','Mythology','Geography','FunGames']

  return (
    <div className='d-flex flex-wrap row-gap-3 column-gap-4 justify-content-center'>
      {coursesarr.map((element,index)=>{
        return (<Coursecard key={index} coursename={element} type={"Courses"}/>)
      })}
    </div>
  )
}

export default Coursecarddisplay
