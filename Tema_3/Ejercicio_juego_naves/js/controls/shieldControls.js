const shieldsValues = [
    document.getElementById("prowShield"),
    document.getElementById("sternShield"),
    document.getElementById("portShield"),
    document.getElementById("starboardShield")
]

var shieldControls = (element = new HTMLInputElement()) => {
    const sum = parseInt(shieldsValues[0].value) + parseInt(shieldsValues[1].value) + parseInt(shieldsValues[2].value) + parseInt(shieldsValues[3].value)
    let rest = 0
    let available = 0

    for (let i = 0; i < shieldsValues.length; i++) {
        if (sum > 100) {
            if (parseInt(shieldsValues[i].value) > 0 && shieldsValues[i] != element) available += 1
        } else if (100 > sum) {
            if (shieldsValues[i] != element) available += 1
        }
    }

    rest = 100 - sum

    for (let i = 0; i < shieldsValues.length; i++) {
        if (parseInt(shieldsValues[i].value) > 0 && shieldsValues[i] != element) {
            shieldsValues[i].value = parseInt(shieldsValues[i].value) + (rest / available)
        }
    }
}

var equalShieldControls = () => {
    prowShield.value = 25
    sternShield.value = 25
    portShield.value = 25
    starboardShield.value = 25
}

var checkShieldProtection = () => {
    switch (ship.battlePossition.direction) {
        case DIRECTION_TOP:
            checkTop(prowShield.value)
            checkBottom(sternShield.value)
            checkLeft(starboardShield.value)
            checkRight(portShield.value)
            break;

        case DIRECTION_RIGHT:
            checkTop(starboardShield.value)
            checkBottom(portShield.value)
            checkLeft(sternShield.value)
            checkRight(prowShield.value)
            break;

        case DIRECTION_LEFT:
            checkTop(portShield.value)
            checkBottom(starboardShield.value)
            checkLeft(prowShield.value)
            checkRight(sternShield.value)
            break;

        case DIRECTION_BOTTOM:
            checkBottom(prowShield.value)
            checkTop(sternShield.value)
            checkRight(starboardShield.value)
            checkLeft(portShield.value)
            break;
    }
}

const checkTop = (valueAdd = 0) => {
    for (let h = 0; h < ship.battlePossition.topPosition.h; h++) {
        for (let w = 0; w < battle.map[h].length; w++) {
            if (battle.map[h][w] == "*") {
                ship.shield += (valueAdd / 100)
            }
        }
    }
}

const checkBottom = (valueAdd = 0) => {
    for (let h = ship.battlePossition.buttonPossition.h + 1; h < battle.map.length; h++) {
        for (let w = 0; w < battle.map[h].length; w++) {
            if (battle.map[h][w] == "*") {
                ship.shield += (valueAdd / 100)
            }
        }
    }
}

const checkRight = (valueAdd = 0) => {
    for (let h = 0; h < ship.battlePossition.topPosition.h; h++) {
        for (let w = 0; w < ship.battlePossition.topPosition.w; w++) {
            if (battle.map[h][w] == "*") {
                ship.shield += (valueAdd / 100)
            }
        }
    }
}

const checkLeft = (valueAdd = 0) => {
    for (let h = 0; h < ship.battlePossition.topPosition.h; h++) {
        for (let w = ship.battlePossition.topPosition.w; w < battle.map[h].length; w++) {
            if (battle.map[h][w] == "*") {
                ship.shield += (valueAdd / 100)
            }
        }
    }
}