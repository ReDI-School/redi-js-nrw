function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
let counter = 0;
let secretNum = getRandomInt(100);
console.log("the secret numer is " + secretNum);

function newGame() {
    counter = 0;
    secretNum = getRandomInt(100);

    let infoDiv = document.getElementById("info")
    infoDiv.style.display = "block";

    let msg = document.getElementById("msg")
    msg.style.display = "none";

    console.log("the new secret number is " + secretNum);
    inputNum.value = "";
    max = 100;
    min = 1;

    document.getElementById("winMsg").style.display = "none";
    let elem = document.getElementById("listOfGuess");
    // while (listOfGuess.hasChildNodes()) {
    //     listOfGuess.removeChild(list.firstChild);
    // }
    var ol = document.getElementById("listOfGuess");
    ol.innerHTML = "";
    var statisticsDiv = document.getElementById("statistics");
    statisticsDiv.innerHTML = "";
    statisticsDiv.style.display = "none";


}

function getRandomBetweenValues(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
let inputNum = document.getElementById("inputNum");
let inputValue = inputNum.value;
let min = 1;
let max = 100;
let suggestedNum = getRandomBetweenValues(min, max);

function winMsgDisplay() {
    let winMsg = document.getElementById("winMsg");
    winMsg.style.display = "block";

    let WinNumSpan = document.getElementById("WinSpanNum");
    WinNumSpan.textContent = secretNum;

}
function clearMsg() {
    var Msg = document.getElementById("msg");
    Msg.innerHTML = "";
}

function gessNum() {
    counter = counter + 1;
    let inputNum = document.getElementById("inputNum");
    let inputValue = inputNum.value;
    inputValue = Number(inputValue);

    let infoDiv = document.getElementById("info")
    infoDiv.style.display = "none";

    function NumIsSmaller() {
        let listNum = document.createElement("li");
        listNum.textContent = ("The guessed number is smaller");
        let guessedNum = document.getElementById("listOfGuess");
        guessedNum.appendChild(listNum);

        let spanMsg = document.createElement("span");
        spanMsg.textContent = inputValue;
        listNum.append(spanMsg);

    }
    function NumIsBigger() {
        let listNum = document.createElement("li");
        listNum.textContent = ("The guessed number is bigger");
        let guessedNum = document.getElementById("listOfGuess");
        guessedNum.appendChild(listNum);

        let spanMsg = document.createElement("span");
        spanMsg.textContent = inputValue;
        listNum.append(spanMsg);
    }
    if (inputValue < 1 || inputValue > 100) {
        wrongInput();

    }
    else if (inputValue < secretNum) {
        guessedSmaller();
        NumIsSmaller();
        clearMsg();

        // min = parseInt(inputValue);

        if (inputValue > min) {
            min = inputValue;
        }
    }
    else if (inputValue > secretNum) {

        NumIsBigger();
        clearMsg();

        //max = parseInt(inputValue);

        if (inputValue < max) {
            max = inputValue;
        }
    }
    else if (inputValue == secretNum) {

        winMsgDisplay();
        statisticsMsg();
        clearMsg();
    }

    inputNum.value = "";

}


function suggest() {

    let infoDiv = document.getElementById("info")
    infoDiv.style.display = "none";
    clearMsg();
    suggestedNum = getRandomBetweenValues(min, max);


    if (suggestedNum > secretNum) {
        max = suggestedNum;
        //  suggestedNum = getRandomBetweenValues(min, max);
        let suggestedNumberMsg = document.createElement("li");

        let spanMsg = document.createElement("span");
        spanMsg.textContent = suggestedNum;
        spanMsg.style.border = ("3px #7881da solid");

        suggestedNumberMsg.textContent = "Is the best guess";
        let suggestedList = document.getElementById("listOfGuess");
        suggestedList.appendChild(suggestedNumberMsg);

        suggestedNumberMsg.append(spanMsg);
        suggestedNumberMsg.style.backgroundColor = ("rgb(120, 129, 218)");
        counter = counter + 1;
    }
    else if (suggestedNum < secretNum) {
        min = suggestedNum;
        // suggestedNum = getRandomBetweenValues(min, max);
        let suggestedNumberMsg = document.createElement("li");
        let spanMsg = document.createElement("span");
        spanMsg.textContent = suggestedNum;
        spanMsg.style.border = ("3px #7881da solid");

        suggestedNumberMsg.textContent = "Is the best guess";
        let suggestedList = document.getElementById("listOfGuess");
        suggestedList.appendChild(suggestedNumberMsg);

        suggestedNumberMsg.append(spanMsg);
        suggestedNumberMsg.style.backgroundColor = ("rgb(120, 129, 218)");
        counter = counter + 1;
    }
    else {

        let suggestedNumberMsg = document.createElement("li");
        let spanMsg = document.createElement("span");
        spanMsg.textContent = suggestedNum;
        spanMsg.style.border = ("3px rgb(216, 160, 58) solid");

        suggestedNumberMsg.textContent = "YOU WON!!";
        let suggestedList = document.getElementById("listOfGuess");
        suggestedList.appendChild(suggestedNumberMsg);
        suggestedNumberMsg.append(spanMsg);
        suggestedNumberMsg.style.backgroundColor = ("rgb(216, 160, 58)");

        winMsgDisplay();
        statisticsMsg();
    }

}


function guessedSmaller() {
    // let msg = document.getElementById("msg");
    // msg.textContent = "the guessed number is smaller";
}
function guessedLarger() {
    let msg = document.getElementById("msg");
    msg.textContent = "the guessed number is larger ";
}
function wrongInput() {
    let msg = document.getElementById("msg");
    msg.textContent = "Please enter a number between 1 and 100";
    msg.style.display = "block";
}
function winMsg() {
    let msg = document.getElementById("msg");
    msg.textContent = "YOU WON!!";
}
function statisticsMsg() {
    let statisticsMsg = document.getElementById("statistics");
    statisticsMsg.textContent = "you guessed the secret number right with " + counter + " tries.";
    statisticsMsg.style.display = "block";
}

