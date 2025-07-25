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
            console.log("You lose! Rock beats Scissors")
            return 0;
        }
        else {
            console.log("It's a tie, both picked Scissors");
            return 1;
        }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        switch (result) {
            case 0:
                computerScore++;
                break;
            case 2:
                humanScore++;
                break;
        }
    }
    console.log(`You're final score is ${humanScore}`);
    console.log(`Computer's final score is ${computerScore}`);
}

playGame();


