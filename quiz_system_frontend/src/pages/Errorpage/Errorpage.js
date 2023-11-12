import React from "react";
import img404 from "../../images/error-404.png";
import "./errorpage-styles.css";
import { Helmet } from "react-helmet-async";


let Errorpage = ()=>{
    
    return (<div>
        <Helmet>
            <title>404 Error-Page not found</title>
        </Helmet>
        <div className="errordiv">
           <img className="errorimg img-fluid" src={img404} alt="404 Error,Page Not Found"/>
       </div>
       </div>
    )
}


export default Errorpage;