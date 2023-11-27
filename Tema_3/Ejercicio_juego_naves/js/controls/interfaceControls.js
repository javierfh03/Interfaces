let selectedInterface = document.getElementById("shieldInterface")
let selectedButtonInterface = document.getElementById("shieldButton")

var seeNewInterface = (interfaceIdName = "", button = new HTMLButtonElement()) => {
    hideLastSelected();

    selectedInterface = document.getElementById(interfaceIdName)
    selectedInterface.style.display = "";

    selectedButtonInterface = button
    selectedButtonInterface.classList.add("selectedInterfaceButton")
}

const hideLastSelected = () => {
    selectedInterface.style.display = "none";
    selectedButtonInterface.classList.remove("selectedInterfaceButton")
}