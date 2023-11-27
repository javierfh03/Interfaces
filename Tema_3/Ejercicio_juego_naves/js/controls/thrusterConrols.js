const speedSlider = document.getElementById("speedSlider")

var changeSpeed = (number = 100) => {
    ship.speed = parseInt(speedSlider.value)

    if (ship.energy > (number / 100)) {
        if (ship.speed > -1 && ship.speed < 1001) {
            if ((ship.speed == 0 && number > 0) || (ship.speed == 1000 && number < 0) || (ship.speed > 0 && ship.speed < 1000)) {
                (number > 0) ? energySubtractor += 1 : energySubtractor -= 1
                speedSlider.value = ship.speed + number
            }
        }
    } else {
        speedSlider.value = 0
        energySubtractor -= (number / 100)
    }
}

var checkSpeed = () => {
    const value = parseInt(speedSlider.value)

    if (ship.energy < (value / 100)) {
        speedSlider.value = 0
        energySubtractor -= (value / 100)
    }
}

var turnStraight = () => {
    switch (ship.battlePossition.direction) {
        case DIRECTION_RIGHT:
            if (battle.map[ship.battlePossition.topPosition.h][ship.battlePossition.topPosition.w + 1] == " ") {
                ship.battlePossition.topPosition.w += 1
                ship.battlePossition.middlePossition.w += 1

                battle.map[ship.battlePossition.topPosition.h][ship.battlePossition.topPosition.w] = "O"
                battle.map[ship.battlePossition.middlePossition.h][ship.battlePossition.middlePossition.w] = "-"

                battle.map[ship.battlePossition.buttonPossition.h][ship.battlePossition.buttonPossition.w] = " "
                ship.battlePossition.buttonPossition.w += 1
                battle.map[ship.battlePossition.buttonPossition.h][ship.battlePossition.buttonPossition.w] = "="
            }
            break;

        case DIRECTION_LEFT:
            if (battle.map[ship.battlePossition.topPosition.h][ship.battlePossition.topPosition.w - 1] == " ") {
                ship.battlePossition.topPosition.w -= 1
                ship.battlePossition.middlePossition.w -= 1

                battle.map[ship.battlePossition.topPosition.h][ship.battlePossition.topPosition.w] = "O"
                battle.map[ship.battlePossition.middlePossition.h][ship.battlePossition.middlePossition.w] = "-"

                battle.map[ship.battlePossition.buttonPossition.h][ship.battlePossition.buttonPossition.w] = " "
                ship.battlePossition.buttonPossition.w -= 1
                battle.map[ship.battlePossition.buttonPossition.h][ship.battlePossition.buttonPossition.w] = "="
            }
            break;

        case DIRECTION_TOP:
            if (battle.map[ship.battlePossition.topPosition.h - 1][ship.battlePossition.topPosition.w] == " ") {
                ship.battlePossition.topPosition.h -= 1
                ship.battlePossition.middlePossition.h -= 1

                battle.map[ship.battlePossition.topPosition.h][ship.battlePossition.topPosition.w] = "O"
                battle.map[ship.battlePossition.middlePossition.h][ship.battlePossition.middlePossition.w] = "-"

                battle.map[ship.battlePossition.buttonPossition.h][ship.battlePossition.buttonPossition.w] = " "
                ship.battlePossition.buttonPossition.h -= 1
                battle.map[ship.battlePossition.buttonPossition.h][ship.battlePossition.buttonPossition.w] = "="
            }
            break;

        case DIRECTION_BOTTOM:
            if (battle.map[ship.battlePossition.topPosition.h + 1][ship.battlePossition.topPosition.w] == " ") {
                ship.battlePossition.topPosition.h += 1
                ship.battlePossition.middlePossition.h += 1

                battle.map[ship.battlePossition.topPosition.h][ship.battlePossition.topPosition.w] = "O"
                battle.map[ship.battlePossition.middlePossition.h][ship.battlePossition.middlePossition.w] = "-"

                battle.map[ship.battlePossition.buttonPossition.h][ship.battlePossition.buttonPossition.w] = " "
                ship.battlePossition.buttonPossition.h += 1
                battle.map[ship.battlePossition.buttonPossition.h][ship.battlePossition.buttonPossition.w] = "="
            }
            break;
    }

    paintBattle()
}

var turnWithHead = (turnDirection = "") => {
    if ((turnDirection == "L" && ship.battlePossition.direction == DIRECTION_RIGHT) || (turnDirection == "R" && ship.battlePossition.direction == DIRECTION_BOTTOM)) {
        if (battle.map[ship.battlePossition.buttonPossition.h + 2][ship.battlePossition.buttonPossition.w + 2] == " ") {
            ship.battlePossition.direction = (turnDirection == "L")? DIRECTION_TOP : DIRECTION_LEFT
    
            battle.map[ship.battlePossition.middlePossition.h][ship.battlePossition.middlePossition.w] = " "
            ship.battlePossition.middlePossition.h += 1
            ship.battlePossition.middlePossition.w += 1
            battle.map[ship.battlePossition.middlePossition.h][ship.battlePossition.middlePossition.w] = "-"
    
            battle.map[ship.battlePossition.buttonPossition.h][ship.battlePossition.buttonPossition.w] = " "
            ship.battlePossition.buttonPossition.h += 2
            ship.battlePossition.buttonPossition.w += 2
            battle.map[ship.battlePossition.buttonPossition.h][ship.battlePossition.buttonPossition.w] = "="
        }
    } else if ((turnDirection == "L" && ship.battlePossition.direction == DIRECTION_TOP) || (turnDirection == "R" && ship.battlePossition.direction == DIRECTION_RIGHT)) {
        if (battle.map[ship.battlePossition.buttonPossition.h - 2][ship.battlePossition.buttonPossition.w + 2] == " ") {
            ship.battlePossition.direction = (turnDirection == "L")? DIRECTION_LEFT : DIRECTION_BOTTOM
    
            battle.map[ship.battlePossition.middlePossition.h][ship.battlePossition.middlePossition.w] = " "
            ship.battlePossition.middlePossition.h -= 1
            ship.battlePossition.middlePossition.w += 1
            battle.map[ship.battlePossition.middlePossition.h][ship.battlePossition.middlePossition.w] = "-"
    
            battle.map[ship.battlePossition.buttonPossition.h][ship.battlePossition.buttonPossition.w] = " "
            ship.battlePossition.buttonPossition.h -= 2
            ship.battlePossition.buttonPossition.w += 2
            battle.map[ship.battlePossition.buttonPossition.h][ship.battlePossition.buttonPossition.w] = "="
        }
    } else if ((turnDirection == "L" && ship.battlePossition.direction == DIRECTION_LEFT)  || (turnDirection == "R" && ship.battlePossition.direction == DIRECTION_TOP)) {
        if (battle.map[ship.battlePossition.buttonPossition.h - 2][ship.battlePossition.buttonPossition.w - 2] == " ") {
            ship.battlePossition.direction = (turnDirection == "L")? DIRECTION_BOTTOM : DIRECTION_RIGHT
    
            battle.map[ship.battlePossition.middlePossition.h][ship.battlePossition.middlePossition.w] = " "
            ship.battlePossition.middlePossition.h -= 1
            ship.battlePossition.middlePossition.w -= 1
            battle.map[ship.battlePossition.middlePossition.h][ship.battlePossition.middlePossition.w] = "-"
    
            battle.map[ship.battlePossition.buttonPossition.h][ship.battlePossition.buttonPossition.w] = " "
            ship.battlePossition.buttonPossition.h -= 2
            ship.battlePossition.buttonPossition.w -= 2
            battle.map[ship.battlePossition.buttonPossition.h][ship.battlePossition.buttonPossition.w] = "="
        }
    } else if ((turnDirection == "L" && ship.battlePossition.direction == DIRECTION_BOTTOM) || (turnDirection == "R" && ship.battlePossition.direction == DIRECTION_LEFT)) {
        if (battle.map[ship.battlePossition.buttonPossition.h + 2][ship.battlePossition.buttonPossition.w - 2] == " ") {
            ship.battlePossition.direction = (turnDirection == "L")? DIRECTION_RIGHT : DIRECTION_TOP
    
            battle.map[ship.battlePossition.middlePossition.h][ship.battlePossition.middlePossition.w] = " "
            ship.battlePossition.middlePossition.h += 1
            ship.battlePossition.middlePossition.w -= 1
            battle.map[ship.battlePossition.middlePossition.h][ship.battlePossition.middlePossition.w] = "-"
    
            battle.map[ship.battlePossition.buttonPossition.h][ship.battlePossition.buttonPossition.w] = " "
            ship.battlePossition.buttonPossition.h += 2
            ship.battlePossition.buttonPossition.w -= 2
            battle.map[ship.battlePossition.buttonPossition.h][ship.battlePossition.buttonPossition.w] = "="
        }
    }

    paintBattle()
}

var turnWithMiddle = (turnDirection = "") => {
    if ((turnDirection == "L" && ship.battlePossition.direction == DIRECTION_RIGHT) || (turnDirection == "R" && ship.battlePossition.direction == DIRECTION_BOTTOM)) {
        if (battle.map[ship.battlePossition.topPosition.h - 1][ship.battlePossition.topPosition.w - 1] == " " && battle.map[ship.battlePossition.buttonPossition.h + 1][ship.battlePossition.buttonPossition.w + 1] == " ") {
            ship.battlePossition.direction = (turnDirection == "L")? DIRECTION_TOP : DIRECTION_LEFT
    
            battle.map[ship.battlePossition.topPosition.h][ship.battlePossition.topPosition.w] = " "
            ship.battlePossition.topPosition.h -= 1
            ship.battlePossition.topPosition.w -= 1
            battle.map[ship.battlePossition.topPosition.h][ship.battlePossition.topPosition.w] = "O"
    
            battle.map[ship.battlePossition.buttonPossition.h][ship.battlePossition.buttonPossition.w] = " "
            ship.battlePossition.buttonPossition.h += 1
            ship.battlePossition.buttonPossition.w += 1
            battle.map[ship.battlePossition.buttonPossition.h][ship.battlePossition.buttonPossition.w] = "="
        }
        
    } else if ((turnDirection == "L" && ship.battlePossition.direction == DIRECTION_TOP) || (turnDirection == "R" && ship.battlePossition.direction == DIRECTION_RIGHT)) {
        if (battle.map[ship.battlePossition.topPosition.h + 1][ship.battlePossition.topPosition.w - 1] == " " && battle.map[ship.battlePossition.buttonPossition.h - 1][ship.battlePossition.buttonPossition.w + 1] == " ") {
            ship.battlePossition.direction = (turnDirection == "L")? DIRECTION_LEFT : DIRECTION_BOTTOM
    
            battle.map[ship.battlePossition.topPosition.h][ship.battlePossition.topPosition.w] = " "
            ship.battlePossition.topPosition.h += 1
            ship.battlePossition.topPosition.w -= 1
            battle.map[ship.battlePossition.topPosition.h][ship.battlePossition.topPosition.w] = "O"
    
            battle.map[ship.battlePossition.buttonPossition.h][ship.battlePossition.buttonPossition.w] = " "
            ship.battlePossition.buttonPossition.h -= 1
            ship.battlePossition.buttonPossition.w += 1
            battle.map[ship.battlePossition.buttonPossition.h][ship.battlePossition.buttonPossition.w] = "="
        }
    } else if ((turnDirection == "L" && ship.battlePossition.direction == DIRECTION_LEFT) || (turnDirection == "R" && ship.battlePossition.direction == DIRECTION_TOP)) {
        if (battle.map[ship.battlePossition.topPosition.h + 1][ship.battlePossition.topPosition.w + 1] == " " && battle.map[ship.battlePossition.buttonPossition.h - 1][ship.battlePossition.buttonPossition.w - 1] == " ") {
            ship.battlePossition.direction = (turnDirection == "L")? DIRECTION_BOTTOM : DIRECTION_RIGHT
    
            battle.map[ship.battlePossition.topPosition.h][ship.battlePossition.topPosition.w] = " "
            ship.battlePossition.topPosition.h += 1
            ship.battlePossition.topPosition.w += 1
            battle.map[ship.battlePossition.topPosition.h][ship.battlePossition.topPosition.w] = "O"
    
            battle.map[ship.battlePossition.buttonPossition.h][ship.battlePossition.buttonPossition.w] = " "
            ship.battlePossition.buttonPossition.h -= 1
            ship.battlePossition.buttonPossition.w -= 1
            battle.map[ship.battlePossition.buttonPossition.h][ship.battlePossition.buttonPossition.w] = "="
        }
    } else if ((turnDirection == "L" && ship.battlePossition.direction == DIRECTION_BOTTOM) || (turnDirection == "R" && ship.battlePossition.direction == DIRECTION_LEFT)) {
        if (battle.map[ship.battlePossition.topPosition.h - 1][ship.battlePossition.topPosition.w + 1] == " " && battle.map[ship.battlePossition.buttonPossition.h + 1][ship.battlePossition.buttonPossition.w - 1] == " ") {
            ship.battlePossition.direction = (turnDirection == "L")? DIRECTION_RIGHT : DIRECTION_TOP
    
            battle.map[ship.battlePossition.topPosition.h][ship.battlePossition.topPosition.w] = " "
            ship.battlePossition.topPosition.h -= 1
            ship.battlePossition.topPosition.w += 1
            battle.map[ship.battlePossition.topPosition.h][ship.battlePossition.topPosition.w] = "O"
    
            battle.map[ship.battlePossition.buttonPossition.h][ship.battlePossition.buttonPossition.w] = " "
            ship.battlePossition.buttonPossition.h += 1
            ship.battlePossition.buttonPossition.w -= 1
            battle.map[ship.battlePossition.buttonPossition.h][ship.battlePossition.buttonPossition.w] = "="
        }
    }
    
    paintBattle()
}

var turnWithBottom = (turnDirection = "") => {
    if ((turnDirection == "L" && ship.battlePossition.direction == DIRECTION_RIGHT) || (turnDirection == "R" && ship.battlePossition.direction == DIRECTION_BOTTOM)) {
        if (battle.map[ship.battlePossition.topPosition.h - 2][ship.battlePossition.topPosition.w - 2] == " ") {
            ship.battlePossition.direction = (turnDirection == "L")? DIRECTION_TOP : DIRECTION_LEFT

            battle.map[ship.battlePossition.topPosition.h][ship.battlePossition.topPosition.w] = " "
            ship.battlePossition.topPosition.h -= 2
            ship.battlePossition.topPosition.w -= 2
            battle.map[ship.battlePossition.topPosition.h][ship.battlePossition.topPosition.w] = "O"

            battle.map[ship.battlePossition.middlePossition.h][ship.battlePossition.middlePossition.w] = " "
            ship.battlePossition.middlePossition.h -= 1
            ship.battlePossition.middlePossition.w -= 1
            battle.map[ship.battlePossition.middlePossition.h][ship.battlePossition.middlePossition.w] = "-"
        }
    } else if ((turnDirection == "L" && ship.battlePossition.direction == DIRECTION_TOP) || (turnDirection == "R" && ship.battlePossition.direction == DIRECTION_RIGHT)) {
        if (battle.map[ship.battlePossition.topPosition.h + 2][ship.battlePossition.topPosition.w - 2] == " ") {
            ship.battlePossition.direction = (turnDirection == "L")? DIRECTION_LEFT : DIRECTION_BOTTOM

            battle.map[ship.battlePossition.topPosition.h][ship.battlePossition.topPosition.w] = " "
            ship.battlePossition.topPosition.h += 2
            ship.battlePossition.topPosition.w -= 2
            battle.map[ship.battlePossition.topPosition.h][ship.battlePossition.topPosition.w] = "O"

            battle.map[ship.battlePossition.middlePossition.h][ship.battlePossition.middlePossition.w] = " "
            ship.battlePossition.middlePossition.h += 1
            ship.battlePossition.middlePossition.w -= 1
            battle.map[ship.battlePossition.middlePossition.h][ship.battlePossition.middlePossition.w] = "-"
        }
    } else if ((turnDirection == "L" && ship.battlePossition.direction == DIRECTION_LEFT) || (turnDirection == "R" && ship.battlePossition.direction == DIRECTION_TOP)) {
        if (battle.map[ship.battlePossition.topPosition.h + 2][ship.battlePossition.topPosition.w + 2] == " ") {
            ship.battlePossition.direction = (turnDirection == "L")? DIRECTION_BOTTOM : DIRECTION_RIGHT

            battle.map[ship.battlePossition.topPosition.h][ship.battlePossition.topPosition.w] = " "
            ship.battlePossition.topPosition.h += 2
            ship.battlePossition.topPosition.w += 2
            battle.map[ship.battlePossition.topPosition.h][ship.battlePossition.topPosition.w] = "O"

            battle.map[ship.battlePossition.middlePossition.h][ship.battlePossition.middlePossition.w] = " "
            ship.battlePossition.middlePossition.h += 1
            ship.battlePossition.middlePossition.w += 1
            battle.map[ship.battlePossition.middlePossition.h][ship.battlePossition.middlePossition.w] = "-"
        }
    } else if ((turnDirection == "L" && ship.battlePossition.direction == DIRECTION_BOTTOM) || (turnDirection == "R" && ship.battlePossition.direction == DIRECTION_LEFT)) {
        if (battle.map[ship.battlePossition.topPosition.h - 2][ship.battlePossition.topPosition.w + 2] == " ") {
            ship.battlePossition.direction = (turnDirection == "L")? DIRECTION_RIGHT : DIRECTION_TOP

            battle.map[ship.battlePossition.topPosition.h][ship.battlePossition.topPosition.w] = " "
            ship.battlePossition.topPosition.h -= 2
            ship.battlePossition.topPosition.w += 2
            battle.map[ship.battlePossition.topPosition.h][ship.battlePossition.topPosition.w] = "O"

            battle.map[ship.battlePossition.middlePossition.h][ship.battlePossition.middlePossition.w] = " "
            ship.battlePossition.middlePossition.h -= 1
            ship.battlePossition.middlePossition.w += 1
            battle.map[ship.battlePossition.middlePossition.h][ship.battlePossition.middlePossition.w] = "-"
        }
    }

    paintBattle()
}

const setAngleButtonsContainer = () => {
    const moveButtonsContainer = document.getElementById("moveButtonsContainer")
    
    switch (ship.battlePossition.direction) {
        case DIRECTION_RIGHT:
            moveButtonsContainer.style.rotate = "0deg"
            break;

        case DIRECTION_LEFT:
            moveButtonsContainer.style.rotate = "180deg"
            break;

        case DIRECTION_TOP:
            moveButtonsContainer.style.rotate = "270deg"
            break;

        case DIRECTION_BOTTOM:
            moveButtonsContainer.style.rotate = "90deg"
            break;
    }
}