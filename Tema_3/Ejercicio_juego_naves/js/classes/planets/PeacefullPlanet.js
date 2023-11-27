class PeacefullPlanet extends Planet{
    constructor(formalName = "", identificationName = "", description = "") {
        super(formalName, identificationName, description)

        this.shield = Math.floor(Math.random() * 50) + 10
        this.tripulation = Math.floor(Math.random() * 2)
        this.energy = Math.floor(Math.random() * 60) + 30
        this.missile = Math.floor(Math.random() * 4)
    }
}