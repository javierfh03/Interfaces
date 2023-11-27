const laserWeapon = document.getElementById("laserWeapon")
const nuclearWeapon = document.getElementById("nuclearWeapon")

var shootLaserWeapon = () => {
    if (ship.energy > 0) {
        ship.energy -= 1
        laserWeapon.value = parseInt(laserWeapon.value) - 1

        if (laserWeapon.value == 0) {
            laserWeapon.setAttribute("disabled", "")
        }
    }

    shotLogic(2)
    putValues()
}

var reloadLaser = () => {
    audio.clickInterface()
    laserWeapon.value = 5
    laserWeapon.removeAttribute("disabled")
}

var shotNuclearBoomb = () => {
    if (ship.nuclearMissile > 0) {
        ship.nuclearMissile -= 1
    }

    shotLogic(20)
    putValues()
}

const shotLogic = (damage = 0) => {
    switch (ship.battlePossition.direction) {
        case DIRECTION_RIGHT:
            for (let i = ship.battlePossition.topPosition.w; i < battle.map[ship.battlePossition.topPosition.h].length; i++) {
                if (["*", "|"].includes(battle.map[ship.battlePossition.topPosition.h][i])) {
                    restShieldEnemy(i, ship.battlePossition.topPosition.h, damage)
                    return
                }
            }
            break;

        case DIRECTION_LEFT:
            for (let i = ship.battlePossition.topPosition.w; i >= 0; i--) {
                if (["*", "|"].includes(battle.map[ship.battlePossition.topPosition.h][i])) {
                    restShieldEnemy(i, ship.battlePossition.topPosition.h, damage)
                    return
                }
            }
            break;

        case DIRECTION_TOP:
            for (let i = ship.battlePossition.topPosition.h; i >= 0; i--) {
                if (["*", "|"].includes(battle.map[i][ship.battlePossition.topPosition.w])) {
                    restShieldEnemy(ship.battlePossition.topPosition.w, i, damage)
                    return
                }
            }
            break;

        case DIRECTION_BOTTOM:
            for (let i = ship.battlePossition.topPosition.h; i < battle.map.length; i++) {
                if (["*", "|"].includes(battle.map[i][ship.battlePossition.topPosition.w])) {
                    restShieldEnemy(ship.battlePossition.topPosition.w, i, damage)
                    return
                }
            }
            break;
    }
}

const restShieldEnemy = (w = 0, h = 0, damage = 0) => {
    battle.enemyShips.forEach(enemy => {
        if ((enemy.battlePossition.buttonPossition.w == w && enemy.battlePossition.buttonPossition.h == h) || (enemy.battlePossition.topPosition.w == w && enemy.battlePossition.topPosition.h == h)) {
            enemy.shield -= damage

            if (enemy.shield < 1) {
                battle.map[enemy.battlePossition.buttonPossition.h][enemy.battlePossition.buttonPossition.w] = " "
                battle.map[enemy.battlePossition.topPosition.h][enemy.battlePossition.topPosition.w] = " "

                shieldSubstractor -= enemy.damage

                paintBattle()
            }

            return
        }
    });
}

