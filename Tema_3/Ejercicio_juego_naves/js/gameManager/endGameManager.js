const endGameContainer = document.getElementById("endGameContainer")
let endGame = false

const checkGameOver = () => {
    const values = [ship.energy, ship.shield, ship.tripulation]
    const message = ["You ran out of energy...", "You ran out of shield...", "You ran out of tripulation..."]
    const audioSound = [audio.energyDown, audio.explosion, null]

    
    for (let i = 0; i < values.length; i++) {
        if (checkValueGameOver(values[i])) {
            if (audioSound[i] != null) {
                audioSound[i].play()
            }
            
            endGameContainer.style.display = ""
            endGameContainer.children[0].innerHTML = message[i]

            deleteCookies()
            audio.putBadEndingTheme()
            endGame = true
        }
    }
}

const checkWinEnd = () => {
    if (ship.jumps == solarSystems.length){
        audio.putGoodEndingTheme()
        endGameContainer.style.display = ""
        endGameContainer.children[0].innerHTML = `You scape of the cyclon, you win. Your puntuation: ${ship.getPuntuation()}`
        endGame = true
        deleteCookies()

        return true
    }

    return false
}

const checkValueGameOver = (value = 0) => {
    if (value < 1) {
        return true
    }

    return false
}