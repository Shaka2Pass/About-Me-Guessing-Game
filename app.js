import isYes from './is-yes.js';

const quizButton = document.getElementById('quizbutton');

const total = document.getElementById('total');

quizButton.addEventListener('click', () => {
    
    console.log('button works;');

    const name = prompt('What\'s your name?');
    const confirmation = confirm(`${name}, are you sure you want to take this test?`)

    if(confirmation === false) return;

    const answer1 = prompt('Is one of my favorite places Stevens Pass?');
    
    const answer2 = prompt ('Does eggplant make will happy?');

    const answer3 = prompt('Does Will enjoy reading the A Confederacy of Dunces?');

    let count = 0;

    if(isYes(answer1)) count += 1;

    if(!isYes(answer2)) count += 1;

    if(isYes(answer3)) count += 1;

    total.textContent=`${name}, You got ${count} correct`;

})







