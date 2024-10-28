import { useState } from "react";

const questionsDone = [0];
let currentPos = 0;

interface QuestionType {
  id: number;
  question: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  correct: number;
  score: number;
  story: string;
}

function Questions() {
  const questionList: QuestionType[] = [
    {
      id: 1,
      question: "What is a mimic?",
      answer1: "Another name for a leprechaun.",
      answer2: "Someone that imitates you.",
      answer3: "A carnivorous chest.",
      answer4: "A miniature microphone.",
      correct: 3,
      score: 5,
      story:
        "An interesting one.  This is not only from the Dungeons & Dragons game I loved playing as a teen but could also be used to descibe me.  I look like a person but tend to act ... well ... differently and am therefore often misunderstood.  So, I've become good at playing a part, usually a wallflower.",
    },
    {
      id: 2,
      question:
        "What is the name of the villian in the Dungeons & Dragons cartoon series?",
      answer1: "Voldamort",
      answer2: "Vladamir",
      answer3: "Vermathax",
      answer4: "Venger",
      correct: 4,
      score: 10,
      story:
        "Growing up, this was one of the best cartoons of its time.  Kids getting pulled into an alternate dimension where they got to play their D&D characters.  Just one of many things I wish was possible in reality because at least there, I would have fit in better than here. And best of all, there was little Uni running around.",
    },
    {
      id: 3,
      question: "What is the full name of the SDF-1?",
      answer1: "Super Deformed Figure-1",
      answer2: "Super Dimensional Fortress-1",
      answer3: "Silver Dueling Falcion-1",
      answer4: "Sonic Dinner Fork-1",
      correct: 2,
      score: 10,
      story:
        "Robotech.  The tv series that got me started in my love of anime.  A unique series at the time in that it told a complete story and wasn't afraid to show the death of a loved character.  ",
    },
    {
      id: 4,
      question: "Who is the King of the Monsters?",
      answer1: "Simba the lion.",
      answer2: "A king cobra.",
      answer3: "A black widow spider.",
      answer4: "Godzilla.",
      correct: 4,
      score: 5,
      story: "story",
    },
    {
      id: 5,
      question: "What are the names of the main characters in Genshin Impact?",
      answer1: "Aether and Lumine",
      answer2: "Simba and Scar",
      answer3: "Rocky and Bullwinkle",
      answer4: "Rick and Morty",
      correct: 1,
      score: 15,
      story: "story",
    },
    {
      id: 6,
      question:
        "What name is given to the character shown in the game background?",
      answer1: "The Lady Amalethia",
      answer2: "Princess Cadmine",
      answer3: "Queen Malevalent",
      answer4: "Princess Peach",
      correct: 1,
      score: 5,
      story: "story",
    },
    {
      id: 7,
      question: "How many Fred Saberhagen Swords of Power are there?",
      answer1: "One.",
      answer2: "Three",
      answer3: "Seven",
      answer4: "Twelve.",
      correct: 4,
      score: 5,
      story: "story",
    },
    {
      id: 8,
      question:
        "In the Piers Anthony comedy series, what state does Xanth overlap?",
      answer1: "California",
      answer2: "Florida",
      answer3: "Alaska",
      answer4: "Hawaii",
      correct: 2,
      score: 5,
      story: "story",
    },
    {
      id: 9,
      question: "Which of the following is NOT a type of Transformer?",
      answer1: "Autobots",
      answer2: "Predacons",
      answer3: "Dinobots",
      answer4: "Gobots",
      correct: 4,
      score: 5,
      story: "story",
    },
    {
      id: 10,
      question: "An alicorn is _________.",
      answer1: "the horn of a unicorn.",
      answer2: "a winged unicorn.",
      answer3: "a type of corn.",
      answer4: "a medical problem with a foot.",
      correct: 1,
      score: 5,
      story: "story",
    },
    {
      id: 12,
      question: "In what movie is the Death Blossom attack used?",
      answer1: "Pokemon",
      answer2: "Star Wars",
      answer3: "The Last Starfighter",
      answer4: "Dragonball",
      correct: 3,
      score: 5,
      story: "story",
    },
    {
      id: 12,
      question: "Who played the character Jack in Legend?",
      answer1: "Bill Murry",
      answer2: "Steven Seagal",
      answer3: "Tom Cruise",
      answer4: "Bruce Willis",
      correct: 3,
      score: 5,
      story: "story",
    },
    {
      id: 13,
      question:
        "In what sci-fi tv series did an alliance of races fight The Shadows?",
      answer1: "Star Trek",
      answer2: "Buck Rogers",
      answer3: "Battlestar Galactica",
      answer4: "Babylon 5",
      correct: 4,
      score: 5,
      story: "story",
    },
    {
      id: 14,
      question: "What anime series featured a Moon Pricess?",
      answer1: "Sailor Moon",
      answer2: "Moon Over Miami.",
      answer3: "My Little Pony",
      answer4: "Strawberry Shortcake",
      correct: 1,
      score: 5,
      story: "story",
    },
    {
      id: 15,
      question: "Which of the following are not Blizzard games?",
      answer1: "Starcraft",
      answer2: "Minecraft",
      answer3: "Warcraft",
      answer4: "Diablo",
      correct: 2,
      score: 5,
      story: "story",
    },
    {
      id: 16,
      question: "Which of the following is not science?",
      answer1: "Astrology",
      answer2: "Chemistry",
      answer3: "Biology",
      answer4: "Physics",
      correct: 1,
      score: 5,
      story: "story",
    },
    {
      id: 17,
      question: "Ludo, the lovable, loyal monster is in what movie?",
      answer1: "Shrek",
      answer2: "Home",
      answer3: "Ghostbusters",
      answer4: "Labyrinth",
      correct: 4,
      score: 5,
      story: "story",
    },
    {
      id: 18,
      question: "What are the mecha in Endless Waltz known as?",
      answer1: "Priest",
      answer2: "Gundams",
      answer3: "Cyborgs",
      answer4: "Gadgets",
      correct: 2,
      score: 5,
      story: "story",
    },
    {
      id: 19,
      question: "What drawing style is used to design buildings?",
      answer1: "Line drawing",
      answer2: "Caricature",
      answer3: "Geometry",
      answer4: "Architecture",
      correct: 4,
      score: 5,
      story: "story",
    },
    {
      id: 20,
      question: "What is the name of unicorns the firstborn?",
      answer1: "Assallum",
      answer2: "Amaltheia",
      answer3: "Arboron",
      answer4: "Andrameda",
      correct: 1,
      score: 5,
      story: "story",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const randomQuestionIndex = () => {
    let newIndex = Math.floor(Math.random() * questionList.length);
    while (questionsDone.includes(newIndex)) {
      newIndex = Math.floor(Math.random() * questionList.length);
    }
    questionsDone.push(newIndex);
    return newIndex;
  };

  // const randomArray = () => {
  //   let currentIndex = questionList.length;
  //   while (currentIndex != 0) {
  //     const randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex--;
  //     [questionList[currentIndex], questionList[randomIndex]] = [
  //       questionList[randomIndex],
  //       questionList[currentIndex],
  //     ];
  //   }
  // };

  const handleNavigation = (direction: string) => {
    console.log(questionsDone, currentPos, direction);
    if (direction == "B" && currentPos == 0) {
      setActiveIndex(questionsDone[0]);
    } else if (direction == "B") {
      currentPos -= 1;
      setActiveIndex(questionsDone[currentPos]);
    } else if (direction == "F" && currentPos + 1 < questionsDone.length) {
      currentPos += 1;
      setActiveIndex(questionsDone[currentPos]);
    } else {
      currentPos += 1;
      setActiveIndex(randomQuestionIndex());
    }
  };

  // const [isCorrect, setIsCorrect] = useState("");
  const [selected, setSelected] = useState(false);
  // const [showStory, setShowStory] = useState(false);

  // const handleCorrect = (index: number, guess: number) => {
  const Button ()
    if (questionList[index].correct == guess) {
      // setIsCorrect("green");
      // setShowStory(true);
      // return "green";
      return (
        <button
          className="answer"
          style={{
            backgroundColor: selected ? handleCorrect(index, 1) : "",
          }}
          onClick={() => handleSelected()}
        >
          {currentQuestion.answer1}
        </button>
      );
    // } else {
    //   // setIsCorrect("red");
    //   return "red";
    // }
  };

  const handleSelected = () => {
    setSelected(true);
  };

  return (
    <>
      {questionList.map((currentQuestion, index) => (
        <div
          key={index}
          // data-answer={currentQuestion.correct}
          // data-score={currentQuestion.score}
          style={{ display: index == activeIndex ? "block" : "none" }}
        >
          <div className="questionGrid">
            <div className="question">{currentQuestion.question}</div>
            <div className="r1c2">
              <Button({currentQuestion.answer2}) />
            </div>
            <div className="r1c4">
              <button
                className="answer"
                style={{
                  backgroundColor: selected ? handleCorrect(index, 2) : "",
                }}
                onClick={() => handleSelected}
              >
                {currentQuestion.answer2}
              </button>
            </div>
            <div className="r2c2">
              <button
                className="answer"
                style={{
                  backgroundColor: selected ? handleCorrect(index, 3) : "",
                }}
                onClick={() => handleSelected}
              >
                {currentQuestion.answer3}
              </button>
            </div>
            <div className="r2c4">
              <button
                className="answer"
                style={{
                  backgroundColor: selected ? handleCorrect(index, 4) : "",
                }}
                onClick={() => handleSelected}
              >
                {currentQuestion.answer4}
              </button>
            </div>
            <div className="r3">
              <p className="story hidden">{currentQuestion.story}</p>
            </div>
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
