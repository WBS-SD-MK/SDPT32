// You can work here or download the template
/**
 * HTML with Tailwind CSS:
A card at the top to display the score (User vs. Computer).
A card with three buttons for selecting Rock, Paper, or Scissors.
An empty card to display the result of each round.
A button to play the round.
JavaScript:
Listen for a click on the play button.
Check if the user selected something; if not, alert the user.
Mark the user selected button in some way.
Randomly select Rock, Paper, or Scissors for the computer.
Compare the user’s selection with the computer’s selection.
Display the result in the output area.
Update the score and the DOM accordingly.
 */
// Select elements from DOM
const userScoreElement = document.getElementById('user-score');
const computerScoreElement = document.getElementById('computer-score');
const resultElement = document.getElementById('result');
const playButton = document.getElementById('play-button');
const selectionButtons = document.querySelectorAll('#selection button');
// const rockButton = document.getElementById('rock');
// const paperButton = document.getElementById('paper');
// const scissorsButton = document.getElementById('scissors');
// Variables for score and choice
let userScore = 0;
let computerScore = 0;
let userChoice = '';
const choices = ['rock', 'paper', 'scissors'];

selectionButtons.forEach((el) => el.addEventListener('click', (e) => selectChoice(e.target.id)));

playButton.addEventListener('click', playRound);

function selectChoice(choice) {
  userChoice = choice;
  selectionButtons.forEach((el) => {
    if (el.id === choice) {
      el.classList.add('line-through');
    } else {
      el.classList.remove('line-through');
    }
  });
}

function playRound() {
  if (!userChoice) {
    alert('Please select Rock, Paper, or Scissors!');
    return;
  }

  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  const result = determineWinner(userChoice, computerChoice);

  resultElement.textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result.message}`;

  if (result.winner === 'user') {
    userScore++;
    userScoreElement.textContent = userScore;
  } else if (result.winner === 'computer') {
    computerScore++;
    computerScoreElement.textContent = computerScore;
  }

  userChoice = ''; // Reset user choice
  selectionButtons.forEach((el) => el.classList.remove('line-through'));
}

function determineWinner(user, computer) {
  if (user === computer) {
    return { winner: 'none', message: "It's a tie!" };
  } else if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    return { winner: 'user', message: 'You win!' };
  } else {
    return { winner: 'computer', message: 'Computer wins!' };
  }
}
