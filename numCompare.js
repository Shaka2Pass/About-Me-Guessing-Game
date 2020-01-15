export default function numCompare
(inputNumber, correctGuess) 

{
    if (!Number.isInteger(inputNumber)) throw new Error('Please provide a number!');

    if(inputNumber === correctGuess) {
        return 0;
    }
    else if (inputNumber < correctGuess) {
        return -1;
    }
    else if (inputNumber > correctGuess) {
        return 1;
    }
}

