const planetComputer = document.getElementById("planetComputer")
const planetScreen = document.getElementById("planetScreen")
const battleScreen = document.getElementById("battleScreen")
const battleBoard = document.getElementById("battleBoard")
let selectedSolarSystem = null
let selectedPlanet = null

const putPlanets = (solarSystem = new SolarSystem()) => {
    selectedSolarSystem = solarSystem
    let descriptionContainer = document.getElementById("descriptionContainer")
    const solarSystemContainer = document.getElementById("solarSystemContainer")

    document.getElementById("solarSystemName").innerHTML = solarSystem.name
    document.body.style.backgroundImage = solarSystem.background

    solarSystemContainer.innerHTML = ""

    solarSystem.planets.forEach(planet => {
        let descriptionText = document.createElement("span")

        descriptionText.innerHTML += `<h3>${planet.formalName}</h3>\n ${planet.description}`

        solarSystemContainer.appendChild(planet.element)

        planet.element.addEventListener("mouseenter", () => {
            descriptionContainer.innerHTML = ""

            document.getElementById("descriptionContainer").appendChild(descriptionText)
        })

       planet.element.addEventListener("mouseleave", () => {
            descriptionContainer.innerHTML = ""
            descriptionContainer.appendChild(document.createElement("span"))
        })
    });
}

const seePlanet = (planet = new Planet()) => {
    selectedPlanet = planet

    manageOtherPlanets(false)

    planet.element.classList.add("explorePlanet")
    planet.element.classList.remove("notExploredPlanet", "appearPlanet")

    findInPlanet()
}

const manageOtherPlanets = (seePlanets = true) => {
    for (let i = 0; i < selectedSolarSystem.planets.length; i++) {
        if (selectedSolarSystem.planets[i] != selectedPlanet) {
            if (seePlanets) {
                selectedSolarSystem.planets[i].element.classList.remove("disappearPlanet")
                setTimeout(() => { selectedSolarSystem.planets[i].element.classList.add("appearPlanet") }, 1)

                if (!selectedSolarSystem.planets[i].element.classList.contains("exploredPlanet")) {
                    selectedSolarSystem.planets[i].element.classList.add("notExploredPlanet")
                    setTimeout(() => { selectedSolarSystem.planets[i].addSeePlanetEvent() }, 3000)
                }
            } else {
                selectedSolarSystem.planets[i].element.classList.remove("appearPlanet")
                setTimeout(() => { selectedSolarSystem.planets[i].element.classList.add("disappearPlanet") }, 1)

                if (!selectedSolarSystem.planets[i].element.classList.contains("exploredPlanet")) {
                    selectedSolarSystem.planets[i].removeSeePlanetEvent()
                    selectedSolarSystem.planets[i].element.classList.remove("notExploredPlanet")
                }
            }
        }
    }
}

const findInPlanet = () => {
    planetComputer.classList.remove("hidenPlanetComputer")
    planetComputer.classList.add("visiblePlanetComputer")
    planetScreen.classList.remove("hidenPlanetComputer")
    planetScreen.classList.add("visiblePlanetComputer")

    setTimeout(() => {
        if (selectedPlanet instanceof HostilePlanet) {
            audio.playBattleTheme()
            manipulateBattleInputs(true)
            makeBattle()
        } else {
            audio.rewardPlanet.play()
            getPlanetValues()
        }
    }, 1700);
}

const getPlanetValues = () => {
    planetScreen.style.display = ""
    battleScreen.style.display = "none"

    ship.energy += selectedPlanet.energy
    ship.shield += selectedPlanet.shield
    ship.nuclearMissile += selectedPlanet.missile
    ship.tripulation += selectedPlanet.tripulation

    planetScreen.innerHTML += `<h3>You found in ${selectedPlanet.formalName}:</h3>`
    planetScreen.innerHTML += `<p>Energy: ${selectedPlanet.energy}</p>`
    planetScreen.innerHTML += `<p>Shield: ${selectedPlanet.shield}</p>`
    planetScreen.innerHTML += `<p>Nuclear missile: ${selectedPlanet.missile}</p>`
    planetScreen.innerHTML += `<p>Tripulation: ${selectedPlanet.tripulation}</p>`
    planetScreen.innerHTML += `<button type="button" class="smallButton" onclick="closePlanet()">Close</button>`
}

var closePlanet = () => {
    selectedPlanet.element.classList.remove("explorePlanet")
    selectedPlanet.element.classList.add("exploredPlanet")
    selectedPlanet.removeSeePlanetEvent()

    setTimeout(() => { selectedPlanet.element.classList.add("unselectPlanet") }, 1);
    setTimeout(() => { selectedPlanet.element.classList.remove("unselectPlanet") }, 2001)

    manageOtherPlanets(true)

    planetScreen.innerHTML = ""
    planetScreen.classList.add("hidenPlanetScreen")
    planetComputer.classList.add("hidenPlanetComputer")
    planetScreen.classList.remove("visiblePlanetComputer")
    planetComputer.classList.remove("visiblePlanetComputer")

}

const finishBattle = () => {
    if (battle != null) {
        if (battle.finishBattle()) {
            battle = null
            audio.stopbattleTheme()
            audio.playTheme()
            closePlanet()
            manipulateBattleInputs(false)
        }
    }
}

const manipulateBattleInputs = (active = true) => {
    const battleInputs = document.getElementsByClassName("battleInput")

    for (let i = 0; i < battleInputs.length; i++) {
        (active) ? battleInputs[i].removeAttribute("disabled") : battleInputs[i].setAttribute("disabled", "")
    }
}

setInterval(finishBattle, 1000)
