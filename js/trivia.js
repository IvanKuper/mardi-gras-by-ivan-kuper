// const startButton = document.getElementById('start-btn')
// const nextButton = document.getElementById('next-btn')
// const questionContainerElement = document.getElementById('question-container')
// const questionElement = document.getElementById('question')
// const answerButtonsElement = document.getElementById('answer-buttons')

// let shuffledQuestions, currentQuestionIndex

// startButton.addEventListener('click', startGame)
// nextButton.addEventListener('click', () => {
//     currentQuestionIndex++
//     setNextQuestion()
// })

// function startGame() {
//     console.log('started');
//     startButton.classList.add('hide')
//     shuffledQuestions = questions.sort(() => Math.random() - .5)
//     currentQuestionIndex = 0
//     questionContainerElement.classList.remove('hide')
//     setNextQuestion()
// }

// function setNextQuestion() {
//     resetState()
//     showQuestion(shuffledQuestions[currentQuestionIndex])
// }

// function showQuestion(question) {
//     questionElement.innerText = question.question
//     question.answers.forEach(answer => {
//         const button = document.createElement('button')
//         button.innerText = answer.text
//         button.classList.add('button-trivia')
//         if (answer.correct) {
//             button.dataset.correct = answer.correct
//         }
//         button.addEventListener('click', selectAnswer)
//         answerButtonsElement.appendChild(button)
//     })
// }

// function resetState() {
//     nextButton.classList.add('hide')
//     while (answerButtonsElement.firstChild) {
//         answerButtonsElement.removeChild(answerButtonsElement.firstChild)
//     }
// }

// function selectAnswer(e) {
//     const selectedButton = e.target
//     const correct = selectedButton.dataset.correct
//     Array.from(answerButtonsElement.children).forEach(button => {
//         setStatusClass(button, button.dataset.correct)
//     })
//     if (shuffledQuestions.length > currentQuestionIndex + 1) {
//         nextButton.classList.remove('hide')
//     } else {
//         startButton.innerText = 'Restart'
//         startButton.classList.remove('hide')
//     }
// }

// function setStatusClass(element, correct) {
//     clearStatusClass(element)
//     if (correct) {
//         element.classList.add('btn-correct')
//     } else {
//         element.classList.add('btn-wrong')
//     }
// }

// function clearStatusClass(element) {
//     element.classList.remove('btn-correct')
//     element.classList.remove('btn-wrong')
// }

// const questions = [{
//     question: 'What is the day before Mardi Gras called?',
//     answers: [{
//         text: 'Lundi Gras',
//         correct: true
//     }, {
//         text: 'Potato Gras',
//         correct: false
//     }, {
//         text: 'Fun Gras',
//         correct: false
//     }, {
//         text: 'Ruma Gras',
//         correct: false
//     }]
// }, {
//     question: 'What day comes after Mardi Gras?',
//     answers: [{
//         text: 'Wednesday',
//         correct: true
//     }, {
//         text: 'Sunday',
//         correct: false
//     }, {
//         text: 'Friday',
//         correct: false
//     }, {
//         text: 'Saturday',
//         correct: false
//     }]
// }, {
//     question: 'When was the earliest known carnival celebration?',
//     answers: [{
//         text: '1367',
//         correct: false
//     }, {
//         text: '1294',
//         correct: true
//     }, {
//         text: '1990',
//         correct: false
//     }, {
//         text: '1295',
//         correct: false
//     }]
// }, {
//     question: 'How many king cakes are sold during an average carnival season?',
//     answers: [{
//         text: '10',
//         correct: false
//     }, {
//         text: '30,000',
//         correct: false
//     }, {
//         text: '100,000',
//         correct: false
//     }, {
//         text: '500,000',
//         correct: true
//     }]
// }, ]

// const questions = [{
//         q: "What is the day before Mardi Gras called?",
//         a: ["Lundi Gras", "Potato Gras", "Fun Gras", "Ruma Gras"],
//     },
//     {
//         q: "What day comes after Mardi Gras?",
//         a: ["Sunday", "Wednesday", "Friday", "Saturday"],
//     },
//     {
//         q: "When was the earliest known carnival celebration?",
//         a: ["1367", "1294", "1990", "1295"],
//     },
//     {
//         q: "How many king cakes are sold during an average carnival season?",
//         a: ["10", "30,000", "100,000", "300,000"],
//     }
// ];

// const correctAnswers = [
//     "Lundi Gras",
//     "Wednesday",
//     "1294",
//     "300,000",
// ];

// var start = document.getElementById("start-container");
// var game = document.getElementById("question-container");
// var controls = document.getElementById("controls-btns");
// var score = document.getElementById("score");
// var questionCount = document.getElementById("question-count");
// var answerButtons = document.getElementById("answer-buttons");
// var question = document.getElementById("question");
// var position;
// var scoreIndicator;

// function startQuiz() {
//     start.style.display = "none";
//     game.style.display = "block";
//     controls.style.display = "none";
//     position = 0;
//     scoreIndicator = 0;
//     switchQuestion();
// }

// function switchQuestion() {
//     if (position == 10) {
//         results();
//     } else {
//         answerButtons.innerHTML = "";
//         score.innerHTML = scoreIndicator;
//         for (i = 0; i < questions[position].a.length; i++) {
//             questionCount.innerHTML = `Question # ${position + 1} /10`;
//             answerButtons.innerHTML += `<button class="button-trivia" onclick="check(event)">${questions[position].a[i]} </button>`;
//         }
//         question.innerHTML = `<div id="question" class="text-quiz">${questions[position].q}</div>`;
//     }

// }

// function check(event) {
//     if (correctAnswers.includes(event.target.innerHTML)) {
//         scoreIndicator += 10;
//         switchQuestion();
//         scoreIndicator++;
//     } else if (event.target.innerHTML != correctAnswers) {
//         switchQuestion();
//         position++;
//     }

// }

// var globalQuestions = [{
//         q: "What is the day before Mardi Gras called?",
//         a: ["Lundi Gras", "Potato Gras", "Fun Gras", "Ruma Gras"],
//     },
//     {
//         q: "What day comes after Mardi Gras?",
//         a: ["Sunday", "Wednesday", "Friday", "Saturday"],
//     },
//     {
//         q: "When was the earliest known carnival celebration?",
//         a: ["1367", "1294", "1990", "1295"],
//     },
//     {
//         q: "How many king cakes are sold during an average carnival season?",
//         a: ["10", "30,000", "100,000", "300,000"],
//     },
// ];


// var correctAnswers = [
//     "Lundi Gras",
//     "Wednesday",
//     "1294",
//     "300,000",
// ];

// var clickedButton
// var globalPosition = 0;

// var restart = document.getElementById("restart-btn");
// var msg = document.getElementById("startMsgs");
// var questions = document.querySelector("#question");
// var buttonBoxes = document.querySelector("#answer-buttons");
// var questionsC = document.querySelector("question-container");
// var score = -10;

// function startGame() {
//     if (globalPosition == correctAnswers.length) {
//         globalPosition = 0;
//         score = -10;
//         restart.style.visibility = "visible";
//     } else {
//         score += 10;
//         msg.classList.add = ("hide");
//         questions.style.visibility = "visible";
//         buttonBoxes.style.visibility = "visible";

//         var start = document.querySelector("#start-btn");
//         start.classList.add = ("hide");

//         document.querySelector("#question").innerHTML = `<h3>${globalQuestions[globalPosition].q}</h3>`;

//         document.querySelector("#answer-buttons").innerHTML = "";
//         for (var i = 0; i < globalQuestions[globalPosition].a.length; i++) {
//             document.querySelector("#answer-buttons").innerHTML +=
//                 `<button class="button-trivia" id="btn-trivia" onclick="checkAnswer(event)">${globalQuestions[globalPosition].a[i]}
//         </button>`;
//         }
//         console.log(score);
//     }

// }

// function checkAnswer(event) {
//     clickedButton = event.target
//     if (correctAnswers.includes(clickedButton.innerText)) {
//         event.target.style.backgroundColor = "green";
//         globalPosition++;
//         startGame();
//     } else {
//         clickedButton.style.backgroundColor = "red";
//     }
// }



// //Create a quiz class

// class Quiz {
//     constructor (questions){
//         this.score = 0;
//         this.questions = questions;
//         this.questionsIndex = 0;
//     }

//     getQuestionIndex(){
//         return this.questions[this.getQuestionIndex];
//     }

//     guess(answer){
//         if (this.getQuestionIndex().isCorrectAnswer(answer)){
//             this.score++;
//         }
//         this.questionsIndex++;
//     }

//     isEnded(){
//         return this.questionsIndex === this.questions.length;
//     }
// }

// // Create a question class

// class Question {
//     constructor( text, choices, answer){
//         this.text = text;
//         this.choices = choices;
//         this.answer = answer;
//     }

//     isCorrectAnswer(choice){
//         return this.answer === choice;
//     }
// }

// // Display question

// function displayQuestion() {
//     if (quiz.isEnded()){
//         showScores();
//     } else {
//         // show question
//         let questionElement = document.getElementById("question");
//         questionElement.innerHTML = quiz.getQuestionIndex().text;

//         //show options
//         let choices = quiz.getQuestionIndex().choices;
//         for( let i = 0; i < choices.length; i++){
//             let choiceElement = document.getElementById("choice" + i);
//             choiceElement.innerHTML = choices[i];
//             guess("button-trivia" + i, choices[i]);
//         }

//         showProgress();
//     }
// };

// // Guess function

// function guess(id, guess){
//     let button = document.getElementById(id);
//     button.onclick = function() {
//         quiz.guess(guess);
//         displayQuestion();
//     }
// }

// // Show quiz progress

// function showProgress(){
//     let currentQuestionNumber = quiz.questionsIndex + 1;
//     let progressElement = document.getElementById("progress");
//     progressElement.innerHTML = 
//     `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
// }

// // Show score

// function showScores() {
//     let quizEndHTML = 
//     ` <h2> Quiz completed! </h2>
//       <h3 id="score">You scored: ${quiz.score} of ${quiz.questions.length}</h3>
//       <div class="quiz-repeat">
//         <a href="trivia.html"> Take quiz again! </a> 
//       </div>
//     `;
//     let quizElement = document.getElementById("quiz");
//     quizElement.innerHTML = quizEndHTML;
// }

// // Create quiz questions
// let questions = [
//     new Question(
//         "What is the day before Mardi Gras called?", [
//             "Lundi Gras", "Potato Gras", "Fun Gras", "Ruma Gras"], "Lundi Gras"
//     ),
//     new Question(
//         "What day comes after Mardi Gras?", 
//         ["Sunday", "Wednesday", "Friday", "Saturday"], "Wednesday"
//     ),
//     new Question(
//         "When was the earliest known carnival celebration?", 
//         ["1367", "1294", "1990", "1295"], "1294"
//     ),
//     new Question(
//         "How many king cakes are sold during an average carnival season?", 
//         ["10", "30,000", "100,000", "300,000"], "300,000"
//     ),
// ];

// let quiz = new Quiz(questions);

// // display question
// displayQuestion();

let questions = [
  {
  question: "What is the day before Mardi Gras called?",
  a: "Lundi Gras",
  b: "Potato Gras",
  c: "Fun Gras",
  d: "Ruma Gras",
  answer: "a",
  },
  {
  question: "What day comes after Mardi Gras?",
  a: "Sunday",
  b: "Wednesday",
  c: "Friday",
  d: "Saturday",
  answer: "b",
  },
  {
  question: "When was the earliest known carnival celebration?",
  a: "1367",
  b: "1294",
  c: "1990",
  d: "1295",
  answer: "b",
  },
  {
  question: "How many king cakes are sold during an average carnival season?",
  a: "10",
  b: "30,000",
  c: "100,000",
  d: "500,000",
  answer: "d",
  },
  {
  question: "What does green signify during Mardi Gras?",
  a: "Faith",
  b: "Power",
  c: "Love",
  d: "Nothing",
  answer: "a",
  },
  {
  question: "What does gold signify during Mardi Gras?",
  a: "Faith",
  b: "Power",
  c: "Love",
  d: "Nothing",
  answer: "b",
  },
  {
  question: " How many pounds of beads are thrown during an average New Orleans Mardi Gras celebration?",
  a: "100 million",
  b: "1 million",
  c: "2 million",
  d: "25 million",
  answer: "d",
  },
  {
  question: "How many times have Mardi Gras parades been canceled in New Orleans?",
  a: "10",
  b: "100",
  c: "13",
  d: "Never been cancele",
  answer: "c",
  },
  {
  question: "In which year did Mardi Gras move its New Orleans celebration dates to not interfere with the Super Bowl?",
  a: "2000",
  b: "2022",
  c: "2010",
  d: "2013",
  answer: "d",
  },
  {
  question: "The average float rider in New Orleans spends how much for their costume, beads and other souvenirs for Mardi Gras?",
  a: "$500",
  b: "$5000",
  c: "$50",
  d: "$500,000",
  answer: "a",
  },
  {
  question: "What is the signature Mardi Gras dessert?",
  a: "King cake",
  b: "Queen cake",
  c: "Prince cake",
  d: "Yummy cake",
  answer: "a",
  },
];


const question = document.getElementById("question");
const answers = Array.from(document.getElementsByClassName("answer-text"));
const questionCounterText = document.getElementById("counter");
const scoreText = document.getElementById("score");

let questionCounter;
let score;
const maxQuestions = 10;
let acceptingAnswers;

function startGame () {
  questionCounter = 0;
  score = 0;
  acceptingAnswers = true;
  scoreText.innerText = score;
  availableQuestions = getRandomQuestions(questions, maxQuestions);
  getNewQuestion();
};

const getRandomQuestions = (position, index) => {
  let len = position.length;

  const shuffled = [...position].sort(() => 0.5 - Math.random());

  return (selected = shuffled.slice(0, index));
};

const getNewQuestion = () => {
  if (availableQuestions.length === 0) {
    displayResults();
    return;
  }

  questionCounter++;
  questionCounterText.innerText = `${questionCounter}/${maxQuestions}`;

  currentQuestion = availableQuestions[0];
  question.innerText = currentQuestion.question;

  answers.forEach((answer) => {
    answer.innerText = currentQuestion[answer.dataset["answer"]];
  });

  //TODO add randomization

  answers.forEach((answer) => {
    answer.addEventListener("click", (event) => {
      if (!acceptingAnswers) {
        return;
      }
      acceptingAnswers = false;
      const clickedAnswer = event.target;

      const anwseredLetter = clickedAnswer.dataset["answer"];

      let classToApply = "incorrect";

      if (anwseredLetter === currentQuestion.answer) {
        score++;
        scoreText.innerText = score;
        classToApply = "correct";
      }

      clickedAnswer.parentElement.classList.add(classToApply);

      setTimeout(() => {
        clickedAnswer.parentElement.classList.remove(classToApply);
        getNewQuestion();
        acceptingAnswers = true;
      }, 1000);
    });
  });
  availableQuestions.shift();
};

displayResults = () => {
  const myModalEl = document.getElementById("myModal");
  const modal = new mdb.Modal(endGameModal);
  const modalBody = document.getElementById("modal-body");
  modalBody.innerText = `You scored: ${score}`;
  modal.show();
  acceptingAnswers = false;
};


startGame();