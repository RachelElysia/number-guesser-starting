let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    /*
    * Return random number from 0 to 9.
    */

    return Math.floor(Math.random()*9)
}

function compareGuesses(human, computer, secret) {
    const humanDistance = Math.abs(human-secret);
    const computerDistance = Math.abs(computer-secret);
    if (human > 10 || human < 0) {
        alert('Please Guess a number between 0 and 9.')
    }
    if (humanDistance <= computerDistance) {
        return true
    }
    return false
}

function updateScore(winner) {
    switch (winner) {
        case 'human':
            humanScore++;
            break;
        case 'computer':
            computerScore++;
            break;
    }
}

function advanceRound() {
    currentRoundNumber++;
}


