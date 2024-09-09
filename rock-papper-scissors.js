function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}

console.log(getComputerChoice());

