var questionIndex = 0
var score = document.querySelector(".user-score")
var scoreCounter = 0
var timer;
var timerCount;
var title = document.querySelector("title")
var timerElement = document.querySelector(".timer-count")
var scoreCount = document.querySelector(".score")
startButton = document.querySelector(".start-button")
resetButton = document.querySelector(".reset-button")

var myQuestions = [
  {
    question: "What does DOM stand for?",
    answers: ["Document Object Model", "Document Oriented Map", "Derivative Onboard Message", "Direct Online Messaging"],   
    correctAnswer: "Document Object Model"
  },
  {
    question: "Choose the most specific element",
    answers: ["HTML", "Body", "li", "ol"],
    correctAnswer: "li"
  },
  {
    question: "Choose the method that would add an element to the end of a list of children of a parent element",
    answers: ["bind()", "set.add()", "append()", "appendChild()"],
    correctAnswer: "appendChild()"
  },
  {
    question: "Which of the following methods will NOT alter the HTML sheet being referenced?",
    answers: ["setAttribute()", "querySelector()", "createElement()", "textContent()"],
    correctAnswer: "querySelector()"
  },
  {
    question: "What is the native unit of measurement for the setInterval method?",
    answers: ["Seconds", "Milliseconds", "Minutes", "None of the listed"],
    correctAnswer: "Milliseconds"
  },
  {
    question: "What is the proper character used to refer to an HTML class?",
    answers: ["A .", "An @", "A #", "A /"],
    correctAnswer: "A ."
  },
]

startButton.addEventListener("click", startGame)

function startGame() {
  alert("Answer each question correctly to try and reach a new high score! Be careful though, each wrong answer will reduce your remaining time by 10 seconds!")
  showQuestion()
  timerCount = 40 
  startTimer()
};

function showQuestion() {

  var title = document.createElement('h1')
  title.innerHTML = myQuestions[0].question
  document.getElementById("title").innerHTML = myQuestions[questionIndex].question
  document.getElementById("answers").innerHTML = ''
  
  for (let i = 0; i < myQuestions[questionIndex].answers.length; i++) {
      var answers = document.createElement('button')
      answers.setAttribute("class", "question-button")
      console.log("text for button", myQuestions[questionIndex].answers[i])
      answers.innerHTML = myQuestions[questionIndex].answers[i]
      answers.addEventListener("click", clickButton)
      answers.setAttribute("name", myQuestions[questionIndex].answers[i])
      document.getElementById("answers").appendChild(answers)
  }
}

function clickButton(event) {
  
  if(questionIndex >= myQuestions.length) {
      console.log("end game")
  }
  else {
      checkAnswers(event)
      questionIndex++
      showQuestion()
  }
}

function checkAnswers(event) {
  console.log(myQuestions[questionIndex].correctAnswer)
  if(event.target.name === myQuestions[questionIndex].correctAnswer) {
      alert("Correct")
      scoreCounter++
  }
  else {
      alert("Incorrect")
      timerCount -= 10
  }
}

function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount === 0) {
        clearInterval(timer);
        score.textContent = scoreCounter
        alert("The game is over, how did you do?")
      }
  }, 1000);
}

function setScore() {
  scoreCount.textcontent = score;
  localStorage.setItem("score", score);
}

function storeScore() {

}

resetButton.addEventListener("click", function() {
  scoreCounter = 0;
  score.textContent = scoreCounter
})

/*
  var button = document.getElementbyId("save")
  
  button.addEventListener("click", function() {
  localStorage.setItem(document.getElementbyId('initials').value, score)
})
  */  
  // why do a bunch of elements disappear when the score is rendered at the end of the game?


