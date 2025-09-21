//main
const image = document.getElementById('cheb-image');
if (image) {
    const clickaudio = new Audio('../audios/soul[epicified].mp3'); 
    let clicked = false;

    image.addEventListener('click', () => {
        if (clicked) {
            clickaudio.pause();
            clickaudio.currentTime = 0;
            image.classList.remove('rotate');
        } else {
            clickaudio.play();
            image.classList.add('rotate');
        }
        clicked = !clicked;
    });

    clickaudio.addEventListener('ended', () => {
        clicked = false;
        image.classList.remove('rotate');
    });
}

//musicplayer
const music = document.getElementById("myAudio");
const playbutton = document.getElementById("playButton");
const pausebutton = document.getElementById("pauseButton");

if (music && playbutton && pausebutton) {
    playbutton.addEventListener('click', () => {
        music.play().catch(err => console.log("Audio failed to play:", err));
    });

    pausebutton.addEventListener('click', () => {
        music.pause();
    });
}
