export function isCorrect(response: number, correct: number) {
  if (response == correct) {
    return true;
  } else {
    return false;
  }
}

// export function wasAnswered(
//   answersSelectedList: Array<Array<boolean>>,
//   currentPos: number
// ) {
//   // console.log(answersSelectedList[currentPos]);
//   return answersSelectedList[currentPos];
//   //   //if (answersSelectedList[currentPos][index]) {
//   //   //     setAnswerColor("red");
//   //   // }
// }
