let battle = null

const makeBattle = () => {
    battle = new BattleShips(ship, new EnemyShip(10, 1), new EnemyShip(20, 1), new EnemyShip(15, 1))

    shieldSubstractor = battle.enemyShips[0].damage + battle.enemyShips[1].damage + battle.enemyShips[2].damage

    paintBattle()
}

const paintBattle = () => {
    resetBattle()

    for (let h = 0; h < battle.map.length; h++) {
        let row = document.createElement("tr")
        for (let w = 0; w < battle.map[h].length; w++) {
            let col = document.createElement("td")
            let value = battle.map[h][w]
    
            if (["*", "O", "|", "="].includes(value)) {
                let jumpW = ajustHorizontal(value, col, h, w)

                if (jumpW > 0) {
                    w += jumpW
                    row.appendChild(col)
                }

                if (ajustVertical(value, col, h, w)) {
                    row.appendChild(col)
                }
            } else {
                if (value == " ") {
                    row.appendChild(col)
                }
            }
        }

        battleBoard.appendChild(row)
    }

    setAngleButtonsContainer()
}

const ajustHorizontal = (value = "|", col = new HTMLTableCellElement(), h = 0, w = 0) => {
    const img = document.createElement("img")
    let jump = 0

    if (w != battle.map[h].length - 1) {
        if (["-", "*", "|", "O", "="].includes(battle.map[h][w + 1])) {
            switch (battle.map[h][w + 1]) {
                case "-":
                    jump = 2
                    img.src = "img/ncc1701h.png"
                    col.setAttribute("colspan", 3)
    
                    if (value == "O") {
                        img.classList.add("downImage")
                    }
                    break
    
                case "*":
                    jump = 1
                    img.src = "img/klingonh.png"
                    col.setAttribute("colspan", 2)
    
                    if (value != "|") {
                        img.classList.add("downImage")
                    }
                    break
    
                case "|":
                    jump = 1
                    img.src = "img/klingonh.png"
                    col.setAttribute("colspan", 2)
                    img.classList.add("downImage")
                    break
            }
    
            col.appendChild(img)
        }
    }

    return jump
}

const ajustVertical = (value = "|", col = new HTMLTableCellElement(), h = 0, w = 0) => {
    const img = document.createElement("img")

    if (h != battle.map.length - 1) {
        if (["-", "*", "|", "O"].includes(battle.map[h + 1][w])) {
            switch (battle.map[h + 1][w]) {
                case "-":
                    img.src = "img/ncc1701v.png"
                    col.setAttribute("rowspan", 3)
    
                    if (value == "=") {
                        img.classList.add("downImage")
                    }
                    break
    
                case "*":
                    img.src = "img/klingonv.png"
                    col.setAttribute("rowspan", 2)

                    if (value == "|") {
                        img.classList.add("downImage")
                    }
                    break
    
                case "|":
                    img.src = "img/klingonv.png"
                    col.setAttribute("rowspan", 2)
                    break
            }
    
            col.appendChild(img)
            return true
        }
    }

    return false
}

const resetBattle = () => {
    battleScreen.style.display = ""
    battleBoard.innerHTML = ""
}