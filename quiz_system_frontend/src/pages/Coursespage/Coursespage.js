import React from 'react'
import "./coursespage-styles.css"
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { useLocation } from 'react-router-dom'
import Coursecard from '../../components/Coursecard/Coursecard'
import Coursecarddisplay from '../../components/Coursecarddispaly/Coursecarddisplay'
import Flagmenu from '../../components/Flagmenu/Flagmenu'

function Coursespage() {

    let location = useLocation();
    let locationarr = location.pathname.split('/');
    let currpageLocation = locationarr[locationarr.length-1];
    let newLocationarr = locationarr.slice(1,locationarr.length-1)
    console.log(location,locationarr,currpageLocation,newLocationarr)
  return (
    <div style={{backgroundColor:"whitesmoke",marginTop:"25px",height:"80vh",overflow:"scroll"}}>
     <Breadcrumb pagesarr={newLocationarr} currpage={currpageLocation}/>
     <hr/>
     <Coursecarddisplay/>
    </div>
  )
}

export default Coursespage
