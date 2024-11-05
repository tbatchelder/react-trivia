// This component will contain all of the answers which will pass that down to the individual button

import AnswerButton from "./AnswerButton";

// The interface will tell the component what Type the variable should be that it is accepting
interface Props {
  answerList: Array<string>;
  correctIndex: number;
}

function AnswerBlock({ answerList, correctIndex }: Props) {
  return (
    <>
      {answerList.map((answer, index) => (
        <>
          <AnswerButton
            key={index}
            answer={answer}
            gridCell={index}
            correct={correctIndex}
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
