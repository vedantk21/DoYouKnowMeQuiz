var readlineSync = require('readline-sync');
var userName = readlineSync.question("What is your name? "); 
var welcomeMessage = "Welcome to 'How well do you know VeeKay?' quiz, " + userName + "!"; 
var score = 0;

console.log(welcomeMessage);

//questions, array of objects
var questions = [{
    question: "What is my real name? ",
    answer: "Vedant"
  }, {
    question: "What is my age? ",
    answer: "18"
  }, {
    question: "What is my profession? ",
    answer: "Student" 
  }, {
    question: "Which is my birthday month? ",
    answer: "February"
  }, {
    question: "Did I actually dropout of college? ",
    answer: "Yes"
}]; 

//play function 
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() == answer.toUpperCase()) {
    console.log("That is correct.");
    score++;
  } else {
    console.log("That is incorrect.");
  }
  console.log("Your score is: " + score);
  console.log("----------------------------------------------------");
}

//loop
for(i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

  store = {
    'username': userName,
    'finalscore': score
}

// data of high score
var highScores = [
  {
    name: "Vedant",
    score: 5
  },

  {
    name: "Mihir",
    score: 4
  }
]


console.log("Your Name & Score: ")
console.log(store.username, " : ", store.finalscore, "\n"); 
console.log("High Scores");

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}
showScores();