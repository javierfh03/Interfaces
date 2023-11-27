const DIRECTION_LEFT = 0
const DIRECTION_RIGHT = 1
const DIRECTION_TOP = 2
const DIRECTION_BOTTOM = 3

class BattlePosition {
    constructor (buttonPossition = {}, topPosition = {}, direction = 0) {
        this.topPosition = topPosition
        this.buttonPossition = buttonPossition
        this.direction = direction
    }
}