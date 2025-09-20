const audio = new Audio('audios/soul[epicified].wav'); 
const image = document.getElementById('cheb-image');

let clicked = false

image.addEventListener('click', () => {
    if (clicked) {
        audio.currentTime = 0
        audio.pause();
        image.classList.remove('rotate');
    } else {
        audio.currentTime = 0
        audio.play();
        image.classList.add('rotate');
    }
    clicked = !clicked
});
audio.addEventListener('ended', () =>{
    clicked = false
    image.classList.remove('rotate');
});