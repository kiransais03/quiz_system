import React from 'react'
import "./learninglabpage-styles.css"
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { useLocation } from 'react-router-dom'
import Testinprogresscard from '../../components/Testinprogresscard/Testinprogesscard';
import {useSelector} from "react-redux";

function Learninglabpage() {

    let testprogress = useSelector((currState)=>{return currState.testprogress});

    let location = useLocation();
    let locationarr = location.pathname.split('/');
    let currpageLocation = locationarr[locationarr.length-1];
    let newLocationarr = locationarr.slice(1,locationarr.length-1)
    console.log(location,locationarr,currpageLocation,newLocationarr)

  return (
    <div className='learninglab' style={{backgroundColor:"whitesmoke",marginTop:"25px",height:"80vh"}}>
     <Breadcrumb pagesarr={newLocationarr} currpage={currpageLocation}/>
     <hr/>
     <h2 className='headingtest'>Practice Tests Inprogress :</h2>
     <hr/>
    {localStorage.getItem('testprogress')?<Testinprogresscard testprogress={testprogress}/>:"No tests are incomplete"}
    </div>
  )
}

export default Learninglabpage;
