import React from 'react'
import {NavLink,Link} from "react-router-dom";
import styles from "./navbar-styles.module.css";
import {AiOutlineAppstore} from "react-icons/ai";
import {BsFillFileEarmarkPlayFill} from "react-icons/bs";
import {SiSololearn} from "react-icons/si";
import {GrAchievement} from "react-icons/gr";
import Navlinks_centre from '../Navlinks_centre/Navlinks_centre';
import logo from "../../images/tinylearnerslogo.png"
import Navlinks_right from '../Navlinks_right/Navlinks_right';
import Flagmenu from '../Flagmenu/Flagmenu';

function Navbar() {
  return (
    <div className={`${styles.navbar} d-flex justify-content-between align-items-center flex-wrap flex-row`}>
{/* Navlinks left */}
      <div className='navlinks_left'>
         <Link to="/">
           <img src={logo} alt="logo" style={{borderRadius:"20px",width:"13rem",height:"5rem"}}/>
        </Link> 
      <div style={{padding:"10px"}}><Flagmenu/></div>
      </div>
{/* Navlinks Centre */}
      <div className={`${styles.navlinks_centre} d-flex justify-content-center flex-wrap flex-row column-gap-4`} >
        <Navlinks_centre className="dashboard" toaddress="/dashboard" iconcomponent={<AiOutlineAppstore style={{width:"30px",height:"30px"}}/>} linkname="Dashboard"/>
        <Navlinks_centre className="courses" toaddress="/courses" iconcomponent={<BsFillFileEarmarkPlayFill style={{width:"30px",height:"30px"}}/>} linkname="Courses"/>
        <Navlinks_centre className="learninglab" toaddress="/learninglab" iconcomponent={<SiSololearn style={{width:"30px",height:"30px"}}/>} linkname="Learning Lab"/>
        <Navlinks_centre className="achievements" toaddress="/achievements" iconcomponent={<GrAchievement style={{width:"30px",height:"30px"}}/>} linkname="Achievements"/>
      </div>
 {/* Navlinks Right */}
      <div className='navlinks_right'>
         <Navlinks_right/>
      </div>
    </div>
  )
}

export default Navbar