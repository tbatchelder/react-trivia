function Questions() {
  const questionList = [
    {
      question: "What is a mimic?",
      answer1: "A non-speaking pantomimer.",
      answer2: "Someone that imitates you.",
      answer3: "A carnivorous chest.",
      answer4: "A miniature microphone.",
      correct: 3,
      score: 5,
      story:
        "An interesting one.  This is not only from the Dungeons & Dragons game I loved playing as a teen but could also be used to descibe me.  I look like a person but tend to act ... well ... differently and am therefore often misunderstood.  So, I've become good at playing a part, usually a wallflower.",
    },
    {
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

  // questionList.map((answers, question) => <div>{q}</div>);

  return (
    <>
      <div className="visible">
        <div>{questionList[0][0]}</div>
        <div>{questionList[0][1]}</div>
        <div>{questionList[0][2]}</div>
        <div>{questionList[0][3]}</div>
        <div>{questionList[0][4]}</div>
        <div>{questionList[0][7]}</div>
        <div>Previous</div>
        <div>Next</div>
      </div>
    </>
  );
}

export default Questions;
