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

const startBtn = document.getElementById('start-btn');
const span = document.getElementById('counter');
const optionLIAll = document.querySelectorAll('.option');
let remainingTime = 50;
let currentQuestionIndex = -1;

startBtn.addEventListener('click', function() {
  span.textContent = remainingTime;
  changeCards();
  setInterval(updateTime, 1000);
  displayNextQuestion();
});

optionLIAll.forEach((li) => {
  li.addEventListener('click', () => {
    const chosenAnswer = li.innerText;
    if (isCorrect(chosenAnswer, currentQuestionIndex)) {
      console.log(true);
    }
  })
});

function isCorrect(answer, questionIndex) {
  return answer === questions[questionIndex]['answer'];
}

 function updateTime() {
        if (remainingTime === 0) return;
        remainingTime--;
        span.textContent = remainingTime;
  }

  
  function displayNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) return;

    displayCurrentQuestion();
}

function displayCurrentQuestion() {
    const questionContainer = document.getElementById("questions");
    const currentQuestion = questions[currentQuestionIndex];
    const theQuestion = currentQuestion['questionText'];
    const theOptions = currentQuestion['options'];
    const option1 = theOptions[0];
    const option2 = theOptions[1];
    const option3 = theOptions[2];
    const option4 = theOptions[3];
    const correctAnswer = currentQuestion['answer'];

    questionContainer.querySelector('#question-text').textContent = theQuestion;
    questionContainer.querySelector('#option1').textContent = option1;
    questionContainer.querySelector('#option2').textContent = option2;
    questionContainer.querySelector('#option3').textContent = option3;
    questionContainer.querySelector('#option4').textContent = option4;
}

function changeCards() {
  document.getElementById('welcome').style.display = 'none';
  document.getElementById('questions').style.display = 'block';
}


