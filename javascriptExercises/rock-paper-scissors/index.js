const playables = ['Rock', 'Paper', 'Scissors'];
let playerSelection; 
let computerSelection;

function getPlayerSelectedChoice(button) {
    if (button.id === '1') {
        return playables[0];
    } 
    if (button.id === '2') {
        return playables[1];
    } 
    return playables[2];
}

function getComputerChoice() {
    return playables[Math.floor(Math.random()*playables.length)];
}

function playGame(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw";
    }
    else if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        } else {
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
    }
    else if (playerSelection === 'Paper') {
        if (computerSelection === 'Scissors') {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        } else {
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
    }
    else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        } else {
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
    }

}

const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.addEventListener('click', e => {
        let playerSelection = getPlayerSelectedChoice(button);
        let computerSelection = getComputerChoice();
        let outcome = playGame(playerSelection, computerSelection);

        console.log(outcome);
    });
});



