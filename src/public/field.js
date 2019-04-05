class Field {
    constructor() {
        this.cargo_ship = new CargoShip();
        this.rocketF = new Rocket(false);
        this.rocketN = new Rocket(true);
    }
}

class CargoShip {
    constructor() {
        /*
        Cargo   Hatch
        [false, false] - Front F
        [false, false] - Front N
        [false, false] - Ship F 1
        [false, false] - Ship N 1
        [false, false] - Ship F 2
        [false, false] - Ship N 2
        [false, false] - Ship F 3
        [false, false] - Ship N 3
         */
        this.ship = [
            [false, false],
            [false, false],
            [false, false],
            [false, false],
            [false, false],
            [false, false],
            [false, false],
            [false, false]
        ];
        this.shipPoints = [
            [createVector(100 + 70 + 64, 190 + 70), createVector(100 + 70, 190 + 70)],
            [createVector(100 + 70 + 64, 395 + 50), createVector(100 + 70, 395 + 50)],
            [createVector(285 + 70 + 64, 190 + 70), createVector(285 + 70, 190 + 70)],
            [createVector(285 + 70 + 64, 285 + 140), createVector(285 + 70, 285 + 140)],
            [createVector(470 + 50 + 64, 190 + 70), createVector(470 + 50, 190 + 70)],
            [createVector(470 + 50 + 64, 285 + 140), createVector(470 + 50, 285 + 140)],
            [createVector(600 + 70 + 64, 190 + 70), createVector(600 + 70, 190 + 70)],
            [createVector(600 + 70 + 64, 285 + 140), createVector(600 + 70, 285 + 140)]
        ];
    }

    toggle(location, piece) {
        let bool;
        switch (location) {
            case "front-F":
                this.ship[0][piece] = !this.ship[0][piece];
                bool = this.ship[0][piece];
                break;
            case "front-N":
                this.ship[1][piece] = !this.ship[1][piece];
                bool = this.ship[1][piece];
                break;
            case "F1":
                this.ship[2][piece] = !this.ship[2][piece];
                bool = this.ship[2][piece];
                break;
            case "N1":
                this.ship[3][piece] = !this.ship[3][piece];
                bool = this.ship[3][piece];
                break;
            case "F2":
                this.ship[4][piece] = !this.ship[4][piece];
                bool = this.ship[4][piece];
                break;
            case "N2":
                this.ship[5][piece] = !this.ship[5][piece];
                bool = this.ship[5][piece];
                break;
            case "F3":
                this.ship[6][piece] = !this.ship[6][piece];
                bool = this.ship[6][piece];
                break;
            case "N3":
                this.ship[7][piece] = !this.ship[7][piece];
                bool = this.ship[7][piece];
                break;
        }
        if (piece == 1 && document.getElementById("match-time").innerHTML == matchTime) {

        } else if (bool && piece == 1) {
            hatchPoints += 2;
        } else if (!bool && piece == 1) {
            hatchPoints -= 2;
        } else if (bool && piece == 0) {
            cargoPoints += 3;
        } else if (!bool && piece == 0) {
            cargoPoints -= 3;
        }
        let double = false;
        for (let i = 0; i < matchLogs.length; i++) {
            if (matchLogs[i]["Location"] == ("CARGO-SHIP-" + location) && matchLogs[i]["Game-Piece"] == (piece == 1 ? "Hatch" : "Cargo")) {
                matchLogs.push({
                    "Time": document.getElementById("match-time").innerHTML,
                    "Is-Preloaded": document.getElementById("match-time").innerHTML == matchTime,
                    "During-Sandstorm": document.getElementById("match-time").innerHTML >= SANDSTORM_TIME,
                    "Game-Piece": (piece == 1 ? "Unscored-Hatch" : "Unscored-Cargo"),
                    "Location": "CARGO-SHIP-" + location
                });
                double = true;
            }
        }
        if (!double) {
            matchLogs.push({
                "Time": document.getElementById("match-time").innerHTML,
                "Is-Preloaded": document.getElementById("match-time").innerHTML == matchTime,
                "During-Sandstorm": document.getElementById("match-time").innerHTML >= SANDSTORM_TIME,
                "Game-Piece": (piece == 1 ? "Hatch" : "Cargo"),
                "Location": "CARGO-SHIP-" + location
            });
        }

    }

    display() {
        for (let level = 0; level < this.ship.length; level++) {
            for (let piece = 0; piece < this.ship[level].length; piece++) {
                if (this.ship[level][piece]) {
                    if (piece == 1) {
                        fill(232, 221, 25);
                        ellipse(this.shipPoints[level][piece].x, this.shipPoints[level][piece].y, 64);
                    } else {
                        fill(244, 154, 9);
                        ellipse(this.shipPoints[level][piece].x, this.shipPoints[level][piece].y, 64);
                    }
                }
            }
        }
    }

    reset() {
        this.ship = [
            [false, false],
            [false, false],
            [false, false],
            [false, false],
            [false, false],
            [false, false],
            [false, false],
            [false, false]
        ]
    }
}

class Rocket {
    constructor(isNear) {
        /*
        Hatch   Cargo  Cargo  Hatch
        [false, false, false, false] - LEVEL 1
        [false, false, false, false] - LEVEL 2
        [false, false, false, false] - LEVEL 3
         */
        this.rocket = [
            [false, false, false, false],
            [false, false, false, false],
            [false, false, false, false],
        ];

        this.rocketFPoints = [
            [createVector(916, 240 + 16), createVector(935 + 16, 240 + 30), createVector(935 + 36, 240 + 30), createVector(1016, 240 + 16)],
            [createVector(916, 160 + 16), createVector(935 + 16, 150 + 30), createVector(935 + 36, 150 + 30), createVector(1016, 160 + 16)],
            [createVector(916, 60 + 16), createVector(935 + 16, 45 + 30), createVector(935 + 36, 45 + 30), createVector(1016, 60 + 16)]
        ];

        this.rocketNPoints = [
            [createVector(917, 570 + 16), createVector(935 + 16, 565 + 30), createVector(935 + 45, 565 + 30), createVector(1017, 570 + 16)],
            [createVector(917, 485 + 16), createVector(935 + 16, 475 + 30), createVector(935 + 45, 475 + 30), createVector(1017, 485 + 16)],
            [createVector(917, 395 + 16), createVector(935 + 16, 370 + 30), createVector(935 + 45, 370 + 30), createVector(1017, 395 + 16)]
        ];

        this.isNear = isNear;
    }
    toggle(location, piece, side) {
        if ((piece == 0 || piece == 3) && document.getElementById("gamepieceB").innerHTML == "HATCH") {
            this.rocket[location - 1][piece] = !this.rocket[location - 1][piece];
            if (this.rocket[location - 1][piece]) {
                hatchPoints += 2;
            } else {
                hatchPoints -= 2;
            }

        } else if ((piece == 1 || piece == 2) && document.getElementById("gamepieceB").innerHTML == "CARGO") {
            this.rocket[location - 1][piece] = !this.rocket[location - 1][piece];
            if (this.rocket[location - 1][piece]) {
                cargoPoints += 3;
            } else {
                cargoPoints -= 3;
            }
        }
        let double = false;
        for (let i = 0; i < matchLogs.length; i++) {
            if (matchLogs[i]["Location"] == ("ROCKET-SHIP-" + location + "-" + side) && matchLogs[i]["Game-Piece"] == (piece == 1 ? "Hatch" : "Cargo")) {
                matchLogs.push({
                    "Time": document.getElementById("match-time").innerHTML,
                    "During-Sandstorm": document.getElementById("match-time").innerHTML >= SANDSTORM_TIME,
                    "Game-Piece": (piece == 1 ? "Unscored-Hatch" : "Unscored-Cargo"),
                    "Location": "ROCKET-SHIP-" + location + "-" + side
                });
                double = true;
            }
        }
        if (!double) {
            matchLogs.push({
                "Time": document.getElementById("match-time").innerHTML = document.getElementById("match-time").innerHTML,
                "During-Sandstorm": document.getElementById("match-time").innerHTML >= SANDSTORM_TIME,
                "Game-Piece": (piece == 0 || piece == 1 ? "Hatch" : "Cargo"),
                "Location": "ROCKET-SHIP-" + location + "-" + side
            });
        }


    }

    display() {
        for (let level = 0; level < this.rocket.length; level++) {
            for (let piece = 0; piece < this.rocket[level].length; piece++) {
                if (piece != 1 && piece != 2) {
                    fill(232, 221, 25);
                    if (this.rocket[level][piece]) {
                        if (this.isNear) {
                            ellipse(this.rocketNPoints[level][piece].x, this.rocketNPoints[level][piece].y, 16);
                        } else {
                            ellipse(this.rocketFPoints[level][piece].x, this.rocketFPoints[level][piece].y, 16);
                        }
                    }
                } else {
                    fill(244, 154, 9);
                    if (this.rocket[level][piece]) {
                        if (this.isNear) {
                            ellipse(this.rocketNPoints[level][piece].x, this.rocketNPoints[level][piece].y, 16);
                        } else {
                            ellipse(this.rocketFPoints[level][piece].x, this.rocketFPoints[level][piece].y, 16);
                        }
                    }
                }
            }
        }
    }
    reset() {
        this.rocket = [
            [false, false, false, false],
            [false, false, false, false],
            [false, false, false, false],
        ];
    }
}