class BattleShips {
    constructor(ship = new HeroShip(), ...enemyShips) {
        const mapData = this.setBattle()

        this.map = mapData.map
        this.enemyShips = enemyShips

        ship.battlePossition = mapData.position

        for (let i = 0; i < mapData.enemyShipPositions.length; i++) {
            enemyShips[i].battlePossition = mapData.enemyShipPositions[i]
        }
    }

    setBattle() {
        switch (Math.floor(Math.random() * 3)) {
            case 0:
                return {
                    map: [
                        ["|", "*", " ", " ", " ", " ", " ", " ", " "],
                        [" ", " ", " ", " ", " ", " ", " ", " ", " "],
                        ["|", "*", " ", " ", " ", " ", " ", " ", "O"],
                        [" ", " ", " ", " ", " ", " ", " ", " ", "-"],
                        ["|", "*", " ", " ", " ", " ", " ", " ", "="]],
                    position: new HeroPosition({ w: 8, h: 4 }, { w: 8, h: 3 }, { w: 8, h: 2 }, DIRECTION_TOP),
                    enemyShipPositions: [
                        new BattlePosition({ w: 0, h: 2 }, { w: 1, h: 2 }, DIRECTION_RIGHT),
                        new BattlePosition({ w: 0, h: 4 }, { w: 1, h: 4 }, DIRECTION_RIGHT),
                        new BattlePosition({ w: 0, h: 0 }, { w: 1, h: 0 }, DIRECTION_RIGHT)
                    ]
                }

            case 1:
                return {
                    map: [
                        [" ", " ", " ", " ", " ", " ", " ", "*", "|"],
                        [" ", " ", " ", " ", " ", " ", " ", " ", " "],
                        ["|", "*", " ", "=", "-", "O", " ", " ", " "],
                        [" ", " ", " ", " ", " ", " ", " ", " ", " "],
                        [" ", " ", " ", " ", " ", " ", " ", "*", "|"]],
                    position: new HeroPosition({ w: 3, h: 2 }, { w: 4, h: 2 }, { w: 5, h: 2 }, DIRECTION_RIGHT),
                    enemyShipPositions: [
                        new BattlePosition({ w: 0, h: 2 }, { w: 1, h: 2 }, DIRECTION_RIGHT),
                        new BattlePosition({ w: 8, h: 0 }, { w: 7, h: 0 }, DIRECTION_LEFT),
                        new BattlePosition({ w: 8, h: 4 }, { w: 7, h: 4 }, DIRECTION_LEFT)
                    ]
                }

            case 2:
                return {
                    map: [
                        [" ", " ", " ", " ", " ", " ", " ", "*", "|"],
                        ["|", "*", " ", " ", "O", " ", " ", " ", " "],
                        [" ", " ", " ", " ", "-", " ", " ", " ", " "],
                        [" ", " ", " ", " ", "=", " ", " ", " ", " "],
                        [" ", " ", " ", " ", " ", " ", " ", "*", "|"]],
                    position: new HeroPosition({ w: 4, h: 3 }, { w: 4, h: 2 }, { w: 4, h: 1 }, DIRECTION_TOP),
                    enemyShipPositions: [
                        new BattlePosition({ w: 0, h: 1 }, { w: 1, h: 1 }, DIRECTION_RIGHT),
                        new BattlePosition({ w: 8, h: 0 }, { w: 7, h: 0 }, DIRECTION_LEFT),
                        new BattlePosition({ w: 8, h: 4 }, { w: 7, h: 4 }, DIRECTION_LEFT)
                    ]
                }
        }
    }

    finishBattle() {
        for (let i = 0; i < this.enemyShips.length; i++) {
            if (this.enemyShips[i].shield > 0) {
                return false
            }
        }

        return true
    }
}