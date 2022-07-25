import React from "react";
import "./PageHeader.css";



const PageHeader=({title,color})=>{
    return(
        <div className='teamheader-container flexbox' style={{backgroundColor:color}}>
          <h2>{title}</h2>
         
        </div>
    )
}

export default PageHeader;