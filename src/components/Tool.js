import React, { useState } from "react";
import "../styles/toll.css";
import ToolTip from "./ToolTip";

function Tool({ children, commit }) {
  const [show, setShow] = useState(false);

  let bgColor = "";
  if (commit == 0) {
    bgColor = "rgb(8, 13, 8)";
  } else if (commit == 1) {
    bgColor = "rgb(2, 107, 2)";
  } else if (commit == 2) {
    bgColor = " rgb(44, 169, 44)";
  } else if (commit == 3) {
    bgColor = "rgb(99, 237, 99)";
  }

  return (
    <>
      <div className="toolOuterContainer" onMouseLeave={() => setShow(false)}>
        <div
          className="tollContainer"
          style={{ backgroundColor: bgColor }}
          onMouseEnter={() => setShow(true)}
        ></div>
        {show ? children : null}
      </div>
    </>
  );
}

export default Tool;
