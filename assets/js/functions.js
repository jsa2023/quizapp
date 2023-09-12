function startQuiz() {
  counterEl.textContent = remainingTime;
  changeCards();
  interval = setInterval(updateTime, 1000);
  displayNextQuestion();
  leaderBoardEl.style.cursor = 'default';
  leaderBoardEl.removeEventListener('click', showHighscores);
}

function showHighscores() {
  welcomeEl.style.display = 'none';
  cardsEl.style.width = '40rem';
  highscoresEl.style.display = 'block';
}

function isCorrect(answer, questionIndex) {
  return answer === questions[questionIndex]['answer'];
}

 function updateTime() {
        if (remainingTime <= 0) {
          return;
        }
        remainingTime--;
        counterEl.textContent = remainingTime;
  }

  
  function displayNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) return;
    displayCurrentQuestion();
}

function displayCurrentQuestion() {
    resetMessages();
    const questionContainer = document.getElementById("questions");
    const currentQuestion = questions[currentQuestionIndex];
    const theQuestion = currentQuestion['questionText'];
    const theOptions = currentQuestion['options'];
    const option1 = theOptions[0];
    const option2 = theOptions[1];
    const option3 = theOptions[2];
    const option4 = theOptions[3];

    questionContainer.querySelector('#question-text').textContent = theQuestion;
    questionContainer.querySelector('#option1').textContent = option1;
    questionContainer.querySelector('#option2').textContent = option2;
    questionContainer.querySelector('#option3').textContent = option3;
    questionContainer.querySelector('#option4').textContent = option4;
}

function changeCards() {
  welcomeEl.style.display = 'none';
  questionsEl.style.display = 'block';
}

function resetMessages() {
  correctMessageEl.style.display = 'none';
  incorrectMessageEl.style.display = 'none';
}

function isLastQuestionAnswered() {
  return questionsAnswered == questions.length;
}

function getScore() {
  scoreEl.innerText = counterEl.textContent;
}

function stopCounter() {
  clearInterval(interval);
  counterEl.innerText = "";
}

function returnToStartQuiz() {
    allDoneEl.style.display = 'none';
    cardsEl.style.width = '80rem';
    welcomeEl.style.display = 'block';
    leaderBoardEl.style.cursor = 'pointer';
    leaderBoardEl.addEventListener('click', showHighscores);
}

function returnToHomeScreen() {
    highscores.style.display = 'none';
    welcomeEl.style.display = 'block';
    cardsEl.style.width = '80rem';
}

function resetHighscores() {
    localStorage.clear();
    scoreListEl.innerHTML = '';
    returnToHomeScreen();
}