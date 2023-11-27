const refrigerateEngine = document.getElementById("refrigerateEngine")
let lastValue = 0

var emergencyJump = () => {
    if (ship.energy > 29 && ship.overheating < 1) {
        ship.tripulation -= (Math.floor(Math.random() * 6))
        ship.energy -= 30
        ship.overheating = 100
        ship.jumps += 1

        refrigerateEngine.removeAttribute("disabled")
        emergencyButton.setAttribute("disabled", "")
        timeElement.innerHTML = "02:04"
        
        document.body.style.backgroundImage = "url(img/jump.gif)"

        document.getElementsByTagName("main")[0].style.display = "none"
        setTimeout(() => {
            document.getElementsByTagName("main")[0].style.display = ""

            if (!checkWinEnd()) {
                putValues()
                document.getElementById("solarSystemContainer").innerHTML = ""
                putPlanets(solarSystems[ship.jumps])
            }
        }, 4500)
    }
}

const isReadyJump = () => {
    const emergencyButton = document.getElementById("emergencyButton")

    if (ship.energy > 29 && ship.overheating < 1) {
        if (emergencyButton.hasAttribute("disabled")) {
            refrigerateEngine.setAttribute("disabled", "")
            emergencyButton.removeAttribute("disabled")
        }
    }
}

var refrigerateEng = () => {
    let valueRefrigerate = parseInt(refrigerateEngine.value)

    if (valueRefrigerate > ship.energy) {
        refrigerateEngine.value = 0
        valueRefrigerate = 0
    }

    if (ship.overheating == 0) {
        refrigerateEngine.setAttribute("disabled", "")
        refrigerateEngine.value = 0
        valueRefrigerate = 0
    }

    energySubtractor -= lastValue

    energySubtractor += valueRefrigerate

    overheatingSubtractor = valueRefrigerate
    lastValue = valueRefrigerate
}

setInterval(refrigerateEng, 1000)