class AudioManager {
    constructor(cookieMap = new Map()) {
        this.theme = new Audio("audio/themes/musicTheme.mp3")
        this.battleTheme = new Audio("audio/themes/battleTheme.mp3")
        this.badEndingTheme = new Audio("audio/themes/badEndingTheme.mp3")
        this.goodEndingTheme = new Audio("audio/themes/goodEndingTheme.mp3")
        this.interfaceClick = new Audio("audio/sounds/interfaceClick.wav")
        this.shieldAlarm = {audio: new Audio ("audio/sounds/shieldAlarm.wav"), noActive: true}
        this.energyAlarm = {audio: new Audio ("audio/sounds/energyAlarm.wav"), noActive: true}
        this.timeAlarm = {audio: new Audio ("audio/sounds/timeAlarm.wav"), noActive: true}
        this.rewardPlanet = new Audio("audio/sounds/rewardPlanet.wav")

        this.energyDown = new Audio("audio/sounds/energyDown.wav")
        this.explosion = new Audio("audio/sounds/explosion.wav")

        this.theme.currentTime = valueInCookies(cookieMap, THEME_SECONDS)
        this.theme.loop = true

        this.clickInterface()
    }

    playTheme() {
        this.theme.play()
    }

    stopTheme() {
        this.theme.pause()
    }

    playBattleTheme() {
        this.stopTheme()
        this.battleTheme.play()
    }

    stopbattleTheme() {
        this.battleTheme.currentTime = 0
        this.battleTheme.pause()
    }

    putBadEndingTheme() {
        this.stopTheme()
        this.stopbattleTheme()
        this.badEndingTheme.play()
    }

    putGoodEndingTheme() {
        this.stopTheme()
        this.stopbattleTheme()
        this.goodEndingTheme.play()
    }

    clickInterface() {
        const buttons = document.getElementsByTagName("button")
        const input = document.getElementsByTagName("input")

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", () => {this.interfaceClick.play()})
        }

        for (let i = 0; i < input.length; i++) {
            input[i].addEventListener("click", () => {this.interfaceClick.play()})
        }
    }

    checkAlarms() {
        if (ship.shield < 25 && ship.shield > 1 && this.shieldAlarm.noActive) {
            this.shieldAlarm.audio.play()
            this.shieldAlarm.noActive = false
            this.shieldAlarm.audio.loop = true
        } else {
            if (ship.shield > 25 && !this.shieldAlarm.noActive || ship.shield == 0) {
                this.shieldAlarm.noActive == true
                this.shieldAlarm.audio.pause()
                this.shieldAlarm.audio.currentTime = 0;
            }
        }

        if (ship.energy < 25 && ship.energy > 1 && this.energyAlarm.noActive) {
            this.energyAlarm.audio.play()
            this.energyAlarm.noActive = false
            this.energyAlarm.audio.loop = true
        } else {
            if (ship.energy > 25 && !this.energyAlarm.noActive|| ship.energy == 0) {
                this.energyAlarm.noActive == true
                this.energyAlarm.audio.pause()
                this.energyAlarm.audio.currentTime = 0;
            }
        }
    }

    putTimeAlarm() {
        if (this.timeAlarm.noActive) {
            this.timeAlarm.audio.play()
            this.energyAlarm.audio.loop = true
        }
    }

    themeSecond() {
        return `second=${this.theme.currentTime};`
    }
}