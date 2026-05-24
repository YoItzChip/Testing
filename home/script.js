const image = document.getElementById('cheb-image');
const clickaudio = new Audio('../audios/dash.wav'); 
let clicked = false;

image.addEventListener('click', () => {
    if (clicked) {
         clickaudio.pause();
        clickaudio.currentTime = 0;
         image.classList.remove('rotate');
    } else {
       clickaudio.play();
      image.classList.add('rotate');     }
    clicked = !clicked;
});
