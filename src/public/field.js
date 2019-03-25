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
        ]
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
        switch (location) {
            case "front-F":
                this.ship[0][piece] = !this.ship[0][piece];
                break;
            case "front-N":
                this.ship[1][piece] = !this.ship[1][piece];
                break;
            case "F1":
                this.ship[2][piece] = !this.ship[2][piece];
                break;
            case "N1":
                this.ship[3][piece] = !this.ship[3][piece];
                break;
            case "F2":
                this.ship[4][piece] = !this.ship[4][piece];
                break;
            case "N2":
                this.ship[5][piece] = !this.ship[5][piece];
                break;
            case "F3":
                this.ship[6][piece] = !this.ship[6][piece];
                break;
            case "N3":
                this.ship[7][piece] = !this.ship[7][piece];
                break;
        }

        console.log(this.ship);
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
    toggle(location, piece) {
        if ((piece == 0 || piece == 3) && document.getElementById("gamepieceB").innerHTML == "Hatch") {
            this.rocket[location - 1][piece] = !this.rocket[location - 1][piece]
        } else if ((piece == 1 || piece == 2) && document.getElementById("gamepieceB").innerHTML == "Cargo") {
            this.rocket[location - 1][piece] = !this.rocket[location - 1][piece]
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
}