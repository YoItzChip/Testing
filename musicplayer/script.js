const music = document.getElementById("myAudio");
const togglebutton = document.getElementById("togglebutton");
const musicPlayerHead = document.getElementById("musicPlayerHead")

let isplaying = false

function toggleButton() {
    if (isplaying) {
        togglebutton.innerText = "▶"
        musicPlayerHead.innerText = "Paused"
        music.pause()
    } else { 
        togglebutton.innerText = "⏸"
        musicPlayerHead.innerText = "Now Playing:"
        music.play()
    }
    isplaying = !isplaying
}
let text1 = document.getElementById("secret1")
let catpng = document.getElementById("cat")
const victorysfx = new Audio("../audios/victorysfx.mp3")
let clicked = false

function secret() {
    if (!clicked) {
        victorysfx.play()
        text1.innerText = "congrats.. you uh.. you get a possum"
        catpng.src = "../images/littlePossumGuy.jpg"
    }
    clicked = true
}