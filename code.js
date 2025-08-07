function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "Paper";
    }
    else if (choice == 1) {
        return "Scissors";
    }
    else {
        return "Rock";
    }
}

function getHumanChoice() {
    const choice = prompt("What will be your choice?");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock") {
        if (computerChoice === "Paper") {
            console.log("You lose! Paper beats Rock");
            return 0;
        }
        else if (computerChoice === "Rock") {
            console.log("It's a tie, both picked Rock")
            return 1;
        }
        else {
            console.log("You win! Rock beats Scissors");
            return 2;
        }
    }
    if (humanChoice === "paper") {
        if (computerChoice === "Paper") {
            console.log("It's a tie, both picked Paper");
            return 1;
        }
        else if (computerChoice === "Rock") {
            console.log("You win! Paper beats Rock")
            return 2;
        }
        else {
            console.log("You lose! Scissors beats Paper");
            return 0;
        }
    }
    if (humanChoice === "scissors") {
        if (computerChoice === "Paper") {
            console.log("You win! Scissors beats Paper");
            return 2;
        }
        else if (computerChoice === "Rock") {
            console.log("You lose! Rock beats Scissors");
            return 0;
        }
        else {
            console.log("It's a tie, both picked Scissors");
            return 1;
        }
    }
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
let hS = 0;
let cS = 0;

rockButton.addEventListener("click", () => {
    let result = playRound("rock", getComputerChoice());
    let currWinner = document.querySelector("#winnerOfRound");
    let humanText = document.querySelector("#humanScore");
    let computerText = document.querySelector("#computerScore");
    switch (result){
        case 0:
            cS++;
            currWinner.textContent = "Your rock lost to paper";
            computerText.textContent = `Computer has won this many: ${cS}`;
            break;
        case 1:
            currWinner.textContent = "Your rock tied";
            break;
        case 2:
            hS++;
            currWinner.textContent = "Your rock beat scissors";
            humanText.textContent = `You have won this many: ${hS}`;
            break;
    }

})
paperButton.addEventListener("click", () => {
    const result = playRound("paper", getComputerChoice);
})
scissorsButton.addEventListener("click", () => {
    const result = playRound("scissors", getComputerChoice);
})
