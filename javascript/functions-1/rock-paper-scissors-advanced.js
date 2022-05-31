// console.log("rps");

// Define a hands array with the values 'rock', 'paper', and 'scissors'
const hands = ["rock", "paper", "scissors"];
// console.log(hands[0]);
// Define a function getComputerHand() that returns a hand from the array using parseInt(Math.random()*10) % 3)

// console.log(randomNumber);
function getComputerHand() {
  const randomNumber = parseInt(Math.random() * 10) % 3;
  const computerHand = hands[randomNumber];
  return computerHand;
}

// Define a function called compare() that
function compare(computerChoice, personChoice) {
  if (computerChoice === personChoice) {
    return "It's a tie!";
  } else if (
    (computerChoice === "paper" && personChoice === "scissors") ||
    (computerChoice === "rock" && personChoice === "paper") ||
    (computerChoice === "scissors" && personChoice === "rock")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}
// Takes two choices as arguments
// Determines the winner
// Logs the hands played by each
// Returns a string indicating the result
// Play a game

const computerHand = getComputerHand();
// const playerHand = hands[parseInt(Math.random() * 10) % 3];
let hasEnteredValidText = false;
let playerHand;

while (hasEnteredValidText === false) {
  playerHand = prompt("Select 'rock', 'paper', or 'scissors'.");
  if (!hands.includes(playerHand)) {
    alert("You entered an invalid response.");
  } else {
    console.log(computerHand);
    console.log(playerHand);
    hasEnteredValidText = true;
    const result = compare(computerHand, playerHand);
    console.log(result);
  }
}
