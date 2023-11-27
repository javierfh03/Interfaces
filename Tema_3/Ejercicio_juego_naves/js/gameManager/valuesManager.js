let solarSystem = 0
let energySubtractor = 0
let overheatingSubtractor = 0
let shieldSubstractor = 0

const takeColorValue = (element = HTMLElement, value = 0, limitGreen = 50, limitYellow = 25) => {
    let color = ""
    let classColor = ""

    if (value >= limitGreen) {
        color = "#09ff00"
        classColor = "jumpProgressRed"
    } else if (value < limitGreen && value >= limitYellow) {
        color = "yellow"
        classColor = "jumpProgressYellow"
    } else {
        color = "red"
        classColor = "jumpProgressGreen"
    }

    if (element instanceof HTMLProgressElement) {
        element.classList.replace(element.classList[0], classColor)
    } else {
        element.style.color = color
    }
}

const putValues = () => {
    document.getElementById("energy").innerHTML = ship.energy
    takeColorValue(document.getElementById("energy"), ship.energy)

    document.getElementById("shield").innerHTML = ship.shield
    takeColorValue(document.getElementById("shield"), ship.shield)

    document.getElementById("tripulation").innerHTML = ship.tripulation
    takeColorValue(document.getElementById("tripulation"), ship.tripulation, 6, 3)

    document.getElementById("jumpProgress").value = ship.overheating
    takeColorValue(document.getElementById("jumpProgress"), ship.overheating, 75, 50)

    document.getElementById("lassers").innerHTML = ship.energy
    document.getElementById("nuclearMissile").innerHTML = ship.nuclearMissile
    document.getElementById("refrigeratePercentage").innerHTML = `${document.getElementById("refrigerateEngine").value * 10}%`

    saveValues()
}

const restValues = () => {
    if (ship.energy > 0) {
        if (energySubtractor > ship.energy ) {
            ship.energy = 0
        } else {
            ship.energy -= energySubtractor
        } 

        if (ship.overheating > 0) {
            if (overheatingSubtractor > parseInt(document.getElementById("jumpProgress").value)) {
                ship.overheating = 0
            } else {
                ship.overheating -= overheatingSubtractor
            }
        }
    }

    if (ship.shield > 0) {
        if (shieldSubstractor > ship.shield) {
            ship.shield = 0
        } else {
            ship.shield -= (Math.floor(Math.random() * 1000) >= ship.speed)? shieldSubstractor : 0
        } 

        if (shieldSubstractor > 0) {
            checkShieldProtection()
        }
    }

    checkSpeed()
    isReadyJump()
    putValues()
}
