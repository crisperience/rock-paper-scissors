let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}

function getHumanChoice() {
    let choice = prompt("Choose Rock, Paper, or Scissors:");
    if (choice === null) {
        console.log("No input provided, please try again.");
        return getHumanChoice();
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice.toLowerCase()) {
        console.log("It's a tie!");
    }
    else if (
        (humanChoice === "rock" && computerChoice.toLowerCase() === "scissors") ||
        (humanChoice === "paper" && computerChoice.toLowerCase() === "rock") ||
        (humanChoice === "scissors" && computerChoice.toLowerCase() === "paper")
    ) {
        console.log("You win!");
        humanScore++;
    } else {
        console.log("You lose!");
        computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
