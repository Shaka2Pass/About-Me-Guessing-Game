import numCompare from './numCompare.js';

const inputNumber = document.getElementById("input-field");

const guessButton = document.getElementById("guess-button");

const triesLeft = document.getElementById ("tries-left");

const guessIs = document.getElementById ("guess-is");

const tooHigh = document.getElementById("too-high");

const resultsAre = document.getElementById("results-are");

const resultShown = document.getElementById("resultShown");

let tries = 5;

const correctGuess = 12;

guessButton.addEventListener ('click', () => {
    tries--;
    triesLeft.textContent = tries;

    console.log('Some holdover', Number(inputNumber.value));

    if (numCompare(Number(inputNumber.value), correctGuess) === -1) 
    {tooHigh.textContent = 'too low';
    
    }

    if (numCompare(Number(inputNumber.value), correctGuess) === 1) 
    {tooHigh.textContent = 'too high';
    }

    if (numCompare(Number(inputNumber.value), correctGuess) === 0) {
        tooHigh.textContent = 'correct';
        resultsAre.textContent = ' YOU WON!';
        guessButton.disabled = true;
    }

    if (tries === 0 && numCompare(Number(inputNumber.value), correctGuess) !==0){
        guessButton.disabled = true;resultsAre.textContent = 'lost';
    }
});

