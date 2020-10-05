

var highScore = document.querySelector('#highScore');
var backBtn = document.querySelector('#backBtn');
var clearBtn = document.querySelector('#clearScores');
var scoreList = document.getElementById('scoreList');
var intialText = document.getElementById('intialText');
var timerE1 = document.getElementById('timer')
var submitScores


//timer
var startTimer = document.getElementById('startTimer');
var secondsLeft = 76;

function startTimer() {
    setTimer();
};

function setTimer() {
    var countdown = setInterval(function () {
        secondsLeft--;
        timerE1.textContent = "Time:" + secondsLeft;

        if secondsLeft === 0 || questionNumber === questions.length) {
            clearInterval(countdown);
            setTimeout(displayScore)
        }

} 
}


//show high scores




//retrieve recent scores
//local storage
var totalScores = JSON.parse(localStorage.getItem("allScores");
totalScores = JSON.parse(allScores);

if (totalScores !== null) {

    for (var i = 0; i < totalScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = totalScores[i].initials + " " + totalScores[i].score;
        highScore.appendChild(createLi);


        //add user initials

        //add clear button
    clear.addEventListener("click", function() {
        localStorage.clear();
        location.reload();
    });