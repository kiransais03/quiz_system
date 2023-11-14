import React from 'react'
// import "./coursespage-styles.css"
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { useLocation } from 'react-router-dom'
import Lessonspagedisplay from "../../components/Lessonspagedisplay/Lessonspagedisplay"
import Quiztestpage from '../Quiztestpage/Quiztestpage'

function Lessonspage() {

    let location = useLocation();
    let locationarr = location.pathname.split('/');
    let currpageLocation = locationarr[locationarr.length-1];
    let newLocationarr = locationarr.slice(1,locationarr.length-1)
    console.log(location,locationarr,currpageLocation,newLocationarr)
  return (
    <div style={{backgroundColor:"whitesmoke",marginTop:"25px",height:"80vh",overflow:"scroll"}}>
     <Breadcrumb pagesarr={newLocationarr} currpage={currpageLocation}/>
     <hr/>
     {locationarr.length>=4 ?<Quiztestpage/> :<Lessonspagedisplay currpageLocation={currpageLocation}/>}
    </div>
  )
}

export default Lessonspage
