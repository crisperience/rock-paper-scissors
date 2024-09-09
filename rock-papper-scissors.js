let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}

function getHumanChoice() {
    let choice = prompt("Choose Rock, Paper, or Scissors:");
    choice = choice.toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        console.log("Invalid choice! Please choose Rock, Paper, or Scissors.")
        return getHumanChoice();
    }
}





