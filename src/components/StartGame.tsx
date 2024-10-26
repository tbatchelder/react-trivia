import { useState } from "react";

function StartGame() {
  const [showme, setShowMe] = useState(1);

  function startGame() {
    setShowMe(0);
  }

  return (
    <div className="center" style={{ display: showme ? "block" : "none" }}>
      <button className="start" onClick={() => startGame()}>
        Start Game
      </button>
    </div>
  );
}

export default StartGame;
