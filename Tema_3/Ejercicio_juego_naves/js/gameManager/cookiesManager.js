const TRIPULATION = "tripulation"
const ENERGY = "energy"
const SHIELD = "shield"
const NUCLEAR_MISSILE = "nuclearMissile"
const OVERHEATING = "overheating"
const JUMPS = "jumps"
const THEME_SECONDS = "second"

const getCookies = () => {
    const cookieMap = new Map()

    const tmp = document.cookie.split("; ")

    for (let i = 0; i < tmp.length; i++) {
        const element = tmp[i].split("=");

        cookieMap.set(element[0], element[1])
    }

    return cookieMap
}

const valueInCookies = (cookieMap = new Map(), valueName = "") => {
    if (cookieMap.has(valueName)){
        return parseInt(cookieMap.get(valueName))
    }

    switch (valueName) {
        case OVERHEATING:
            return 100

        case NUCLEAR_MISSILE:
            return 5

        case JUMPS:
        case THEME_SECONDS:
            return 0

        case TRIPULATION:
            return 10
    
        default:
            return 90
    }
}

const saveValues = () => {
    const coockieArray = ship.toString().split("; ")

    for (let i = 0; i < coockieArray.length; i++) {
        document.cookie = `${coockieArray[i]};`
    }

    document.cookie = audio.themeSecond()
}

const deleteCookies = () => {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        document.cookie = `${cookie.substring(0, cookie.indexOf("="))}=; expires=Thu, 01 Jan 1970 00:00:00 GMT;`
    }
}