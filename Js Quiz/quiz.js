//ask question and get answer

const readlineSync = require('readline-sync');
let kuler = require('kuler');

const userName = readlineSync.question('What is your name? ');
console.log(kuler(`Welcome ${userName}! Let's start the quiz.\n`, '#9333ea'));

const questions = {
    //set of questions
    questionsList: [`Who is the CEO of Tesla? `, `What is the capital of France? `, `What is 2 + 2? `, `Which planet is known as the Red Planet? `, `What is the largest mammal? `],
    optionList: [
        ['1. Elon Musk', '2. Jeff Bezos', '3. Bill Gates', '4. Mark Zuckerberg'],
        ['1. Berlin', '2. Madrid', '3. Paris', '4. Rome'],
        ['1. 3', '2. 4', '3. 5', '4. 2'],
        ['1. Earth', '2. Venus', '3. Mars', '4. Jupiter'],
        ['1. Elephant', '2. Blue Whale', '3. Giraffe', '4. Great White Shark']
    ],
    answerList: ['1', '3', '2', '3', '2']   
}

function showQuestions() {
    let score = 0;
    for(let i=0; i<questions.questionsList.length; i++) {
        console.log(`Question ${i+1}: ${questions.questionsList[i]}\n`);
        for( let option of questions.optionList[i]) {
            console.log(`${option}`);
        }
        const answer = readlineSync.question('Your answer (1-4): ');// i got the answer of the user here
        if(answer === questions.answerList[i]) {
            console.log(kuler('Correct answer!\n', '#16a34a'));
            score++;
            console.log(kuler(`Current Score: ${score}\n`, "#b45309"));
        }
        else {
            console.log((kuler('Wrong answer.\n', '#dc2626')));
            console.log(kuler(`Current Score: ${score}\n`, "#b45309"));
        }
    }
    console.log(kuler(`Quiz Over! Your final score is ${score} out of ${questions.questionsList.length}.`, '#7e22ce'));
}

showQuestions();






//we can have an object called database inside of which we'll have an array of objects where each object will have question, options and answer








//