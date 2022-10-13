import { useState } from "react";
import "../styles/App.css";

import { Tool, ToolTip, Direction } from "./index";

function renderToolsAndTips(direction) {
  const commits = [
    { id: 1, commits: 2 },
    { id: 2, commits: 2 },
    { id: 3, commits: 2 },
    { id: 4, commits: 0 },
    { id: 5, commits: 3 },
    { id: 6, commits: 1 },
    { id: 7, commits: 3 },
    { id: 8, commits: 1 },
    { id: 9, commits: 2 },
    { id: 10, commits: 0 },
    { id: 11, commits: 3 },
    { id: 12, commits: 3 },
    { id: 13, commits: 2 },
    { id: 14, commits: 3 },
    { id: 15, commits: 0 },
    { id: 16, commits: 3 },
    { id: 17, commits: 1 },
    { id: 18, commits: 2 },
    { id: 19, commits: 1 },
    { id: 20, commits: 2 },
    { id: 21, commits: 1 },
    { id: 22, commits: 1 },
    { id: 23, commits: 1 },
    { id: 24, commits: 1 },
    { id: 25, commits: 1 },
    { id: 26, commits: 3 },
    { id: 27, commits: 1 },
    { id: 28, commits: 3 },
    { id: 29, commits: 0 },
    { id: 30, commits: 3 },
    { id: 31, commits: 2 },
    { id: 32, commits: 0 },
    { id: 33, commits: 3 },
    { id: 34, commits: 3 },
    { id: 35, commits: 0 },
  ];
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

function App() {
  const [direction, setDirection] = useState(0);
  return (
    <div className="App">
      <div id="controlls">
        <Direction setDirection={setDirection} direction={direction} />
      </div>

      <div id="toolsContainer">{renderToolsAndTips(direction)}</div>
    </div>
  );
}

export default App;
