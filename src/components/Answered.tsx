// This component will contain all of the answeer details which will pass down to the individual answeer area and individual buttons
// Here, we need Dispatch to allow the passing in of a useState setter
import { QuestionType } from "../types";
import Question from "./Question";

// The interface will tell the component what Type the variable should be that it is accepting

// With the list of answers now in the component, we can map each individual answer out to a button
// We'll also need to pass along the correct answer so that each button knows if it's the correct one or not
// Using the index, we'll assign each answer to a grid cell for formatting
function Answered({
  currentPos,
  question,
  answersSelectedList,
}: {
  currentPos: number;
  question: QuestionType;
  answersSelectedList: Array<Array<boolean>>;
}) {
  return (
    <>
      {answersSelectedList.map((answeredList, index) => (
        <Question
          key={index}
          currentPos={currentPos}
          question={question}
          answersSelectedList={answersSelectedList}
        />
      ))}
    </>
  );
}

export default Answered;
