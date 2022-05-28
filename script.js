const body = document.querySelector("body")
const button = document.getElementById("random")
const input = document.getElementById("input")

input.addEventListener("input", function changeBackground(){

    kullaniciVeri = input.value
    randomChangeBackground();
    const bgText = document.getElementById("bgText")
    bgText.innerHTML = `background-color: ${input.value};`
})


input.addEventListener("click", randomChangeBackground)
function randomChangeBackground() {
    color = [];
    color.push(kullaniciVeri)
    sayi = Math.floor(Math.random() * color.length)
    const secilenRenk = [sayi]
    body.style.backgroundColor = color[secilenRenk];  
}

const hexCode = [
    "0", "1", "2", "3",
    "4", "5", "6", "7",
    "8", "9", "a", "b",
    "c", "d", "e", "f"
]

button.addEventListener("input", function () {
    console.log(input.value)
    body.style.backgroundColor = input.value;
    const bgText = document.getElementById("bgText")
    bgText.innerHTML = `background-color: ${input.value};`
})

button.addEventListener("click", function () {
    let firstRandom = random();
    body.style.backgroundColor = firstRandom;
    bgText.innerHTML = `background-color: ${firstRandom};`
    input.value = firstRandom; 
})

function random() {
    let randomColor = "#";
    while (randomColor.length < 7) {
        randomColor =
            randomColor + hexCode[Math.floor(Math.random() * hexCode.length)]
    }
    return randomColor;
}

body.style.backgroundColor = random();
bgText.innerHTML = `background-color: ${random()};`