// Variables for Game
let playerImage = document.getElementById("playerImg");

let cpuImage = document.getElementById("CPUImg")

let playerChoice = "unknown"

let winsNum = 0

let lossNum = 0

let gameMessage = document.getElementById('gameMessage')

let wins = document.getElementById('wins')

let losses = document.getElementById('losses')

wins.innerHTML = "Wins: " + winsNum

losses.innerHTML = 'Losses: ' + lossNum

// helper Functions

function reset () {
    winsNum = 0;
    lossNum = 0;
    wins.innerHTML = ("Wins: " + winsNum);
    losses.innerHTML = ('Losses: ' + lossNum);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



// functions for player Buttons
function rockButton () {
    cpuChoice = 0;

    playerImage.src = "./assets/images/rockIcon.png";
    
    playerChoice = 0;

    cpuChoice=getRandomInt(3);

    if (cpuChoice == playerChoice) {
        gameMessage.innerHTML = "It's a Tie!!!";
        cpuImage.src = "./assets/images/rockIcon.png";
        } else if (cpuChoice == 1) {
            gameMessage.innerHTML = "You Lose...";
            lossNum++;
            losses.innerHTML = "Losses: " + lossNum;
            cpuImage.src = "./assets/images/paperIcon.png";
        } else {
            gameMessage.innerHTML  = "You Win!!!";
            winsNum++;
            wins.innerHTML = "Wins: " + winsNum;
            cpuImage.src = "./assets/images/scissorsIcon.png";
        }
}

function paperButton () {
    cpuChoice = 0;

    playerImage.src = "./assets/images/paperIcon.png";

    playerChoice = 1;

    cpuChoice=getRandomInt(3);

    if (cpuChoice == playerChoice) {
        gameMessage.innerHTML = "It's a Tie!!!";
        cpuImage.src = "./assets/images/paperIcon.png";
        } else if (cpuChoice == 2) {
            gameMessage.innerHTML = "You Lose...";
            lossNum++;
            losses.innerHTML = "Losses: " + lossNum;
            cpuImage.src = "./assets/images/scissorsIcon.png";
        } else {
            gameMessage.innerHTML  = "You Win!!!";
            winsNum++;
            wins.innerHTML = "Wins: " + winsNum;
            cpuImage.src = "./assets/images/rockIcon.png";
        }
}

function scissorsButton () {
    cpuChoice = 0;

    playerImage.src = "./assets/images/scissorsIcon.png";

    playerChoice = 2;

    cpuChoice=getRandomInt(3);

    if (cpuChoice == playerChoice) {
        gameMessage.innerHTML = "It's a Tie!!!";
        cpuImage.src = "./assets/images/scissorsIcon.png";
        } else if (cpuChoice == 0) {
            gameMessage.innerHTML = "You Lose...";
            lossNum++;
            losses.innerHTML = "Losses: " + lossNum;
            cpuImage.src = "./assets/images/rockIcon.png";
        } else {
            gameMessage.innerHTML  = "You Win!!!";
            winsNum++;
            wins.innerHTML = "Wins: " + winsNum;
            cpuImage.src = "./assets/images/paperIcon.png";
    }
}