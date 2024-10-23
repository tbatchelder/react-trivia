import { useState } from "react";

function StartGame() {
  const [showme, setShowMe] = useState(1);

  function startGame() {
    setShowMe(0);
  }

  return (
    <div className="container">
      <div className="center">
        <button
          className="start visible"
          onClick={() => startGame()}
          style={{ visibility: showme ? "visible" : "hidden" }}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}

export default StartGame;
