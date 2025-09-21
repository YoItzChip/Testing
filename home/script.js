const image = document.getElementById('cheb-image');
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
