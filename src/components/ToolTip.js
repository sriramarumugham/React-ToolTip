import React, { useState } from "react";

//styles

import "../styles/toolTip.css";

function ToolTip({ direction, commit }) {
  //postion of the tool tip based on the direction
  let top = "30px";
  let left = "-80px";

  switch (direction) {
    case 0:
      top = "30px";
      left = "-80px";
      break;

    case 1:
      top = "-15px";
      left = "-160px";
      break;

    case 2:
      top = "-75px";
      left = "-80px";
      break;
    case 3:
      top = "-10px";
      left = "-4px";
      break;
  }

  return (

       //styles of the hover component based on the direction  props
    <div className="toolTipContainer" style={{ top: top, left: left }}>

     {/* arrows based the direction */}

      {/* top arrow */}
      {direction == 0 && <div className="arrows top "></div>}

      <div className="toolTipBodyContainer">

        {/* left arrow */}
        {direction == 3 && <div className="arrows left "></div>}

        <div className="toolTipBody">
          <p>{commit} committs </p>
        </div>

        {/* right arrow */}
        {direction == 1 && <div className="arrows right "></div>}
      </div>

      {/* bottom arrow */}
      {direction == 2 && <div className="arrows bootom "></div>}
      
    </div>
  );
}

export default ToolTip;
