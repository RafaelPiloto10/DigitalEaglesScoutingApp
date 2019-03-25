class Field {
    constructor() {
        this.cargo_ship = new CargoShip();
        this.rocketF = new Rocket();
        this.rocketN = new Rocket();
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
    }

    display() {}
}

class Rocket {
    constructor() {
        /*
        Hatch   Cargo   Hatch
        [false, false, false] - LEVEL 1
        [false, false, false] - LEVEL 2
        [false, false, false] - LEVEL 3
         */
        this.rocket = [
            [false, false, false],
            [false, false, false],
            [false, false, false],
        ]
    }
}