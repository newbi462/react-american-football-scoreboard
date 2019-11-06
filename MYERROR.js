import React, { useState } from "react"; // to use "useState();"" must add ", { useState }"
import "./App.css";
import BottomRow from "./BottomRow";


function App() {
  const [lionsScore, setLionsScore] = useState(0); // Give these better names, and decide whether you want to pass an initial score into the state hook as the initialValue
  const [tigersScore, setTigersScore] = useState(3);

/*  const scoreGoalTigers = () => {
    setTigersScore(tigersScore + 3);
  };*/

  let scorePoints = (team,cb,score) => {
    cb(team + score);
  };

  return (
    <button onClick={() => scorePoints(setTigersScore,tigersScore,3)} className="awayButtons__fieldGoal">Away Field Goal</button>
  );
}
