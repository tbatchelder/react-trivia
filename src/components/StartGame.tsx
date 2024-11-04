import { useState } from "react";
import Questions from "./Questions";

// This creates a Start Game button
// Upon clicking, it will hide itself and display the first of the questions
function StartGame() {
  // Holds the state of the Start button - True = shown; False = hidden
  const [showme, setShowMe] = useState(1);

  // When called, flips the state of the Start button
  function startGame() {
    setShowMe(0);
  }

  return (
    <>
      {/* The div style is used to control the visibility of the button by make it part of the DOM or not */}
      <div className="center" style={{ display: showme ? "block" : "none" }}>
        <button className="start" onClick={() => startGame()}>
          Start Game
        </button>
      </div>
      {/* Below is the question block - it is controlled in the same manner as the Start button but in reverse order */}
      <div
        className="questionBox"
        style={{ display: showme ? "none" : "block" }}
      >
        <Questions />
      </div>
    </>
  );
}

export default StartGame;
