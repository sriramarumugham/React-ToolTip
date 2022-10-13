//components
import { Tool, ToolTip, Direction } from "./index";
import { useState } from "react";

//datas
import commits from "../data";

// styles
import "../styles/App.css";


//render component
function renderToolsAndTips(direction) {

  let list = [];

  for (let i = 0; i < commits.length; i++) {

    list.push(

      <Tool commit={commits[i].commits}>
        <ToolTip direction={direction} commit={commits[i].commits} />{" "}
      </Tool>

    );

  }
  return list;
}

//App

function App() {

  const [direction, setDirection] = useState(0);

  return (

    <div className="App">

      {/* controll components */}

      <div id="controlls">
        
        <Direction setDirection={setDirection} direction={direction} />

      </div>

      {/* tools components */}

      <div id="toolsContainer">

        {/* rendered list of tools */}

        {renderToolsAndTips(direction)}
        
      </div>

    </div>

  );
}

export default App;
