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
}: // questionsAnswered,
//
AnswerType) {
  // UseState which will control the re-rendering of the button background color
  const [answerColor, setAnswerColor] = useState<string>("blue");

  // Set the answers selected when it gets clicked
  const [isAnswered, setisAnswered] = useState<boolean>(false);

  const [selectedQuestion, setSelectedQuestion] =
    useState<boolean[]>(answersSelectedList);

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
    // If any button is clicked, set the 4th index to true to indicate that an answer was selected
    // updateQuestionStatus(currentPos, 4);
    // Update the actual button that was selected
    updateQuestionStatus(currentPos, index);

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

  function updateQuestionStatus(currentPos: number, index: number) {
    const tempList: Array<boolean> = answersSelectedList;
    // let tempList: Array<Array<boolean>> = answersSelectedList;
    // console.log(tempList);
    tempList[currentPos * 4 + index] = true;
    // console.log(tempList);
    setSelectedQuestion(tempList);
    console.log(answersSelectedList);
  }

  // function checkPreviously() {
  // console.log(answersSelectedList[currentPos]);
  // if (answersSelectedList[currentPos + index]) {
  //   setAnswerColor("red");
  // }
  // }
  // console.log(questionsAnswered, "hi");
  // checkPreviously();
  // console.log(answersSelectedList[0]);
  // Here we'll check to see if the button was answered correctly or not
  //   If it was, we'll disable all buttons; if not, it'll disable only the one button so it can't trigger again
  return (
    <>
      {/* wasCorrectlyAnswered */}
      {answersSelectedList[currentPos * 4 + index] && index != correct && (
        <button
          className={defineGridCell(gridCell)}
          style={{
            backgroundColor: "red",
            margin: "5px",
            padding: "15px",
          }}
        >
          {answer}
        </button>
      )}
      {!answersSelectedList[currentPos * 4 + index] && index != correct && (
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
      {!answersSelectedList[currentPos * 4 + index] && index == correct && (
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
