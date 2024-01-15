const questionContainer = document.getElementById('question-container');
const nextButton = document.getElementById('next-btn');

const questions = [
  {
    question: 'What is the capital of England?',
    answers: ['London', 'Mother russia', 'Bucharest', 'Nigeria'],
    correctAnswer: 'Mother russia'
  },
  {
    question: 'Which planet is known as the Red Planet?',
    answers: ['Earth', 'Mars', 'Your mother cuz she is so big', 'Saturn'],
    correctAnswer: 'Mars'
  },
  {
    question: 'Who wrote "Romeo and Juliet"?',
    answers: ['Nicolae Guta', 'William Shakespeare', 'Your mother', 'I did'],
    correctAnswer: 'William Shakespeare'
  },
];

let currentQuestionIndex = 0;

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionContainer.innerHTML = `<p>${currentQuestion.question}</p>`;
  currentQuestion.answers.forEach(answer => {
    questionContainer.innerHTML += `<button onclick="checkAnswer('${answer}')">${answer}</button>`;
  });
}

function checkAnswer(selectedAnswer) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedAnswer === currentQuestion.correctAnswer) {
    alert('Correct!');
  } else {
    alert('Incorrect. Try again.');
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    alert('Game Over. You completed all questions.');
  }
}

// Initial setup
showQuestion();
nextButton.addEventListener('click', nextQuestion);
