let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const difference = (a, b) => {
    return Math.abs(a - b);
};

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = difference(humanGuess, targetGuess);
    const computerDifference = difference(computerGuess, targetGuess);
    return humanDifference <= computerDifference;
};

const updateScore = winner => {
    if (winner === 'human'){
        humanScore++
    } else computerScore++
};

const advanceRound = () =>
    currentRoundNumber++;
