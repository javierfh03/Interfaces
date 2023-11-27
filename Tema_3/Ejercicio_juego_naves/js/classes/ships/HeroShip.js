class HeroShip extends Ship {
    constructor(cookieMap = new Map()) {
        super(valueInCookies(cookieMap, SHIELD))
        
        this.tripulation = valueInCookies(cookieMap, TRIPULATION)
        this.energy = valueInCookies(cookieMap, ENERGY)
        this.overheating = valueInCookies(cookieMap, OVERHEATING)
        this.nuclearMissile = valueInCookies(cookieMap, NUCLEAR_MISSILE)
        this.jumps = valueInCookies(cookieMap, JUMPS)
        this.speed = 0
    }

    getPuntuation() {
        return this.tripulation + this.energy + this.nuclearMissile + this.shield
    }

    toString() {
        return `shield=${this.shield}; tripulation=${this.tripulation}; energy=${this.energy}; overheating=${this.overheating}; nuclearMissile=${this.nuclearMissile}; jumps=${this.jumps}; `
    }
}