var timeElement = document.getElementById("time")

const ajustTime = (time = 0) => {
    if (time < 10) {
        return `0${time}`
    }

    return time
}

const updateTime = () => {
    let secondTime = parseInt(timeElement.innerHTML.substring(3, 5))
    let minuteTime = parseInt(timeElement.innerHTML.substring(0, 2))

    if (!endGame) {
        if (secondTime > 0 || minuteTime > 0) {
            if (secondTime == 0) {
                minuteTime -= 1
                secondTime = 59
            } else {
                secondTime -= 1
            }
    
            if (secondTime < 30 && minuteTime < 1) {
                audio.putTimeAlarm()
            }
    
            timeElement.innerHTML = `${ajustTime(minuteTime)}:${ajustTime(secondTime)}`
        
            restValues(ship)
            audio.checkAlarms()
            checkGameOver()
        } else {
            endGameContainer.style.display = ""
            endGameContainer.children[0].innerHTML = "The time is over"
            audio.putBadEndingTheme()
            deleteCookies()
        }
    }
}

timeElement.innerHTML = "02:00"
setInterval(updateTime, 1000)