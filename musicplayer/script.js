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