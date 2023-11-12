import React from "react";
import { NavLink } from "react-router-dom";
import "./navlinks_centre-styles.css"

function Navlinks_centre ({className,toaddress,iconcomponent,linkname,}) {

    return ( <div className={className}>
    <NavLink to={toaddress} style={{color:"black",textDecoration:"none"}}>
        <div className="d-flex justify-content-center align-items-center flex-column" style={{height:"100%"}}>
            <div> {iconcomponent} </div>
        </div>
            <div>{linkname}</div>
    </NavLink>

</div>)
}


export default Navlinks_centre;