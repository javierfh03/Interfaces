class HeroPosition extends BattlePosition {
    constructor (buttonPossition = {}, middlePossition = {}, topPosition = {}, direction = 0) {
        super(buttonPossition, topPosition, direction)
        this.middlePossition = middlePossition
    }
}