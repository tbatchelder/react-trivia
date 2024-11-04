// This component will break each of the answers down to a single button which will have its own method calls

interface Props {
  answer: string;
}

function AnswerButton({ answer }: Props) {
  return (
    <>
      <button>{answer}</button>
    </>
  );
}

export default AnswerButton;
// import { useState } from "react";

// interface AnswerButton {
//   surveyQuestion: object;
//   currentQuestion: number;
//   setCurrentQuestion: object;
//   setScore: object;
//   score: number;
//   answer: string;
//   correct: string;
// }

// const AnswerButton = ({
//   answer,
//   correct,
//   currentQuestion,
//   setCurrentQuestion,
//   setScore,
//   score,
// }: AnswerButton) => {
//   const defaultColor = "blue";
//   const correctColor = "green";
//   const incorrectColor = "red";

//   const [color, setColor] = useState(defaultColor);

//   function handleClick() {
//     if (answer === correct) {
//       setColor(correctColor);
//       setScore(score + 1);
//     } else {
//       setColor(incorrectColor);
//     }

//     setTimeout(() => {
//       setCurrentQuestion(currentQuestion + 1);
//       setColor(defaultColor);
//     }, 1000);
//   }

//   return (
//     <div>
//       <button
//         style={{
//           backgroundColor: color,
//           margin: "5px",
//           padding: "15px",
//         }}
//         onClick={() => handleClick()}
//       >
//         {answer}
//       </button>
//     </div>
//   );
// };
// export default AnswerButton;

// import { useState } from "react";

// function AnswerButton({ answer }) {
//   const color = ["blue", "green", "red"];

//   const [answerColor, setAnswerColor] = useState(color[0]);

//   function handleClick(answer: string) {
//     console.log(answer);
//     setAnswerColor(color[1]);
//   }
//   return (
//     <>
//       <button
//         className="answer"
//         key={answer}
//         style={{ backgroundColor: answerColor }}
//         onClick={() => handleClick(answer)}
//       >
//         {answer}
//       </button>
//     </>
//   );
// }

// export default AnswerButton;
