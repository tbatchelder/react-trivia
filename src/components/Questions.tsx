// This component contains all of the details for the question:
//   The question itself, the answers, the correct answer, the score, the story and the next/previous buttons

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
    correct: 3,
    score: 5,
    story:
      "An interesting one.  This is not only from the Dungeons & Dragons game I loved playing as a teen but could also be used to descibe me.  I look like a person but tend to act ... well ... differently and am therefore often misunderstood.  So, I've become good at playing a part, usually a wallflower.",
  },
];
//   {
//     id: 2,
//     question:
//       "What is the name of the villian in the Dungeons & Dragons cartoon series?",
//     answers: ["Voldamort", "Vladamir", "Vermathax", "Venger"],
//     correct: 4,
//     score: 10,
//     story:
//       "Growing up, this was one of the best cartoons of its time.  Kids getting pulled into an alternate dimension where they got to play their D&D characters.  Just one of many things I wish was possible in reality because at least there, I would have fit in better than here. And best of all, there was little Uni running around.",
//   },
//   {
//     id: 3,
//     question: "What is the full name of the SDF-1?",
//     answers: [
//       "Super Deformed Figure-1",
//       "Super Dimensional Fortress-1",
//       "Silver Dueling Falcion-1",
//       "Sonic Dinner Fork-1",
//     ],
//     correct: 2,
//     score: 10,
//     story:
//       "Robotech.  The tv series that got me started in my love of anime.  A unique series at the time in that it told a complete story and wasn't afraid to show the death of a loved character.  ",
//   },
//   {
//     id: 4,
//     question: "Who is the King of the Monsters?",
//     answers: [
//       "Simba the lion.",
//       "A king cobra.",
//       "A black widow spider.",
//       "Godzilla.",
//     ],
//     correct: 4,
//     score: 5,
//     story: "story",
//   },
//   {
//     id: 5,
//     question: "What are the names of the main characters in Genshin Impact?",
//     answers: [
//       "Aether and Lumine",
//       "Simba and Scar",
//       "Rocky and Bullwinkle",
//       "Rick and Morty",
//     ],
//     correct: 1,
//     score: 15,
//     story: "story",
//   },
//   {
//     id: 6,
//     question:
//       "What name is given to the character shown in the game background?",
//     answers: [
//       "The Lady Amalethia",
//       "Princess Cadmine",
//       "Queen Malevalent",
//       "Princess Peach",
//     ],
//     correct: 1,
//     score: 5,
//     story: "story",
//   },
//   {
//     id: 7,
//     question: "How many Fred Saberhagen Swords of Power are there?",
//     answers: ["One", "Three", "Seven", "Twelve."],
//     correct: 4,
//     score: 5,
//     story: "story",
//   },
//   {
//     id: 8,
//     question:
//       "In the Piers Anthony comedy series, what state does Xanth overlap?",
//     answers: ["California", "Florida", "Alaska", "Hawaii"],
//     correct: 2,
//     score: 5,
//     story: "story",
//   },
//   {
//     id: 9,
//     question: "Which of the following is NOT a type of Transformer?",
//     answers: ["Autobots", "Predacons", "Dinobots", "Gobots"],
//     correct: 4,
//     score: 5,
//     story: "story",
//   },
//   {
//     id: 10,
//     question: "An alicorn is _________.",
//     answers: [
//       "the horn of a unicorn.",
//       "a winged unicorn.",
//       "a type of corn.",
//       "a medical problem with a foot.",
//     ],
//     correct: 1,
//     score: 5,
//     story: "story",
//   },
//   {
//     id: 12,
//     question: "In what movie is the Death Blossom attack used?",
//     answers: ["Pokemon", "Star Wars", "The Last Starfighter", "Dragonball"],
//     correct: 3,
//     score: 5,
//     story: "story",
//   },
//   {
//     id: 12,
//     question: "Who played the character Jack in Legend?",
//     answers: ["Bill Murry", "Steven Seagal", "Tom Cruise", "Bruce Willis"],
//     correct: 3,
//     score: 5,
//     story: "story",
//   },
//   {
//     id: 13,
//     question:
//       "In what sci-fi tv series did an alliance of races fight The Shadows?",
//     answers: ["Star Trek", "Buck Rogers", "Battlestar Galactica", "Babylon 5"],
//     correct: 4,
//     score: 5,
//     story: "story",
//   },
//   {
//     id: 14,
//     question: "What anime series featured a Moon Pricess?",
//     answers: [
//       "Sailor Moon",
//       "Moon Over Miami.",
//       "My Little Pony",
//       "Strawberry Shortcake",
//     ],
//     correct: 1,
//     score: 5,
//     story: "story",
//   },
//   {
//     id: 15,
//     question: "Which of the following are not Blizzard games?",
//     answers: ["Starcraft", "Minecraft", "Warcraft", "Diablo"],
//     correct: 2,
//     score: 5,
//     story: "story",
//   },
//   {
//     id: 16,
//     question: "Which of the following is not science?",
//     answers: ["Astrology", "Chemistry", "Biology", "Physics"],
//     correct: 1,
//     score: 5,
//     story: "story",
//   },
//   {
//     id: 17,
//     question: "Ludo, the lovable, loyal monster is in what movie?",
//     answers: ["Shrek", "Home", "Ghostbusters", "Labyrinth"],
//     correct: 4,
//     score: 5,
//     story: "story",
//   },
//   {
//     id: 18,
//     question: "What are the mecha in Endless Waltz known as?",
//     answers: ["Priest", "Gundams", "Cyborgs", "Gadgets"],
//     correct: 2,
//     score: 5,
//     story: "story",
//   },
//   {
//     id: 19,
//     question: "What drawing style is used to design buildings?",
//     answers: ["Line drawing", "Caricature", "Geometry", "Architecture"],
//     correct: 4,
//     score: 5,
//     story: "story",
//   },
//   {
//     id: 20,
//     question: "What is the name of the firstborn unicorn?",
//     answers: ["Assallum", "Amaltheia", "Arboron", "Andrameda"],
//     correct: 1,
//     score: 5,
//     story: "story",
//   },
// ];

// This function needs to take the questions, break them down into their individual parts and then pass those parts
// down to the AnswerBlock and AnswerButton components for futher breakdown
// First, it will map out the objects for each index in the question array and pass them to questionDetails along with the index #
function Questions() {
  return (
    <>
      {questionList.map((questionDetails, index) => (
        <>
          <h2>{questionDetails.id}</h2>
          <h3>{questionDetails.question}</h3>
          <AnswerBlock key={index} answerList={questionDetails.answers} />
          <h4>{questionDetails.correct}</h4>
          <h4>{questionDetails.score}</h4>
          <h4>{questionDetails.story}</h4>
        </>
      ))}
      {/* {questionList[0].answers.map((answer: string) => (
        <button className="answer">{answer}</button>
      ))} */}
    </>
  );
}

export default Questions;

// import { useState } from "react";
// import AnswerBlock from "./AnswerBlock";

// const surveyQuestions = [
//   {
//     question: "Which of these involves scheduling and managing flights?",
//     answers: [
//       "Airline Booking",
//       "Door to Door Pollster",
//       "Internet Routing",
//       "Social Networks",
//     ],
//     correctAnswer: "Airline Booking",
//   },
//   {
//     question: "What is used to direct data across networks?",
//     answers: [
//       "Electric Metering",
//       "Internet Routing",
//       "Library Indexing",
//       "Furniture Assembly",
//     ],
//     correctAnswer: "Internet Routing",
//   },
//   {
//     question: "Which job involves surveying people about their opinions?",
//     answers: ["Chef", "Door to Door Pollster", "Bank Teller", "Architect"],
//     correctAnswer: "Door to Door Pollster",
//   },
//   {
//     question: "Where do people primarily connect and share information online?",
//     answers: ["Social Networks", "Library", "Television", "Grocery Store"],
//     correctAnswer: "Social Networks",
//   },
//   {
//     question: "Which of these involves managing check-ins and seats?",
//     answers: [
//       "Airline Booking",
//       "School Admissions",
//       "Grocery Inventory",
//       "Event Planning",
//     ],
//     correctAnswer: "Airline Booking",
//   },
//   {
//     question: "What system do routers use to direct traffic?",
//     answers: [
//       "Traffic Signals",
//       "Internet Routing",
//       "Mail Service",
//       "GPS Mapping",
//     ],
//     correctAnswer: "Internet Routing",
//   },
//   {
//     question: "Who might ask you questions on your doorstep?",
//     answers: [
//       "Electrician",
//       "Door to Door Pollster",
//       "Teacher",
//       "Delivery Driver",
//     ],
//     correctAnswer: "Door to Door Pollster",
//   },
//   {
//     question: "Where do people create profiles and connect online?",
//     answers: [
//       "Social Networks",
//       "Banking Apps",
//       "Search Engines",
//       "Job Boards",
//     ],
//     correctAnswer: "Social Networks",
//   },
//   {
//     question: "Which option allows you to reserve seats on a plane?",
//     answers: [
//       "Airline Booking",
//       "Restaurant Reservation",
//       "Library Checkout",
//       "Car Rental",
//     ],
//     correctAnswer: "Airline Booking",
//   },
//   {
//     question:
//       "What type of network helps people to find friends and communities?",
//     answers: [
//       "Social Networks",
//       "Private Intranet",
//       "ISP Provider",
//       "Public Park",
//     ],
//     correctAnswer: "Social Networks",
//   },
// ];

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

// // Retain the order of questions for the Previous button
// const questionsViewed = [0];
// // Retain the current position in the random list above
// let currentPos = 0;
// // Retain the selected answer(s) for each question
// const questionsAnswered = [];

// function Questions() {
//   // Used to display the active question
//   const [activeIndex, setActiveIndex] = useState(0);
//   // Used to keep score
//   const [score, setScore] = useState(0);

//   const randomQuestionIndex = () => {
//     let newIndex = Math.floor(Math.random() * questionList.length);
//     while (questionsViewed.includes(newIndex)) {
//       newIndex = Math.floor(Math.random() * questionList.length);
//     }
//     questionsViewed.push(newIndex);
//     return newIndex;
//   };

//   const handleNavigation = (direction: string) => {
//     console.log(questionsViewed, currentPos, direction);
//     if (direction == "B" && currentPos == 0) {
//       setActiveIndex(questionsViewed[0]);
//     } else if (direction == "B") {
//       currentPos -= 1;
//       setActiveIndex(questionsViewed[currentPos]);
//     } else if (direction == "F" && currentPos + 1 < questionsViewed.length) {
//       currentPos += 1;
//       setActiveIndex(questionsViewed[currentPos]);
//     } else {
//       currentPos += 1;
//       setActiveIndex(randomQuestionIndex());
//     }
//   };

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
//                 <div className="r4c2">
//                   <button
//                     className="previous"
//                     onClick={() => handleNavigation("B")}
//                   >
//                     Previous
//                   </button>
//                 </div>
//                 <div className="r4c4">
//                   <button
//                     className="next"
//                     onClick={() => handleNavigation("F")}
//                   >
//                     Next
//                   </button>
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
//   const [activeIndex, setActiveIndex] = useState(0);

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

//   const handleNavigation = (direction: string) => {
//     console.log(questionsDone, currentPos, direction);
//     if (direction == "B" && currentPos == 0) {
//       setActiveIndex(questionsDone[0]);
//     } else if (direction == "B") {
//       currentPos -= 1;
//       setActiveIndex(questionsDone[currentPos]);
//     } else if (direction == "F" && currentPos + 1 < questionsDone.length) {
//       currentPos += 1;
//       setActiveIndex(questionsDone[currentPos]);
//     } else {
//       currentPos += 1;
//       setActiveIndex(randomQuestionIndex());
//     }
//   };

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
