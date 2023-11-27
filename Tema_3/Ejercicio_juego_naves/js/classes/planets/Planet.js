class Planet {
    constructor(formalName = "", identificationName = "", description = "") {
        this.formalName = formalName
        this.identificationName = identificationName
        this.description = description
        this.element = document.createElement("img")

        this.element.id = identificationName
        this.element.setAttribute("src", `img/planets/${identificationName}.png`)
        this.element.classList.add("planets", "appearPlanet", "notExploredPlanet")
        setTimeout(() => {this.addSeePlanetEvent()}, 3000)
    }

    seePlanetEvent () {
        seePlanet(this)
    }

    addSeePlanetEvent () {
        this.clickPlanet = () => { this.seePlanetEvent() }
        this.element.addEventListener("click", this.clickPlanet)
    }

    removeSeePlanetEvent () {
        this.element.removeEventListener("click", this.clickPlanet)
    }
}