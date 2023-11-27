class SolarSystem {
    constructor(name = "", background = "", ...planets) {
        this.name = name
        this.planets = planets
        this.background = `url(${background})`
    }
}