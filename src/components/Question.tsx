// This component will contain all of the question details which will pass  down to the individual question area and individual buttons
// Here, we need Dispatch to allow the passing in of a useState setter
import { Dispatch } from "react";
import AnswerButton from "./AnswerButton";
import { QuestionType } from "../types";
import { SetStateAction } from "react";

// The interface will tell the component what Type the variable should be that it is accepting
// These variables are coming from the mapped question list from Questions
//   they are then brought into the function as variables using the : Props notation
//   Note that the list of answers is brought in as an Array which details that the elements IN the array are strings

// With the list of answers now in the component, we can map each individual answer out to a button
// We'll also need to pass along the correct answer so that each button knows if it's the correct one or not
// Using the index, we'll assign each answer to a grid cell for formatting
// Again, each variable passed will need an interface on AnswerButton
function Question({
  question,
  guesses,
  setGuesses,
  showStory,
  setShowStory,
}: {
  question: QuestionType;
  guesses: number;
  setGuesses: Dispatch<SetStateAction<number>>;
  showStory: boolean;
  setShowStory: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <div className="question">{question.question}</div>
      {/* 
              Ok - looks like we were trying to be TOO fancy - AnswerBlock component not needed as an intermediate to
              the AnswerButton block after all to just map out the answers; we can do that within this component which
              will make passing down the score and quesses work the way the internet is saying they should work.
              
              With the list of answers now in the component, we can map each individual answer out to a button
              We'll also need to pass along the correct answer so that each button knows if it's the correct one or not
              Using the index, we'll assign each answer to a grid cell for formatting
              Again, each variable passed will need an interface on AnswerButton 
            */}
      {question.answers.map((answer, index) => (
        <AnswerButton
          key={answer}
          answer={answer}
          gridCell={index}
          correct={question.correct}
          setShowStory={setShowStory}
          guesses={guesses}
          setGuesses={setGuesses}
        />
      ))}
      {showStory && <div className="r3">{question.story}</div>}
    </>
  );
}

export default Question;
