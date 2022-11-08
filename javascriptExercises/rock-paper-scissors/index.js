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
        return ["It's a draw", -1];
    }
    else if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            return [`You lose! ${computerSelection} beats ${playerSelection}`, 0];
        } else {
            return [`You win! ${playerSelection} beats ${computerSelection}`, 1];
        }
    }
    else if (playerSelection === 'Paper') {
        if (computerSelection === 'Scissors') {
            return [`You lose! ${computerSelection} beats ${playerSelection}`, 0];
        } else {
            return [`You win! ${playerSelection} beats ${computerSelection}`, 1];
        }
    }
    else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            return [`You lose! ${computerSelection} beats ${playerSelection}`, 0];
        } else {
            return [`You win! ${playerSelection} beats ${computerSelection}`, 1];
        }
    }

}

const buttons = document.querySelectorAll('button')
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const roundWinner = document.querySelector('.roundWinner');
const overallWinner = document.querySelector('.overallWinner');
let round = 1;

buttons.forEach(button => {
    button.addEventListener('click', e => {
        if (overallWinner.textContent.length !== 0) {
            return
        }

        let playerSelection = getPlayerSelectedChoice(button);
        let computerSelection = getComputerChoice();
        let outcome = playGame(playerSelection, computerSelection);

        displayRoundWin(outcome[0], round);
        increaseScore(outcome[1]);
        checkWinner();
        round ++;
    });
});

function displayRoundWin(outcome, round) {
    roundWinner.textContent = `Round ${round}: ${outcome}`;
}

function increaseScore(outcome) {
    if (outcome === 1) {
        currScore = parseInt(playerScore.textContent);
        playerScore.textContent = currScore + 1;
    } else {
        currScore = parseInt(computerScore.textContent);
        computerScore.textContent = currScore + 1;
    }
    
}

function checkWinner() {
    currPlayerScore = parseInt(playerScore.textContent);
    currCompScore = parseInt(computerScore.textContent);

    if (currPlayerScore === 5) {
        overallWinner.textContent = 'You won!'
    } 
    if (currCompScore === 5) {
        overallWinner.textContent = 'Computer won!'
    } 
}


