// console.log("rps");

const paperEl = document.getElementById("paper");
const rockEl = document.getElementById("rock");
const scissorsEl = document.getElementById("scissors");
const gameResultEl = document.getElementById("game-result");

paperEl.addEventListener("click", () => {
  //   alert("Paper");
  checkForWinner("paper");
});

rockEl.addEventListener("click", () => {
  //   alert("Rock");
  checkForWinner("rock");
});

scissorsEl.addEventListener("click", () => {
  //   alert("Scissors");
  checkForWinner("scissors");
});

const arrayOfOptions = ["paper", "rock", "scissors"];

function checkForWinner(userChoice) {
  const computerChoice = arrayOfOptions[Math.floor(Math.random() * 3)];

  const computerChoiceEl = document.createElement("h2");
  computerChoiceEl.innerText = computerChoice;
  document.querySelector(".computer-choice").innerHTML = "";
  document.querySelector(".computer-choice").append(computerChoiceEl);

  if (userChoice === computerChoice) {
    // alert("Tie game!");
    gameResultEl.innerText = "Tie game!";
  } else {
    gameResultEl.innerText = "You lose!";
  }
}
