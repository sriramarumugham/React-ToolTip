import React, { useState } from "react";

//styles

import "../styles/toll.css";

function Tool({ children, commit }) {
  const [show, setShow] = useState(false);

  let bgColor = "";

  //background color for each tool

  switch (commit) {
    case 0:
      bgColor = "rgb(8, 13, 8)";
      break;

    case 1:
      bgColor = "rgb(2, 107, 2)";
      break;

    case 2:
      bgColor = " rgb(44, 169, 44)";
      break;
    case 3:
      bgColor = "rgb(99, 237, 99)";
      break;
  }

  return (
    <>
      {/* mouse even handling */}
      <div className="toolOuterContainer" onMouseLeave={() => setShow(false)}>

        <div
 
          className="tollContainer"
          style={{ backgroundColor: bgColor }}
          onMouseEnter={() => setShow(true)}>

        </div>
        {/* on the hover, over the tool the tool tip will be visible */}
        
        {show ? children : null}

      </div>

    </>
  );
}

export default Tool;
