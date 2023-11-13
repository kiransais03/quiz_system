import React from 'react'
import "./landingpage-styles.css"
import Button from "../../components/Button/Button";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import Animation from '../../components/Animation/Animation';


function Landingpage() {
    let navigate = useNavigate();

  return (
    <div className='landingmain d-flex justify-content-around flex-wrap align-items-center'>
       
       <div className='d-flex flex-column row-gap-5'>
       <Animation/>
        <div className='d-flex flex-column row-gap-3'>
             <h2>Discover A New Era Of Learning</h2>
             {/* <h1 style={{fontStyle:"italic",alignSelf:"center"}}>"Tiny Learners.com"</h1> */}
             <div class="glitch-wrapper">
                <div class="glitch" data-glitch="Tiny Learners.com">"Tiny Learners.com"</div>
             </div>
      </div>
       <div className='d-flex flex-column row-gap-3'>
            <button type="button" onClick={()=>{navigate('/login')}} className="btn btn-primary">Login</button> <br/>
            <button type="button" onClick={()=>{navigate('/signup')}} className="btn btn-warning">Signup</button>
      </div>
      </div>
    </div>
  )
}

export default Landingpage
