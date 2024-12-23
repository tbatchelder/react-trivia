// This component will control the entire question block and it's navigation

import { useState } from "react";
import Question from "./Question";
import { QuestionType } from "../types";

// Retain the current question being viewed from the random list
let currentPos: number = 0;

// This function needs to take the questions, break them down into their individual parts and then pass those parts
// down to the Questions and AnswerButton components for futher breakdown

// After the refactoring, we will be using the currentPos to pass each question one at a time so that the whole
//   section only re-renders once instead of every time

// Bring in the question, random and answered list we created when the game started
function Questions({
  questionList,
  randomQuestionList,
  answersSelectedList,
}: {
  questionList: QuestionType[];
  randomQuestionList: Array<number>;
  answersSelectedList: Array<Array<boolean>>;
}) {
  // Make sure all useState commands are first as React will not compile properly with them scattered about.

  // Used to display the active question
  // It does this by initially setting the first question to 0 and hence the state to 0
  // So, instead of having every question built at once and being hidden by CSS,
  //   we will only send one question at a time to the question block along with it's answers
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // In order to update the score, we need to keep track of how many guesses are made per question
  // This will have to be reset to 0 for each new question
  const [guesses, setGuesses] = useState<number>(0);
  const [totalScore, setTotalScore] = useState<number>(0);

  // Set the story to visible if the correct answer is quessed
  // It's clearer to make this a boolean instead of using 0 and 1
  const [showStory, setShowStory] = useState<boolean>(false);

  const [wasCorrectlyAnswered, setWasCorrectlyAnswered] =
    useState<boolean>(false);

  // This component also controls the Previous and Next buttons
  // It will check to make sure the questions remain within the length of the questions listing
  //   by updating the state of the question container object

  // For each new question, we'll have to make sure the story flag is flipped back so it is not displayed.
  // Also, each new question should reset the quesses counter.
  const handleNext = () => {
    if (currentPos + 1 < randomQuestionList.length) {
      currentPos += 1;
      setActiveIndex(randomQuestionList[currentPos]);
      setShowStory(false);
      setGuesses(0);
      setWasCorrectlyAnswered(false);
    }
  };

  // The Previous button doesn't need to change anything.
  const handlePrevious = () => {
    if (currentPos != 0) {
      currentPos -= 1;
      setActiveIndex(randomQuestionList[currentPos]);
    }
  };

  return (
    <>
      {/* We need to pass a lot down to the answer component were it will be actually changed */}
      <div className="questionGrid">
        <Question
          currentPos={currentPos}
          question={questionList[activeIndex]}
          guesses={guesses}
          setGuesses={setGuesses}
          possibleScore={questionList[activeIndex].score[guesses]}
          totalScore={totalScore}
          setTotalScore={setTotalScore}
          showStory={showStory}
          setShowStory={setShowStory}
          wasCorrectlyAnswered={wasCorrectlyAnswered}
          setWasCorrectlyAnswered={setWasCorrectlyAnswered}
          answersSelectedList={answersSelectedList}
        />
        <div className="r4c2">
          <button className="previous" onClick={() => handlePrevious()}>
            Previous
          </button>
        </div>
        <div className="r4c3">
          <span className="theScore">
            Question {currentPos + 1} of {questionList.length}
          </span>
          <br />
          <span className="theScore">
            Possible Score: {questionList[activeIndex].score[guesses]} out of{" "}
            {questionList[activeIndex].score[0]}
          </span>
          <br />
          <span className="theScore">Total Score: {totalScore}</span>
        </div>
        <div className="r4c4">
          <button className="next" onClick={() => handleNext()}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Questions;
