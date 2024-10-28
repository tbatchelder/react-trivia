import { useState } from "react";
import Questions from "./Questions";

function StartGame() {
  const [showme, setShowMe] = useState(1);

  function startGame() {
    setShowMe(0);
  }

  return (
    <>
      <div className="center" style={{ display: showme ? "block" : "none" }}>
        <button className="start" onClick={() => startGame()}>
          Start Game
        </button>
      </div>
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
