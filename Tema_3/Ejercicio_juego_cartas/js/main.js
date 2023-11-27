const listaCartas = document.getElementsByClassName("carta")
let cartas = ["img/groudon.png", "img/arceus.png", 
"img/deoxys.png", "img/lugia.png", "img/rayquaza.png",
"img/reshiram.png", "img/groudon.png", "img/arceus.png", 
"img/deoxys.png", "img/lugia.png", "img/rayquaza.png",
"img/reshiram.png"]
let cartaMostrada = false
let anteriorCartaMostrada = null

const mostrarCarta = (div = new HTMLDivElement()) => {
    div.children[0].classList.replace("revesVisible", "revesNoVisible")
    div.children[1].classList.replace("frontalNoVisible", "frontalVisible")

    if (cartaMostrada) {
        cartaMostrada = false
        if (div.children[1].style.backgroundImage != anteriorCartaMostrada.children[1].style.backgroundImage) {
            setTimeout(() => {ocultarCarta(anteriorCartaMostrada); ocultarCarta(div)}, 1000) 
        }
    } else {
        anteriorCartaMostrada = div
        cartaMostrada = true
    }
}

const ocultarCarta = (div = new HTMLDivElement()) => {
    div.children[0].classList.replace("revesNoVisible", "revesVisible")
    div.children[1].classList.replace("frontalVisible", "frontalNoVisible")
}

for (let i = 0; i < listaCartas.length; i++) {
    let cartaRandom = Math.floor(Math.random() * cartas.length)
    let carta = listaCartas[i]

    carta.children[1].style.backgroundImage = `url(${cartas[cartaRandom]})`
    carta.addEventListener("click", () => {mostrarCarta(carta)})

    cartas.splice(cartaRandom, 1)
}
