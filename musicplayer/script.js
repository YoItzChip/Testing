//variables for music player
const music = document.getElementById("myAudio");
const togglebutton = document.getElementById("togglebutton");
const musicPlayerHead = document.getElementById("musicPlayerHead")
const songName = document.getElementById("songName")

let classarray = [
    "astral",
    "soul"
]
let namearray = [
    "Astral Cataclysm",
    "[PLACEHOLDER]"
]
let songarray = [
    "../audios/astralcataclysm.mp3",
    "../audios/soul[epicified].mp3"
]
let currentIndex = 0

let isplaying = false
//functions for music player
function Pause() {
    togglebutton.innerText = "▶"
    musicPlayerHead.innerText = "Paused"
    music.pause()
    isplaying = false
}

function Play() {
    togglebutton.innerText = "⏸"
    musicPlayerHead.innerText = "Now Playing:"
    music.play()
    isplaying = true
}

function prevSong() {
    currentIndex = (currentIndex - 1 + songarray.length) % songarray.length;
    music.src = songarray[currentIndex]
    songName.innerText = namearray[currentIndex]
    songName.className = classarray[currentIndex]
    music.load();
    if (isplaying) {
        Play();
    }

}


function nextSong() {
    currentIndex = (currentIndex + 1) % songarray.length;
    music.src = songarray[currentIndex]
    songName.innerText = namearray[currentIndex]
    songName.className = classarray[currentIndex]
    music.load();
    if (isplaying) {
        Play();
    }
    
}


//script for music player
function toggleButton() {
    if (isplaying) {
        Pause()
    } else { 
        Play()
    }
}
//musicplayer end

//variables for secret
let text1 = document.getElementById("secret1")
let catpng = document.getElementById("cat")
const victorysfx = new Audio("../audios/victorysfx.mp3")
let clicked = false
//script for secret
function secret() {
    if (!clicked) {
        victorysfx.play()
        music.pause()
        musicPlayerHead.innerText = "Paused"
        togglebutton.innerText = "▶"
        text1.innerText = "congrats.. you uh.. you get a possum"
        catpng.src = "../images/littlePossumGuy.jpg"
    }
    clicked = true
}
//secret end