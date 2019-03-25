let img;
let canvasholder;
let field;

function setup() {
    let canvas = createCanvas(1300, 800);
    canvas.parent(canvasholder);

    img = loadImage("./assets/field.png");
    console.log(img);
    field = new Field();
    console.log(field);
}

function draw() {
    background(33);
    image(img, 0, 0, img.width + (img.width * .3), img.height + (img.height * .3));
    if (document.getElementById("gamepieceB").innerHTML == "Hatch") {
        fill(232, 221, 25);
    } else {
        fill(244, 154, 9);
    }
    ellipse(mouseX, mouseY, 16);

    field.cargo_ship.display();
    field.rocketF.display();
    field.rocketN.display();
    totalPoints = habStartPoints + habEndPoints + hatchPoints + cargoPoints;
    document.getElementById("point-counter").innerHTML = totalPoints;

}

function mouseClicked() {
    console.log(mouseX, mouseY);
    if (mouseY > 0) {
        let p = (document.getElementById("gamepieceB").innerHTML == "Hatch") ? 1 : 0;
        if (mouseX >= 100 && mouseX <= 285) {
            // Front cargo ship
            if (mouseY >= 190 && mouseY <= 395) {
                console.log("ship F front");
                field.cargo_ship.toggle("front-F", p);
            } else if (mouseY > 395 && mouseY < 600) {
                console.log("ship N front");
                field.cargo_ship.toggle("front-N", p);
            }

        } else if (mouseX > 285 && mouseX <= 470) {
            // Cargo ship 1
            if (mouseY >= 190 && mouseY <= 385) {
                console.log("ship F 1");
                field.cargo_ship.toggle("F1", p);
            } else if (mouseY > 385 && mouseY <= 600) {
                console.log("ship N 1");
                field.cargo_ship.toggle("N1", p);
            }

        } else if (mouseX > 470 && mouseX <= 630) {
            // Cargo ship 2
            if (mouseY >= 190 && mouseY <= 385) {
                console.log("ship F 2");
                field.cargo_ship.toggle("F2", p);
            } else if (mouseY > 385 && mouseY <= 600) {
                console.log("ship N 2");
                field.cargo_ship.toggle("N2", p);
            }

        } else if (mouseX > 600 && mouseX <= 805) {
            // Cargo ship 3
            if (mouseY >= 190 && mouseY <= 385) {
                console.log("ship F 3");
                field.cargo_ship.toggle("F3", p);
            } else if (mouseY > 385 && mouseY <= 600) {
                console.log("ship N 3");
                field.cargo_ship.toggle("N3", p);
            }

        } else if (mouseX >= 900 && mouseX <= 935) {
            // Rocket hatch
            if (mouseY >= 60 && mouseY <= 140) {
                console.log("Rocket F 3 HATCH");
                field.rocketF.toggle(3, 0);
            } else if (mouseY >= 160 && mouseY <= 220) {
                console.log("Rocket F 2 HATCH");
                field.rocketF.toggle(2, 0);
            } else if (mouseY >= 240 && mouseY <= 305) {
                console.log("Rocket F 1 HATCH");
                field.rocketF.toggle(1, 0);
            } else if (mouseY >= 395 && mouseY <= 470) {
                console.log("Rocket N 3 HATCH");
                field.rocketN.toggle(3, 0);
            } else if (mouseY >= 485 && mouseY <= 555) {
                console.log("Rocket N 2 HATCH");
                field.rocketN.toggle(2, 0);
            } else if (mouseY >= 570 && mouseY <= 635) {
                console.log("Rocket N 1 HATCH");
                field.rocketN.toggle(1, 0);
            }

        } else if (mouseX > 935 && mouseX <= 960) {
            // Rocket cargo left
            if (mouseY >= 45 && mouseY <= 105) {
                console.log("Rocket F 3 CARGO")
                field.rocketF.toggle(3, 1);
            } else if (mouseY >= 150 && mouseY <= 200) {
                console.log("Rocket F 2 CARGO");
                field.rocketF.toggle(2, 1);
            } else if (mouseY >= 240 && mouseY <= 290) {
                console.log("Rocket F 1 CARGO");
                field.rocketF.toggle(1, 1);
            } else if (mouseY >= 370 && mouseY <= 430) {
                console.log("Rocket N 3 CARGO");
                field.rocketN.toggle(3, 1);
            } else if (mouseY >= 475 && mouseY <= 530) {
                console.log("Rocket N 2 CARGO");
                field.rocketN.toggle(2, 1);
            } else if (mouseY >= 565 && mouseY <= 615) {
                console.log("Rocket N 1 CARGO");
                field.rocketN.toggle(1, 1);
            }

        } else if (mouseX > 960 && mouseX <= 1000) {
            // Rocket cargo right
            if (mouseY >= 45 && mouseY <= 105) {
                console.log("Rocket F 3 CARGO")
                field.rocketF.toggle(3, 2);
            } else if (mouseY >= 150 && mouseY <= 200) {
                console.log("Rocket F 2 CARGO");
                field.rocketF.toggle(2, 2);
            } else if (mouseY >= 240 && mouseY <= 290) {
                console.log("Rocket F 1 CARGO");
                field.rocketF.toggle(1, 2);
            } else if (mouseY >= 370 && mouseY <= 430) {
                console.log("Rocket N 3 CARGO");
                field.rocketN.toggle(3, 2);
            } else if (mouseY >= 475 && mouseY <= 530) {
                console.log("Rocket N 2 CARGO");
                field.rocketN.toggle(2, 2);
            } else if (mouseY >= 565 && mouseY <= 615) {
                console.log("Rocket N 1 CARGO");
                field.rocketN.toggle(1, 2);
            }

        } else if (mouseX > 1000 && mouseX <= 1030) {
            // Rocket hatch
            if (mouseY >= 60 && mouseY <= 140) {
                console.log("Rocket F 3 HATCH");
                field.rocketF.toggle(3, 3);
            } else if (mouseY >= 160 && mouseY <= 220) {
                console.log("Rocket F 2 HATCH");
                field.rocketF.toggle(2, 3);
            } else if (mouseY >= 240 && mouseY <= 305) {
                console.log("Rocket F 1 HATCH");
                field.rocketF.toggle(1, 3);
            } else if (mouseY >= 395 && mouseY <= 470) {
                console.log("Rocket N 3 HATCH");
                field.rocketN.toggle(3, 3);
            } else if (mouseY >= 485 && mouseY <= 555) {
                console.log("Rocket N 2 HATCH");
                field.rocketN.toggle(2, 3);
            } else if (mouseY >= 570 && mouseY <= 635) {
                console.log("Rocket N 1 HATCH");
                field.rocketN.toggle(1, 3);
            }
        }
    }
}