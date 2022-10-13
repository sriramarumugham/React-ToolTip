import React, { useState } from "react";
import "../styles/toolTip.css";


function ToolTip({direction , commit}) {
  let top="30px";
  let left="-80px";
  
  if(direction===1){
    top="-15px";
    left="-160px";
  }
  else if(direction===2){
    top="-75px";
    left="-80px";
  }
  else if(direction===3){
    top="-10px";
    left="-4px";
  }
  
  return (
    <div className="toolTipContainer" style={{top:top , left:left}}
    >
      {direction==0 && <div className="arrows top "></div> } 
      <div className="toolTipBodyContainer">
      {direction==3 &&  <div className="arrows left "></div> }
       
        <div className="toolTipBody">
          <p>{commit} committs </p>
        </div>
        {direction==1 &&  <div className="arrows right "></div>}
      </div>
      {direction==2 &&  <div className="arrows bootom "></div> }
     
    </div>
  );

}

export default ToolTip;
