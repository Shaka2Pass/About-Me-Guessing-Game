import numCompare from './numCompare.js';

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

    console.log('Some holdover', Number(inputNumber.value));

    if (numCompare(Number(inputNumber.value), correctGuess) === -1) 
    {tooHigh.textContent = 'too low';
    guessIs.classList.remove('hidden');
    }

    if (numCompare(Number(inputNumber.value), correctGuess) === 1) {tooHigh.textcont = 'too high';
    guessIs.classList.remove('hidden');}

    if (numCompare(Number(inputNumber.value), correctGuess) === 0) {
        tooHigh.textContent = 'correct'; guessIs.classList.remove('hidden');
        resultsAre.classList.remove('hidden');
        submitButton.disabled = true;
    }

    if (tries === 0 && numCompare(Number(inputNumber.value), correctGuess) !==0){
        submitButton.disabled = true;resultsAre.textContent = 'lost';
    }
});

