// This component contains all of the details for the question:
//   The question itself, the answers, the correct answer, the score, the story and the next/previous buttons

// In order to re-render when changes are made, we need state
import { useState } from "react";
// In order to use the other components, we need to import them
import AnswerBlock from "./AnswerBlock";

// In order for the other components to understand what data type should be expected, an interface is needed
// which will detail each of list items by their type
// In order to properly access the list within the question Object, it needs to be set to Array with the type of
//   data that is inside of the list - this then needs to be passed down the same way to other components
interface QuestionType {
  id: number;
  question: string;
  answers: Array<string>;
  correct: number;
  score: number;
  story: string;
}

// Create a const to hold all of the details about each question
const questionList: QuestionType[] = [
  {
    id: 1,
    question: "What is a mimic?",
    answers: [
      "Another name for a leprechaun.",
      "Someone that imitates you.",
      "A carnivorous chest.",
      "A miniature microphone.",
    ],
    correct: 2,
    score: 5,
    story:
      "An interesting one.  This is not only from the Dungeons & Dragons game I loved playing as a teen but could also be used to descibe me.  I look like a person but tend to act ... well ... differently and am therefore often misunderstood.  So, I've become good at playing a part, usually a wallflower.",
  },
  {
    id: 2,
    question:
      "What is the name of the villian in the Dungeons & Dragons cartoon series?",
    answers: ["Voldamort", "Vladamir", "Vermathax", "Venger"],
    correct: 3,
    score: 10,
    story:
      "Growing up, this was one of the best cartoons of its time.  Kids getting pulled into an alternate dimension where they got to play their D&D characters.  Just one of many things I wish was possible in reality because at least there, I would have fit in better than here. And best of all, there was little Uni running around.",
  },
  {
    id: 3,
    question: "What is the full name of the SDF-1?",
    answers: [
      "Super Deformed Figure-1",
      "Super Dimensional Fortress-1",
      "Silver Dueling Falcion-1",
      "Sonic Dinner Fork-1",
    ],
    correct: 1,
    score: 10,
    story:
      "Robotech.  The tv series that got me started in my love of anime.  A unique series at the time in that it told a complete story and wasn't afraid to show the death of a loved character.  ",
  },
  {
    id: 4,
    question: "Who is the King of the Monsters?",
    answers: [
      "Simba the lion.",
      "A king cobra.",
      "A black widow spider.",
      "Godzilla.",
    ],
    correct: 3,
    score: 5,
    story: "story",
  },
  {
    id: 5,
    question: "What are the names of the main characters in Genshin Impact?",
    answers: [
      "Aether and Lumine",
      "Simba and Scar",
      "Rocky and Bullwinkle",
      "Rick and Morty",
    ],
    correct: 0,
    score: 15,
    story: "story",
  },
  {
    id: 6,
    question:
      "What name is given to the character shown in the game background?",
    answers: [
      "The Lady Amalethia",
      "Princess Cadmine",
      "Queen Malevalent",
      "Princess Peach",
    ],
    correct: 0,
    score: 5,
    story: "story",
  },
  {
    id: 7,
    question: "How many Fred Saberhagen Swords of Power are there?",
    answers: ["One", "Three", "Seven", "Twelve."],
    correct: 3,
    score: 5,
    story: "story",
  },
  {
    id: 8,
    question:
      "In the Piers Anthony comedy series, what state does Xanth overlap?",
    answers: ["California", "Florida", "Alaska", "Hawaii"],
    correct: 1,
    score: 5,
    story: "story",
  },
  {
    id: 9,
    question: "Which of the following is NOT a type of Transformer?",
    answers: ["Autobots", "Predacons", "Dinobots", "Gobots"],
    correct: 3,
    score: 5,
    story: "story",
  },
  {
    id: 10,
    question: "An alicorn is _________.",
    answers: [
      "the horn of a unicorn.",
      "a winged unicorn.",
      "a type of corn.",
      "a medical problem with a foot.",
    ],
    correct: 0,
    score: 5,
    story: "story",
  },
  {
    id: 12,
    question: "In what movie is the Death Blossom attack used?",
    answers: ["Pokemon", "Star Wars", "The Last Starfighter", "Dragonball"],
    correct: 2,
    score: 5,
    story: "story",
  },
  {
    id: 12,
    question: "Who played the character Jack in Legend?",
    answers: ["Bill Murry", "Steven Seagal", "Tom Cruise", "Bruce Willis"],
    correct: 2,
    score: 5,
    story: "story",
  },
  {
    id: 13,
    question:
      "In what sci-fi tv series did an alliance of races fight The Shadows?",
    answers: ["Star Trek", "Buck Rogers", "Battlestar Galactica", "Babylon 5"],
    correct: 3,
    score: 5,
    story: "story",
  },
  {
    id: 14,
    question: "What anime series featured a Moon Pricess?",
    answers: [
      "Sailor Moon",
      "Moon Over Miami.",
      "My Little Pony",
      "Strawberry Shortcake",
    ],
    correct: 0,
    score: 5,
    story: "story",
  },
  {
    id: 15,
    question: "Which of the following are not Blizzard games?",
    answers: ["Starcraft", "Minecraft", "Warcraft", "Diablo"],
    correct: 1,
    score: 5,
    story: "story",
  },
  {
    id: 16,
    question: "Which of the following is not science?",
    answers: ["Astrology", "Chemistry", "Biology", "Physics"],
    correct: 0,
    score: 5,
    story: "story",
  },
  {
    id: 17,
    question: "Ludo, the lovable, loyal monster is in what movie?",
    answers: ["Shrek", "Home", "Ghostbusters", "Labyrinth"],
    correct: 3,
    score: 5,
    story: "story",
  },
  {
    id: 18,
    question: "What are the mecha in Endless Waltz known as?",
    answers: ["Priest", "Gundams", "Cyborgs", "Gadgets"],
    correct: 1,
    score: 5,
    story: "story",
  },
  {
    id: 19,
    question: "What drawing style is used to design buildings?",
    answers: ["Line drawing", "Caricature", "Geometry", "Architecture"],
    correct: 3,
    score: 5,
    story: "story",
  },
  {
    id: 20,
    question: "What is the name of the firstborn unicorn?",
    answers: ["Assallum", "Amaltheia", "Arboron", "Andrameda"],
    correct: 0,
    score: 5,
    story: "story",
  },
];

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
const randomQuestionList: number[] = [0];
// Retain the current index being viewed from the random list above
let currentPos = 0;
// Retain the selected answer(s) for each question - this will be a list of list
const questionsAnswered = [];

// This function needs to take the questions, break them down into their individual parts and then pass those parts
// down to the AnswerBlock and AnswerButton components for futher breakdown
// First, it will map out the objects for each index in the question array and pass them to questionDetails along with the index #
// We will need to set the index # of the list as the key so React will synch everything
// Then we pass the answers and the correct answer down to AnswerBlock
//   this will require an interface on AnswerBlock so that it knows the Types of variables it should be accepting
function Questions() {
  // Used to display the active question
  // It does this by initially setting the first question to 0 and hence the state to 0
  // It send this to the div container and changes the CSS from none to block if the index = the active index value
  const [activeIndex, setActiveIndex] = useState(0);

  // const randomQuestionIndex = () => {
  //   let newIndex = Math.floor(Math.random() * questionList.length);
  //   while (questionsViewed.includes(newIndex)) {
  //     newIndex = Math.floor(Math.random() * questionList.length);
  //   }
  //   questionsViewed.push(newIndex);
  //   return newIndex;
  // };

  // This controls the Previous and Next buttons
  // It will check to make sure the buttons remain within the length of the questions listing
  //   by updating the state of the question container object
  // If the next button is within the limit, generate a random question to view next
  const handleNavigation = (direction: string) => {
    // First, let's check to see if a random order has been generated; if not, make one
    if (randomQuestionList.length != questionList.length) {
      // We need to set the type of value contained with the temp array holder - use : type or Array<type>
      // We want to start at 1 since we already have 0 in the list
      const tempStarter: number[] = [];
      for (let i = 1; i < questionList.length; i++) {
        tempStarter.push(i);
      }
      // Cycle thru the temp array until its empty
      while (tempStarter.length > 0) {
        // Generate a random number
        const thisIndex: number = Math.floor(
          Math.random() * tempStarter.length
        );
        // Pull out the value at the random index
        const thisValue: number = tempStarter[thisIndex];
        // Append the value to the masterlist
        randomQuestionList.push(thisValue);
        // Remove the value from the list
        tempStarter.splice(thisIndex, 1);
      }
    }
    // Once we have a random list set up, we can figure out how to move backwards and forwards thru it.
    if (direction == "B" && currentPos == 0) {
      setActiveIndex(randomQuestionList[0]);
    } else if (direction == "B") {
      currentPos -= 1;
      setActiveIndex(randomQuestionList[currentPos]);
    } else if (
      direction == "F" &&
      currentPos + 1 >= randomQuestionList.length
    ) {
      setActiveIndex(randomQuestionList[currentPos]);
    } else {
      currentPos += 1;
      setActiveIndex(randomQuestionList[currentPos]);
    }
  };

  return (
    <>
      {questionList.map((currentQuestionDetails, index) => (
        <div style={{ display: index == activeIndex ? "block" : "none" }}>
          <div key={index} className="questionGrid">
            <div className="question">{currentQuestionDetails.question}</div>
            <AnswerBlock
              answerList={currentQuestionDetails.answers}
              correctAnswer={currentQuestionDetails.correct}
            />
            <p>{currentQuestionDetails.id}</p>
            {/* 
            <h4>{currentQuestionDetails.score}</h4>
            <h4>{currentQuestionDetails.story}</h4> */}
            <div className="r4c2">
              <button
                className="previous"
                onClick={() => handleNavigation("B")}
              >
                Previous
              </button>
            </div>
            <div className="r4c4">
              <button className="next" onClick={() => handleNavigation("F")}>
                Next
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Questions;

// function Questions() {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);

//   return (
//     <>
//       {currentQuestion < 10 && (
//         <>
//           <p>Current Question: {currentQuestion + 1}</p>
//           <AnswerBlock
//             score={score}
//             setScore={setScore}
//             currentQuestion={currentQuestion}
//             setCurrentQuestion={setCurrentQuestion}
//             surveyQuestion={surveyQuestions[currentQuestion]}
//           />
//         </>
//       )}
//       <h3>Score: {score}</h3>

//       {currentQuestion === 10 && <p>Final Score: {(score / 10) * 100}%</p>}
//     </>
//   );
// }

// export default Questions;

// function Questions() {
//   // Used to display the active question
//   const [activeIndex, setActiveIndex] = useState(0);
//   // Used to keep score
//   const [score, setScore] = useState(0);

//   return (
//     <>
//       {questionsViewed.length <= questionList.length && (
//         <>
//           {questionList.map((currentQuestion, index) => (
//             <div
//               key={index}
//               style={{ display: index == activeIndex ? "block" : "none" }}
//             >
//               <div className="questionGrid">
//                 <div className="question">{currentQuestion.question}</div>
//                 <AnswerBlock />
//                 <div className="r3">
//                   <p className="story hidden">{currentQuestion.story}</p>
//                 </div>

//               </div>
//             </div>
//           ))}
//         </>
//       )}
//     </>
//   );
// }

// function Questions() {

//   const randomQuestionIndex = () => {
//     let newIndex = Math.floor(Math.random() * questionList.length);
//     while (questionsDone.includes(newIndex)) {
//       newIndex = Math.floor(Math.random() * questionList.length);
//     }
//     questionsDone.push(newIndex);
//     return newIndex;
//   };

//   // const randomArray = () => {
//   //   let currentIndex = questionList.length;
//   //   while (currentIndex != 0) {
//   //     const randomIndex = Math.floor(Math.random() * currentIndex);
//   //     currentIndex--;
//   //     [questionList[currentIndex], questionList[randomIndex]] = [
//   //       questionList[randomIndex],
//   //       questionList[currentIndex],
//   //     ];
//   //   }
//   // };

//   // const [isCorrect, setIsCorrect] = useState("");
//   // const [selected, setSelected] = useState(false);
//   // const [showStory, setShowStory] = useState(false);

//   // const handleCorrect = (index: number, guess: number) => {
//   // const Button ()
//   //   if (questionList[index].correct == guess) {
//   //     // setIsCorrect("green");
//   //     // setShowStory(true);
//   //     // return "green";
//   //     return (
//   //       <button
//   //         className="answer"
//   //         style={{
//   //           backgroundColor: selected ? handleCorrect(index, 1) : "",
//   //         }}
//   //         onClick={() => handleSelected()}
//   //       >
//   //         {currentQuestion.answer1}
//   //       </button>
//   //     );
//   //   // } else {
//   //   //   // setIsCorrect("red");
//   //   //   return "red";
//   //   // }
//   // };

//   // const handleSelected = () => {
//   //   setSelected(true);
//   // };

//   return (
//     <>
//       {questionList.map((currentQuestion, index) => (
//         <div
//           key={index}
//           style={{ display: index == activeIndex ? "block" : "none" }}
//         >
//           <div className="questionGrid">
//             <div className="question">{currentQuestion.question}</div>
//             <AnswerBlock />
//             <div className="r3">
//               <p className="story hidden">{currentQuestion.story}</p>
//             </div>
//             <div className="r4c2">
//               <button
//                 className="previous"
//                 onClick={() => handleNavigation("B")}
//               >
//                 Previous
//               </button>
//             </div>
//             <div className="r4c4">
//               <button className="next" onClick={() => handleNavigation("F")}>
//                 Next
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }
