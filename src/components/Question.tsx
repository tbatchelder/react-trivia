// This component will contain all of the answeer details which will pass down to the individual answeer area and individual buttons
// Here, we need Dispatch to allow the passing in of a useState setter
import { Dispatch } from "react";
import { SetStateAction } from "react";
import AnswerButton from "./AnswerButton";
import { QuestionType } from "../types";
// import { wasAnswered } from "../utils/helpers";
// import { useState } from "react";

// The interface will tell the component what Type the variable should be that it is accepting

// With the list of answers now in the component, we can map each individual answer out to a button
// We'll also need to pass along the correct answer so that each button knows if it's the correct one or not
// Using the index, we'll assign each answer to a grid cell for formatting
function Question({
  currentPos,
  question,
  guesses,
  setGuesses,
  possibleScore,
  totalScore,
  setTotalScore,
  showStory,
  setShowStory,
  wasCorrectlyAnswered,
  setWasCorrectlyAnswered,
  answersSelectedList,
}: {
  currentPos: number;
  question: QuestionType;
  guesses: number;
  setGuesses: Dispatch<SetStateAction<number>>;
  possibleScore: number;
  totalScore: number;
  setTotalScore: Dispatch<SetStateAction<number>>;
  showStory: boolean;
  setShowStory: Dispatch<SetStateAction<boolean>>;
  wasCorrectlyAnswered: boolean;
  setWasCorrectlyAnswered: Dispatch<SetStateAction<boolean>>;
  answersSelectedList: Array<boolean>;
  // answersSelectedList: Array<Array<boolean>>;
}) {
  // console.log(wasAnswered(answersSelectedList, currentPos));
  // const questionsAnswered = wasAnswered(answersSelectedList, currentPos);
  // const [questionsAnswered, setQuestionsAnswered] = useState<Array<boolean>>(
  //   wasAnswered(answersSelectedList, currentPos)
  // );
  return (
    <>
      <div className="question">{question.question}</div>
      {question.answers.map((answer, index) => (
        <AnswerButton
          key={answer}
          currentPos={currentPos}
          index={index}
          answer={answer}
          gridCell={index}
          correct={question.correct}
          guesses={guesses}
          setGuesses={setGuesses}
          possibleScore={possibleScore}
          totalScore={totalScore}
          setTotalScore={setTotalScore}
          setShowStory={setShowStory}
          wasCorrectlyAnswered={wasCorrectlyAnswered}
          setWasCorrectlyAnswered={setWasCorrectlyAnswered}
          answersSelectedList={answersSelectedList}
          // questionsAnswered={questionsAnswered}
        />
      ))}
      {showStory && <div className="r3">{question.story}</div>}
    </>
  );
}

export default Question;
