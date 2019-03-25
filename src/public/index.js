let startB = document.getElementById("startB");
let gamepieceB = document.getElementById("gamepieceB");
let timer;
let matchTime = 135;


startB.onclick = () => {
    if (startB.innerHTML == "Start Match") {
        startB.innerHTML = "Reset Timer";
        startMatch();
    } else if (startB.innerHTML == "Reset Timer") {
        startB.innerHTML = "Start Match";
        resetMatch();
    }
}

function startMatch() {
    timer = setInterval(() => {
        document.getElementById("match-time").innerHTML = document.getElementById("match-time").innerHTML - 1;
        if (document.getElementById("match-time").innerHTML <= 0) {
            clearInterval(timer);
            startB.innerHTML = "Start Match";
            document.getElementById("match-time").innerHTML = matchTime;

        }
    }, 1000);
}

function resetMatch() {
    clearInterval(timer);
    document.getElementById("match-time").innerHTML = matchTime;
    startB.innerHTML = "Start Match";

}

gamepieceB.onclick = () => {
    if (gamepieceB.innerHTML == "Hatch") {
        gamepieceB.innerHTML = "Cargo";
    } else {
        gamepieceB.innerHTML = "Hatch";
    }
}