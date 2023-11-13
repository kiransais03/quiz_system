import React, { useState } from "react";
import "./mathfunctions-styles.css"

const Mathfunctions = ({calstring,setCalstring})=>{
   let elemarr = ['/','*','-','+','^','$','℃','℉','π','√','∛','∽','=','(',')','[',']','±'];

   function clickfunc(e) {

    e.target.style.border="1px solid red"
    let clickeddiv = e.target;
    setTimeout((e)=>{clickeddiv.style.border="1px solid black";console.log("ok")},200);

    let selectedval = e.target.innerText;
    setCalstring(calstring+selectedval);
   }

    return (
    <div>
     <div className="ui">
        {elemarr.map((elem,index,arr)=>{return (<div className={`uielements no${index}`} key={index} onClick={clickfunc}>{elem}</div>)})}
     </div>
    </div>)
}

export default Mathfunctions;