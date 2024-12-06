// This component contains all of the details for the question:
//   The question itself, the answers, the correct answer, the score, the story and the next/previous buttons

// In order to re-render when changes are made, we need state
import { useState } from "react";
// In order to use the other components, we need to import them
import Question from "./Question";
import { QuestionType } from "../types";

// So, what we would like to happen is the following:
//   1. Start at question 0
//   2. Randomized the next question and keep track of the order
//   3. Keep track of the score
//   4. If a guess is wrong, reduce the score they COULD recieve: 100%. 50%, 25%, 0%
//   5. Show the # out of # questions they need to answer
//   6. Allow them to return to a previous question and guess again
//   7. If a previous question was guessed, show the answer they chose

// To keep track of the order of questions visited, we need an Array to store the order
// Store a random order of questions with 0 always being the start
// We need to set the type of value contained with the temp array holder - use : type or Array<type>
// const randomQuestionList: number[] = [0];
// Retain the current index being viewed from the random list above
let currentPos = 0;

// This function needs to take the questions, break them down into their individual parts and then pass those parts
// down to the AnswerBlock and AnswerButton components for futher breakdown
// First, it will map out the objects for each index in the question array and pass them to questionDetails along with the index #
// We will need to set the index # of the list as the key so React will synch everything
// Then we pass the answers and the correct answer down to AnswerBlock
//   this will require an interface on AnswerBlock so that it knows the Types of variables it should be accepting
function Questions({
  questionList,
  randomQuestionList,
}: {
  questionList: QuestionType[];
  randomQuestionList: Array<number>;
}) {
  // Make sure all useState commands are first as React will not compile properly with them scattered about.
  // Used to display the active question
  // It does this by initially setting the first question to 0 and hence the state to 0
  // It send this to the div container and changes the CSS from none to block if the index = the active index value
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // In order to update the score, we need to keep track of how many guesses are made per question
  // This will have to be reset to 0 for each new question
  const [guesses, setGuesses] = useState<number>(0);
  const [totalScore, setTotalScore] = useState<number>(0);

  // Set the story to visible if the correct answer is quessed
  const [showStory, setShowStory] = useState<boolean>(false);

  // This controls the Previous and Next buttons
  // It will check to make sure the buttons remain within the length of the questions listing
  //   by updating the state of the question container object

  // For each new question, we'll have to make sure the story flag is flipped back so it is not displayed.
  // Also, each new question should reset the quesses counter.
  const handleNext = () => {
    if (currentPos + 1 < randomQuestionList.length) {
      currentPos += 1;
      setActiveIndex(randomQuestionList[currentPos]);
      setShowStory(false);
      setGuesses(0);
      // this needs to move out of here and only update when the correct answer is guessed
      // setTotalScore(totalScore + scoreUpdate);
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
      <div className="questionGrid">
        <Question
          question={questionList[activeIndex]}
          guesses={guesses}
          setGuesses={setGuesses}
          showStory={showStory}
          setShowStory={setShowStory}
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

// questionList[activeIndex].score[guesses]
