let startB = document.getElementById("startB");
let gamepieceB = document.getElementById("gamepieceB");
let timer;
var matchTime = 150;
var SANDSTORM_TIME = 135;

var totalPoints = 0;

let submitB = document.getElementById("submitB");

let habStartSelect = document.getElementById("habStart");
let habEndSelect = document.getElementById("habEnd");
let stratSelect = document.getElementById("stratSelect");
let intakeSelect = document.getElementById("intakeSelect");

var habStart = habStartSelect.options[habStartSelect.selectedIndex].text;
var habEnd = habEndSelect.options[habEndSelect.selectedIndex].text;

var habStartPoints = 0;
var habEndPoints = 0;
var hatchPoints = 0;
var cargoPoints = 0;

var matchLogs = [];

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
    if (habEndSelect.options[habEndSelect.selectedIndex].text.includes("None") || habEndSelect.options[habEndSelect.selectedIndex].text.includes("Not")) {
        habEndPoints = 0;
    } else if (habEndSelect.options[habEndSelect.selectedIndex].text.includes("Level 1")) {
        habEndPoints = 3;
    } else if (habEndSelect.options[habEndSelect.selectedIndex].text.includes("Level 2")) {
        habEndPoints = 6;
    } else if (habEndSelect.options[habEndSelect.selectedIndex].text.includes("Level 3")) {
        habEndPoints = 12;
    }
    habEnd = habEndSelect.options[habEndSelect.selectedIndex].text;
}

submitB.onclick = () => {
    let code = getData();
    if (code == 1) {
        resetMatch();
    } else {
        alert("Could not submit! Make sure everything is filled out!");
    }
}


startB.onclick = () => {
    if (startB.innerHTML == "Start Match") {
        startB.innerHTML = "Reset Match";
        startMatch();
    } else if (startB.innerHTML == "Reset Match") {
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
    habStartPoints = 0;
    habEndPoints = 0;
    hatchPoints = 0;
    cargoPoints = 0;
    field.cargo_ship.reset();
    field.rocketF.reset();
    field.rocketN.reset();
    matchLogs = [];

}

gamepieceB.onclick = () => {
    if (gamepieceB.innerHTML == "HATCH") {
        gamepieceB.innerHTML = "CARGO";
    } else {
        gamepieceB.innerHTML = "HATCH";
    }
}

function getData() {
    console.log("Data log:");
    let scouter_name = document.getElementById("scouter-name").value;
    let scouting_team = document.getElementById("team-number").value;
    let match_number = document.getElementById("match-number").value;
    let totalClimbPoints = habStartPoints + habEndPoints;
    let totalHatchPoints = hatchPoints;
    let totalCargoPoints = cargoPoints;
    let main_strat = stratSelect.options[stratSelect.selectedIndex].text;
    let intake = intakeSelect.options[intakeSelect.selectedIndex].text;

    if (scouter_name == "" || scouting_team == "" || match_number == "") {
        return -1;
    } else if (habStart == "Not indicated" || habEnd == "Not indicated") {
        return -1;
    } else if (main_strat == "Not indicated" || intake == "Not indicated") {
        return -1;
    } else {
        let matchResults = {
            "Scouter Name": scouter_name,
            "Scouting Team": scouting_team,
            "Match Number": match_number,
            "Total Climb points": totalClimbPoints,
            "Total Hatch points": totalHatchPoints,
            "Total Cargo points": totalCargoPoints,
            "Habitat Start": habStart,
            "Habitat End": habEnd,
            "Main Strategy": main_strat,
            "Intake": intake,
            "Logs": matchLogs
        }

        console.log(matchResults);
        fetch("http://localhost:3000", {
            method: "POST",
            body: JSON.stringify(matchResults),
            headers: {
                'content-type': 'application/json'
            }
        }).then(console.log("Results successfully submitted!"));
        resetSelects();
        return 1;
    }

}

function resetSelects() {
    stratSelect.selectedIndex = 7;
    intakeSelect.selectedIndex = 4;
    habStartSelect.selectedIndex = 6;
    habEndSelect.selectedIndex = 4;
    document.getElementById("team-number").value = "";
    document.getElementById("match-number").value = "";
}