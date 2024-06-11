const screen1 = document.getElementById("score1");
const screen2 = document.getElementById("score2");

screen1.value=501;
screen2.value=501;

let currentPlayer=1;

function points1(entered1){
    if(currentPlayer !== 1) return;
    var entered1 = parseInt(document.getElementById("input1").value);
    if (isNaN(entered1) || entered1>180) {
        alert("Please enter a valid number");
        return;
    }
    screen1.value -= entered1;
    if (screen1.value < 0) {
        alert("Entered number is too big");
        resetPoints1();
    } else if (screen1.value == 0) {
        alert("Player 1 wins");
        screen1.value=501;
        screen2.value=501;
    }
    document.getElementById("input1").value = '';
    switchPlayer();
}

function points2(entered2){
    if(currentPlayer !== 2) return;
    var entered2 = parseInt(document.getElementById("input2").value);
    if (isNaN(entered2) || entered2>180) {
        alert("Please enter a valid number");
        return;
    }
    screen2.value -= entered2;
    if (screen2.value < 0) {
        alert("Entered number is too big");
        resetPoints2();
    } else if (screen2.value == 0) {
        alert("Player 2 wins");
        screen1.value=501;
        screen2.value=501;
    }
    document.getElementById("input2").value = '';
    switchPlayer();
}

function switchPlayer() {
    if (currentPlayer === 1) {
        input1.disabled = true;
        button1.disabled = true;
        input2.disabled = false;
        button2.disabled = false;
        currentPlayer = 2;
    } else {
        input1.disabled = false;
        button1.disabled = false;
        input2.disabled = true;
        button2.disabled = true;
        currentPlayer = 1;
    }
}