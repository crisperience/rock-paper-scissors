let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}

function playRound(humanChoice, computerChoice) {
    const resultsDiv = document.getElementById("results");
    const scoreDiv = document.getElementById("score");

    if (humanChoice === computerChoice) {
        resultsDiv.textContent = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultsDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        resultsDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    // Update the score inside the playRound function
    scoreDiv.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`;

    // Check if either player has reached 5 points
    if (humanScore === 5) {
        resultsDiv.textContent = "Congratz! You won the game!";
        disableButtons();
    } else if (computerScore === 5) {
        resultsDiv.textContent = "AI is taking over the world!";
        disableButtons();
    }
}

function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

document.getElementById("rock").addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

document.getElementById("paper").addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

document.getElementById("scissors").addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});
