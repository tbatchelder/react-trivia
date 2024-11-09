// This component will contain all of the answers which will pass that down to the individual button

import AnswerButton from "./AnswerButton";

// The interface will tell the component what Type the variable should be that it is accepting
// These variables are coming from the mapped question list from Questions
//   they are then brought into the function as variables using the : Props notation
//   Note that the list of answers is brought in as an Array which details that the elements IN the array are strings
interface Props {
  answerList: Array<string>;
  correctAnswer: number;
}

// With the list of answers now in the component, we can map each individual answer out to a button
// We'll also need to pass along the correct answer so that each button knows if it's the correct one or not
// Using the index, we'll assign each answer to a grid cell for formatting
// Again, each variable passed will need an interface on AnswerButton
function AnswerBlock({ answerList, correctAnswer }: Props) {
  return (
    <>
      {answerList.map((answer, index) => (
        <>
          <AnswerButton
            key={index}
            answer={answer}
            gridCell={index}
            correct={correctAnswer}
          />
        </>
      ))}
    </>
  );
}

export default AnswerBlock;

// import AnswerButton from "./AnswerButton.jsx";

// interface AnswerBlock {
//   surveyQuestion: object;
//   currentQuestion: number;
//   setCurrentQuestion: object;
//   setScore: object;
//   score: number;
// }

// const AnswerBlock = ({
//   surveyQuestion,
//   currentQuestion,
//   setCurrentQuestion,
//   setScore,
//   score,
// }: AnswerBlock) => {
//   console.log("Child: ", surveyQuestion);
//   return (
//     <div>
//       <h2>{surveyQuestion.question} </h2>
//       {surveyQuestion.answers.map((answer, i) => (
//         <AnswerButton
//           key={i}
//           answer={answer}
//           score={score}
//           setScore={setScore}
//           correct={surveyQuestion.correctAnswer}
//           currentQuestion={currentQuestion}
//           setCurrentQuestion={setCurrentQuestion}
//         />
//       ))}
//     </div>
//   );
// };
// export default AnswerBlock;

// import AnswerButton from "./AnswerButton";

// function AnswerBlock() {
//   const answerList = ["Assallum", "Amaltheia", "Arboron", "Andrameda"];

//   return (
//     <>
//       {answerList.map((answer: string, i: number) => (
//         <AnswerButton key={i} answer={answer} />
//       ))}
//     </>
//   );
// }

// export default AnswerBlock;
