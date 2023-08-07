const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];

const cardsEl = document.getElementById('card');
const leaderBoardEl = document.getElementById('leaderboard');
const highscoresEl = document.getElementById('highscores');
const allDoneEl = document.getElementById('all-done');
const welcomeEl = document.getElementById('welcome');
const questionsEl = document.getElementById('questions');
const startBtn = document.getElementById('start-btn');
const correctMessageEl = document.getElementById('correct');
const incorrectMessageEl = document.getElementById('incorrect');
const back = document.getElementById('back');
const span = document.getElementById('counter');
const optionLIAll = document.querySelectorAll('.option');
let remainingTime = 50;
let currentQuestionIndex = -1;
let questionsAnswered = 0;

leaderBoardEl.addEventListener('click', showHighscores);

back.addEventListener('click', function() {
  highscores.style.display = 'none';
  welcomeEl.style.display = 'block';
  cardsEl.style.width = '80rem';
  disableLeaderBoard();
});

startBtn.addEventListener('click', startQuiz);



optionLIAll.forEach((li) => {
  li.addEventListener('click', () => {
    const chosenAnswer = li.innerText;
    if (isCorrect(chosenAnswer, currentQuestionIndex)) {
      //console.log(true);
      document.getElementById('correct').style.display = 'block';
    }
    else {
      document.getElementById('incorrect').style.display = 'block';
    };
    questionsAnswered += 1;
    setTimeout(function() {
        if (isLastQuestionAnswered()) {
          questionsEl.style.display = 'none';
          cardsEl.style.width = '45rem';
          cardsEl.style.padding = '3rem 4rem';
          allDoneEl.style.display = 'block';
        }
        else {
        remainingTime -= 9;
        displayNextQuestion();
      }
        }
        , 1000);
  });
});