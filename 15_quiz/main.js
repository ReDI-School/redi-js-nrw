let gameDiv = document.getElementById("game");
let scoreDiv = document.getElementById("score");

// this variable holds the quiz we got from the REST API
let quiz;
// this variable holds the current quiz question, -1 means "no question"
let quizIndex = -1;
// this keeps track of the user's score
let score = 0;

function renderQuestion(question) {
    let questionDiv = document.createElement("div");
    questionDiv.innerHTML = question;
    gameDiv.appendChild(questionDiv);
}

function renderScore(score) {
    scoreDiv.textContent = "Score: " + score;
}

function renderAnswer(answer, isCorrect) {
    let answerButton = document.createElement("button");
    answerButton.innerHTML = answer;

    answerButton.onclick = function() {
        if (isCorrect === true) {
            alert("Right!!!");
            score++;
        } else {
            alert("Wrong!!!");
        }
        nextRound();
    }

    gameDiv.appendChild(answerButton);
}

function renderRound() {
    let currentRound = quiz[quizIndex];

    renderQuestion(currentRound.question);

    // amount of answers we have is the amount of incorrect answer plus one correct answer
    let answerCount = currentRound.incorrect_answers.length + 1;
    // compute a random index for our correct answer.
    let randomIndex = Math.floor(Math.random() * answerCount);
    for (let i = 0; i < answerCount; i++) {
        if (i === randomIndex) {
            // render correct answer at our random index
            renderAnswer(currentRound.correct_answer, true);
        } else {
            renderAnswer(currentRound.incorrect_answers.pop(), false);
        }
    }
}

function nextRound() {
    quizIndex += 1;
    gameDiv.innerHTML = "";

    renderScore(score);

    if (quizIndex >= quiz.length) {
        // quiz is over
        gameDiv.textContent = "Quiz is over! You got " + score 
            + " out of " + quiz.length + " possible points";
    } else {
        renderRound();
    }
}

function startQuiz(reply) {
    quizIndex = -1;
    score = 0;
    quiz = reply.results;
    nextRound();
}

async function fetchQuiz() {
    let url = "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple";
    let response = await fetch(url);
    let reply = await response.json();

    startQuiz(reply);
}

fetchQuiz();