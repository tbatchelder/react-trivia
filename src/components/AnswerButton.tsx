// This component will break each of the answers down to a single button which will have its own method calls

import { useState } from "react";
import { AnswerType } from "../types";
import { isCorrect } from "../utils/helpers";

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
  answersSelectedList,
}: AnswerType) {
  // UseState which will control the button background color
  const [answerColor, setAnswerColor] = useState<string>("blue");

  // Usestate which will allow us to update the answers selected list as we haven't been able to find any other way
  // to update this; every attempt has resulted in "I can't find the index of any inner list"
  // So, while we do have the selectedQuestion varialbe, we are not using it as we are using the main list since attempts
  //   to use this variable have not met with great success
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
  // Reaction of the buttons is now controlled by switch cases which removed the handleClick call if it was clicked
  function handleClick(response: number, correct: number) {
    // If any button is clicked, set the 4th index to true to indicate that an answer was selected
    updateQuestionStatus(currentPos, 4);

    // Update the actual button that was selected
    updateQuestionStatus(currentPos, index);

    // Check to see if the button clicked is the correct one and update statuses as needed
    if (isCorrect(response, correct)) {
      setAnswerColor("green");
      setShowStory(true);
      setTotalScore(totalScore + possibleScore);
    } else {
      setAnswerColor("red");
      setGuesses(guesses + 1);
    }
  }

  // Update the status of the answerSelected main list
  function updateQuestionStatus(currentPos: number, index: number) {
    const tempList: Array<boolean> = answersSelectedList;
    tempList[currentPos * 5 + index] = true;
    setSelectedQuestion(tempList);
  }
  return (
    <>
      {(() => {
        switch (answersSelectedList[currentPos * 5 + 4]) {
          case false:
            return (
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
            );
          case true:
            switch (answersSelectedList[currentPos * 5 + index]) {
              case false:
                return (
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
                );
              case true:
                switch (gridCell == correct) {
                  case false:
                    return (
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
                    );
                  case true:
                    return (
                      <button
                        className={defineGridCell(gridCell)}
                        style={{
                          backgroundColor: "green",
                          margin: "5px",
                          padding: "15px",
                        }}
                      >
                        {answer}
                      </button>
                    );
                }
            }
        }
      })()}
    </>
  );
}

export default AnswerButton;
