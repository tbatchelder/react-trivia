// Since we are splitting out high level functionality to higher level components, we need to dry up
// the code a bit by not repeating the type for the question list.
// This is done by creating a type.ts file in which we can put all of the interface types.
// Since these are individually exported, they can be imported into any lower level components.

// Here, we need Dispatch to allow the passing in of a useState setter type
// Dispatch can be replaced with () => void but, if a value is needed: (arg:number) => void may be needed
import { Dispatch } from "react";
import { SetStateAction} from "react";

// In order for the other components to understand what data type should be expected, an interface is needed
// which will detail each item by its type

// For an Array within an Array, you have to tell Typescript to expect an Array but then you also
// need to tell it what type of data is within the Array

export interface QuestionType {
  id: number;
  question: string;
  answers: Array<string>;
  correct: number;
  score: Array<number>;
  story: string;
}

export interface AnswerType {
  currentPos: number;
  index: number;
  answer: string;
  gridCell: number;
  correct: number;
  guesses: number;
  setGuesses: Dispatch<SetStateAction<number>>;
  possibleScore: number;
  totalScore: number;
  setTotalScore: Dispatch<SetStateAction<number>>;
  setShowStory: Dispatch<SetStateAction<boolean>>;
  wasCorrectlyAnswered: boolean;
  setWasCorrectlyAnswered: Dispatch<SetStateAction<boolean>>;
  answersSelectedList: Array<boolean>;
  // answersSelectedList: Array<Array<boolean>>;
  // questionsAnswered: Array<boolean>;
}
