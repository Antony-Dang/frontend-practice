const prompt = require('prompt-sync')({sigint: true});

const playables = ['Rock', 'Paper', 'Scissors'];
let playerSelection; 
let computerSelection;

function getPlayerSelectedChoice() {
    let inputSelection;
    let hasSelected = false;
    while (!hasSelected) {
        inputSelection = prompt("Select from 'Rock' / 'Paper' / 'Scissors': ");
        inputSelection = inputSelection.toLowerCase();
        inputSelection = inputSelection[0].toUpperCase() + inputSelection.slice(1, inputSelection.length);

        if (playables.includes(inputSelection)) {
            hasSelected = true;
            return inputSelection;
        }
        console.log("Invalid input");
    }
}

function getComputerChoice() {
    return playables[Math.floor(Math.random()*playables.length)];
}

function playGame(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a draw");
    }
    else if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        } else {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        }
    }
    else if (playerSelection === 'Paper') {
        if (computerSelection === 'Scissors') {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        } else {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        }
    }
    else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        } else {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        }
    }

}


playerSelection = getPlayerSelectedChoice();
computerSelection = getComputerChoice();
playGame(playerSelection, computerSelection)




