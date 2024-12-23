// This component will break each of the answers down to a single button which will have its own method calls

import { useState } from "react";
import { AnswerType } from "../types";
import { isCorrect } from "../utils/helpers";
// import { wasAnswered } from "../utils/helpers";

function AnswerButton({
  currentPos,
  index,
  answer,
  gridCell,
  correct,
  guesses,
  setGuesses,
  possibleScore,
  totalScore,
  setTotalScore,
  setShowStory,
  wasCorrectlyAnswered,
  setWasCorrectlyAnswered,
  answersSelectedList,
}: //
AnswerType) {
  // UseState which will control the re-rendering of the button background color
  const [answerColor, setAnswerColor] = useState<string>("blue");

  // Set the answers selected when it gets clicked
  const [isAnswered, setisAnswered] = useState<boolean>(false);

  const [selectedQuestion, setSelectedQuestion] =
    useState<Array<Array<boolean>>>(answersSelectedList);

  // Method to determine the grid to place the button into so everything is laid out nicely
  // This will be called by the className on each individual button
  function defineGridCell(gridCell: number) {
    const gridColumn: number = Math.floor(gridCell / 2) + 1;
    const gridRow: number = ((gridCell % 2) + 1) * 2;

    return "answer r" + gridColumn + "c" + gridRow;
  }

  // Method which will control the state changes for the button background color
  // This will be called by each button individually when they are clicked
  // If the gridcell value matches the correct answer: green; otherwise: red
  // If the correct answer is found, show the story by flipping the Dispatch setter flag
  // We need to limit the guess count to 3 so a score always shows up
  // We need to also stop multiple clicks on a button from registering
  function handleClick(response: number, correct: number) {
    if (isAnswered || guesses == 4) return;

    setisAnswered(true);

    updateQuestionStatus(currentPos, index);

    // console.log(answersSelectedList[currentPos][0]);

    if (isCorrect(response, correct)) {
      setAnswerColor("green");
      setShowStory(true);
      setTotalScore(totalScore + possibleScore);
      setWasCorrectlyAnswered(true);
    } else {
      setAnswerColor("red");
      setGuesses(guesses + 1);
    }
  }

  const updateQuestionStatus = (currentPos: number, index: number) => {
    setSelectedQuestion((prevList) =>
      prevList.map((innerArray, i) => {
        if (i === currentPos) {
          return innerArray.map((value, j) => {
            if (j === index) {
              return !value;
            } else {
              return value;
            }
          });
        } else {
          return innerArray;
        }
      })
    );
  };

  // Here we'll check to see if the button was answered correctly or not
  //   If it was, we'll disable all buttons; if not, it'll disable only the one button so it can't trigger again
  return (
    <>
      {wasCorrectlyAnswered && (
        <button
          className={defineGridCell(gridCell)}
          style={{
            backgroundColor: answerColor,
            margin: "5px",
            padding: "15px",
          }}
        >
          {answer}
        </button>
      )}
      {!wasCorrectlyAnswered && (
        <button
          className={defineGridCell(gridCell)}
          style={{
            backgroundColor: answerColor,
            margin: "5px",
            padding: "15px",
          }}
          onClick={() => handleClick(gridCell, correct)}
        >
          {answer}
        </button>
      )}
    </>
  );
}

export default AnswerButton;
