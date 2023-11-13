import React from 'react'
import {Link} from "react-router-dom";
import "./breadcrumb-styles.css"

function Breadcrumb({pagesarr,currpage}) {
  return (
      <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
        <ol className="breadcrumb">
        <span>⇨--</span>
          {pagesarr.map((element,index)=>{
            let capitalletter = element.charAt(0).toUpperCase()+element.slice(1);
            return (<li key={index} className="breadcrumb-item">{`${capitalletter} > `}</li>)
          })}
          <li className="breadcrumb-item" aria-current="page"><Link>{currpage.charAt(0).toUpperCase()+currpage.slice(1)}</Link></li>
        </ol>
       </nav>
  )
}

export default Breadcrumb
