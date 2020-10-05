//timerstartf
const startButton = document.getElementById('start-btn') 
const questionContainerElement = document.getElementById('question-container')

startButton.addEventListener('click', startGame)

var startTime = 60;

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort} 

function nextQuestion() {

}

function showQuestion(question) {

}

function selectAnswer() {

}

const questions = [
    {
        question: 'What is the correct syntax for an external script called "script.js",
        A: <script href = "script.js">,
        B: <script src = "script.js">,
        C: <script var ="script.js"> ,   
        Correct: B: <script src = "script.js">
    },
    {
        question: 'Which of the following array functions adds or removes elements from an array?',
        A: 'Shift()',
        B: 'Splice()',
        C: 'Sort()',
        correct: "B"
    },
    {
        question: 'question number 2?',
        A: 'choice A',
        B: 'choice B',
        C: 'choice C',
        correct: "B"
    },
    {
        question: 'question number 2?',
        A: 'choice A',
        B: 'choice B',
        C: 'choice C',
        correct: "B"
    },
    {
        question: 'question number 2?',
        A: 'choice A',
        B: 'choice B',
        C: 'choice C',
        correct: "B"
    },
];




    
    //var score = 0;

    var randomItem = *

    //call local storage to display high scores and time
    localStorage.setItem('data', JSON.stringify(savedata))
    endTextEl.innerHTML = '<h1> Thank you for playing </h1>'
    highscoreEl.innerHTML = ('View Highscore:' + ' ' + JSON.parse(localStorage.getItem('data'))[0].score);


    //var buttonsHere = document.getElementById('buttonsHere');

//<or(let i = 0; 1 < questions.length; i++) {
    console.log('question', )

//forEach option

question.forEach(function(question) {
    console.log('QUESTION', question);
    question.answers.forEach(function(answer))
} 