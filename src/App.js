//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react"; // to use "useState();"" must add ", { useState }"
import "./App.css";
import BottomRow from "./BottomRow";


// Lions Score
//let lionsScore = 32;

// Tigers Score
//let tigersScore = 32;

// Touch down = +7
// Field Goal = +3


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [lionsScore, setLionsScore] = useState(0); // Give these better names, and decide whether you want to pass an initial score into the state hook as the initialValue
/*  const scoreTouchdownLions = () => {
    setLionsScore(lionsScore + 7);
  };
  const scoreGoalLions = () => {
    setLionsScore(lionsScore + 3);
  };*/


  const [tigersScore, setTigersScore] = useState(3);
/*  const scoreTouchdownTigers = () => {
    setTigersScore(tigersScore + 7);
  };
  const scoreGoalTigers = () => {
    setTigersScore(tigersScore + 3);
  };*/


  let scorePoints = (team,cb,score) => {
    cb(team + score);
  };

  //If I try and do a paramiter based I get "Error: Too many re-renders. React limits the number of renders to prevent an infinite loop."*/
  // ok I am just dumb had them in the wrong order :( x,y,z, != y,x,z


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionsScore}</div>//was 32
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigersScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => scorePoints(lionsScore,setLionsScore,7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => scorePoints(lionsScore,setLionsScore,3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => scorePoints(tigersScore,setTigersScore,7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => scorePoints(tigersScore,setTigersScore,3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        {/*MUST CALL AS ANOYMUS FUNTION TO PREVENT LOOP*/}
        </div>
      </section>
    </div>
  );
}

export default App;
