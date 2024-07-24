// 1) Define any variables used to track the state of the game:
//    The players choice
//    Current round data
//          Chioices
//          Correct answer
//          Question
//    The match result - win/lose
//    A result message - display who won that round

// 2) Define the required constants:
//    There are only 3 choices a user can make, create buttons
//    We'll need a reference to a DOM element to display masseges for both questions and answers

// 3) Handle a player clicking a choice button

// 4) Handle generating random selections for the computer player

// 5) Compare the player choice to the computer choice, and check for a winner

// 6) Render a win/lose message to the player 
//    Include both player and computer selections in the message
//    Clearly indicate who won


/*-------------------------------- Constants --------------------------------*/

const questions = [
    {
      question: "What is the capital of France?",
      answers: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: ["Earth", "Jupiter", "Mars", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      question: "What is the largest mammal?",
      answers: ["Elephant", "Blue Whale", "Giraffe", "Human"],
      correctAnswer: "Blue Whale"
    }
  ];
function displayQuestions (questionObj) {
};
function getUserAnswer() {
  let answer;
  do {
    answer = prompt()
  }
}
document.getElementById("questionButton").addEventListener("click", () => {
  document.getElementById("questionDisplay").textContent = question;
});
const resultDisplayEl = document.querySelector('#result-display');
const displayQuestion = (index) => {
  const questionObj = questions[index];
  const questionText = questionObj.question;
  const answersArray = questionObj.answers;
};
document.querySelectorAll('.card button').forEach(button => {
  button.addEventListener("click", (event) => {
      const index = event.target.getAttribute('data-index'); 
      displayQuestion(index); 
  });
});
/*-------------------------------- Variables --------------------------------*/
let playerChoice;
let message;
/*------------------------ Cached Element References ------------------------*/
const display  = document.getElementById('result-display')
const cardButtons = document.querySelectorAll('.card button')
/*-------------------------------- Functions --------------------------------*/

function determineWinner() {
    if (playerChoice === questions.correctAnswers) {
        return "You Won!";
} else {
    return "You Lost!"
}
}


function intializeGame() {
}
/*----------------------------- Event Listeners -----------------------------*/
document.querySelector('Card 1').addEventListener('click');
document.querySelector('Card 2').addEventListener('click', Card);
document.querySelector('Card 3').addEventListener('click', Card);