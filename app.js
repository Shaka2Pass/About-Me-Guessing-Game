

const inputNumber = document.getElementById("inputNumber");

const guessButton = document.getElementById("guess-button");

const triesLeft = document.getElementById ("tries-left");

const guessIs = document.getElementById ("guess-is");

const tooHigh = document.getElementById("too-high");

const resultsAre = document.getElementById("results-are");

const resultShown = document.getElementById("resultShown");

let tries = 5;

let correctGuess = 19;

guessButton.addEventListener ('click', () => {
    tries--;
    triesLeft.textContent = tries;
}

