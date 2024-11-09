// This component will break each of the answers down to a single button which will have its own method calls

import { useState } from "react";

// This interface gives the Types of variable being passed from AnswerBlock, again using : Props
interface Props {
  answer: string;
  gridCell: number;
  correct: number;
}

function AnswerButton({ answer, gridCell, correct }: Props) {
  // Method to determine the grid to place the button into so everything is laid out nicely
  // This will be called by the className on each individual button
  function defineGridCell(gridCell: number) {
    switch (gridCell) {
      case 0:
        return "answer r1c2";
      case 1:
        return "answer r1c4";
      case 2:
        return "answer r2c2";
      case 3:
        return "answer r2c4";
    }
  }

  // List of background colors for the buttons
  const color = ["blue", "green", "red"];

  // UseState which will control the re-rendering of the button background color
  const [answerColor, setAnswerColor] = useState(color[0]);

  // Method which will control the state changes for the button background color
  // This will be called by each button individually when they are clicked
  // If the gridcell value matches the correct answer: green; otherwise: red
  function handleClick(response: number) {
    if (response == correct) {
      setAnswerColor(color[1]);
    } else {
      setAnswerColor(color[2]);
    }
  }

  return (
    <>
      <button
        className={defineGridCell(gridCell)}
        style={{
          backgroundColor: answerColor,
          margin: "5px",
          padding: "15px",
        }}
        onClick={() => handleClick(gridCell)}
      >
        {answer}
      </button>
    </>
  );
}

export default AnswerButton;
