let startB = document.getElementById("startB");
let gamepieceB = document.getElementById("gamepieceB");
let timer;
let matchTime = 135;

var totalPoints = 0;

let submitB = document.getElementById("submitB");

let habStartSelect = document.getElementById("habStart");
let habEndSelect = document.getElementById("habEnd");

var habStart = habStartSelect.options[habStartSelect.selectedIndex].text;
var habEnd = habEndSelect.options[habEndSelect.selectedIndex].text;

var habStartPoints = 0;
var habEndPoints = 0;
var hatchPoints = 0;
var cargoPoints = 0;

var matchLogs = [];

setInterval(() => {
    for (let i = 0; i < matchLogs.length; i++) {
        console.log(matchLogs[i]);
    }
}, 10000);

habStartSelect.onchange = () => {
    if (habStartSelect.options[habStartSelect.selectedIndex].text.includes("Not")) {
        habStartPoints = 0;
    } else if (habStartSelect.options[habStartSelect.selectedIndex].text.includes("Level 1")) {
        habStartPoints = 3;
    } else if (habStartSelect.options[habStartSelect.selectedIndex].text.includes("Level 2")) {
        habStartPoints = 6;
    }
    habStart = habStartSelect.options[habStartSelect.selectedIndex].text;

}

habEndSelect.onchange = () => {
    if (habEndSelect.options[habEndSelect.selectedIndex].text.includes("None")) {
        habEndPoints = 0;
    } else if (habEndSelect.options[habEndSelect.selectedIndex].text.includes("Level 1")) {
        habEndPoints = 3;
    } else if (habEndSelect.options[habEndSelect.selectedIndex].text.includes("Level 2")) {
        habEndPoints = 6;
    } else if (habEndSelect.options[habEndSelect.selectedIndex].text.includes("Level 3")) {
        habEndPoints = 12;
    }
    habEnd = habEndSelect.options[habEndSelect.selectedIndex].value;
}

submitB.onclick = () => {
    getData();
    reset();
}


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

function getData() {
    console.log("Data log:");
    console.log("Total climb points: ");
}